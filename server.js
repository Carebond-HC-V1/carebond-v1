const express = require("express");
const SibApiV3Sdk = require("sib-api-v3-sdk");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Accept");
  next();
});
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow these HTTP methods
    allowedHeaders: "*", // Allow all headers
  })
);

const apiKey = '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';
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey = apiKey;
app.post("/api/send-email", async (req, res) => {
  const { mail, name } = req.body;
  console.log(mail, name);
  try {
    const email = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = {
      to: [{ email: "sree.raghuvamshi21@gmail.com", name: "Raghu" }],
      sender: { email: "sree.raghuvamshi21@gmail.com", name: "Sree Raghuvamshi" },
      subject: "subject line testing",
      htmlContent: `<html><body>someone enquired in your site
      <br/><p>name: ${name}</br> mail: ${mail}</p></body></html>`,
    };
    const response = await email.sendTransacEmail(sendSmtpEmail);
    console.log(response);
    res.status(200).send({ message: "Email sent successfully!", response });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to send email"});
  }
});
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
