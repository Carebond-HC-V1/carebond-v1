require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const mysql = require("mysql"); // Use mysql2 for better async support
const SibApiV3Sdk = require("sib-api-v3-sdk");

const app = express();
app.use(express.json());

// Enable CORS with proper settings
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Create a MySQL Connection Pool (Efficient for handling multiple requests)
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10, // Allow up to 10 concurrent connections
});

// ✅ Check DB connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("✅ Database Connected!");
  connection.release(); // Release connection back to pool
});

// ✅ Setup SendinBlue API
const apiKey = process.env.SIB_API_KEY;
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey = apiKey;

// ✅ Route: Send Email using SendinBlue
app.post("/api/send-email", async (req, res) => {
  const { mail, name } = req.body;
  if (!mail || !name) {
    return res.status(400).json({ message: "Missing required fields: name and mail" });
  }

  try {
    const emailClient = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = {
      to: [{ email: "sree.raghuvamshi21@gmail.com", name: "Raghu" }],
      sender: { email: "sree.raghuvamshi21@gmail.com", name: "Sree Raghuvamshi" },
      subject: "Subject Line Testing",
      htmlContent: `<html><body>
      Someone enquired on your site<br/>
      <p>Name: ${name}</p>
      <p>Email: ${mail}</p>
      </body></html>`,
    };

    const response = await emailClient.sendTransacEmail(sendSmtpEmail);
    console.log("📧 Email sent:", response);
    res.status(200).json({ message: "Email sent successfully!", response });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});

// ✅ Route: Insert Service Request into Database
app.post("/api/v1/serviceRequest", async (req, res) => {
  const payload = req.body;

  // Required Fields
  const requiredFields = ["service_type", "booking_date", "employee_id", "name"];
  const missingFields = requiredFields.filter(field => !payload[field]);

  // Check if any required field is missing
  if (missingFields.length > 0) {
    return res.status(400).json({ message: `Missing required fields: ${missingFields.join(", ")}` });
  }

  const insertQuery = `
    INSERT INTO healthcare_records 
    (employee_id, name, age, gender, contact_number, email, address, hospital, service_type, doctor_assigned, booking_date, appointment_time, operation_name, status, prescription, follow_up_date, note_remarks) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

  // Extracting data, setting optional fields to `NULL` if not provided
  const recordData = [
    payload.employee_id,                 // Required
    payload.name,                        // Required
    payload.age || null,                 // Optional
    payload.gender || null,              // Optional
    payload.contact_number || null,      // Optional
    payload.email || null,               // Optional
    payload.address || null,             // Optional
    payload.hospital || null,            // Optional
    payload.service_type,                // Required
    payload.doctor_assigned || null,     // Optional
    payload.booking_date,                // Required
    payload.appointment_time || null,    // Optional
    payload.operation_name || null,      // Optional
    payload.status || "Pending",         // Optional (Default: "Pending")
    payload.prescription || null,        // Optional
    payload.follow_up_date || null,      // Optional
    payload.note_remarks || null         // Optional
  ];

  db.query(insertQuery, recordData, (err, results) => {
    if (err) {
      console.error("❌ Database Insertion Error:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    console.log("✅ Record inserted:", results.insertId);
    res.status(201).json({ message: "Service request created", id: results.insertId });
  });
});

app.put("/api/v1/serviceRequest/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // Dynamic fields from request body

  // Ensure at least one field is provided for update
  if (!updates || Object.keys(updates).length === 0) {
    return res.status(400).json({ message: "At least one field must be provided for update." });
  }

  // Build dynamic query
  const fields = Object.keys(updates).map((key) => `${key} = ?`).join(", ");
  const values = Object.values(updates);
  values.push(id); // Add ID for WHERE clause

  const updateQuery = `
    UPDATE healthcare_records 
    SET ${fields} 
    WHERE id = ?;
  `;

  db.query(updateQuery, values, (err, results) => {
    if (err) {
      console.error("❌ Database Update Error:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "No record found with the given ID." });
    }

    console.log("✅ Record updated:", results);
    res.status(200).json({ message: "Service request updated successfully." });
  });
});


// ✅ Start the Express Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
