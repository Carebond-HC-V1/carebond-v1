const express = require("express");
const SibApiV3Sdk = require("sib-api-v3-sdk");
const app = express();
app.use(express.json());

const apiKey = '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';
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey = apiKey;
app.post("/api/send-email", async (req, res) => {
  const { mail, name } = req.body;
  try {
    const email = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = {
      to: [{ email: mail, name: name }],
      sender: { email: "sree.raghuvamshi21@gmail.com", name: "Sree Raghuvamshi" },
      subject: "subject line testing",
      htmlContent: `<html><body><p>hello I am working now email is working</p></body></html>`,
    };
    const response = await email.sendTransacEmail(sendSmtpEmail);
    console.log(response);
    res.status(200).send({ message: "Email sent successfully!", response });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to send email", error });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
