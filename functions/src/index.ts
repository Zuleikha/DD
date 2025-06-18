import * as functions from "firebase-functions";
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({ origin: true }); // Initialize cors middleware

export const sendEmail = functions.https.onRequest(async (req, res ) => {
  // Use the cors middleware
  cors(req, res, async () => {
    // Set your SendGrid API Key here, inside the function, to ensure it's loaded correctly.
    sgMail.setApiKey(functions.config().sendgrid.key);

    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { recipientEmail, subject, message } = req.body;

    if (!recipientEmail || !subject || !message) {
      res.status(400).send("Missing required fields: recipientEmail, subject, message");
      return;
    }

    // IMPORTANT: Replace \'your-verified-sender@example.com\' with the email address
    // you verified in SendGrid (Single Sender Verification or Domain Authentication).
    const msg = {
      to: recipientEmail,
      from: 'your-verified-sender@example.com', // Use the email address you verified with SendGrid
      subject: subject,
      html: `<p>${message}</p>`,
    };

    try {
      await sgMail.send(msg);
      console.log("Email sent successfully via SendGrid!");
      res.status(200).send("Email sent successfully!");
    } catch (error: any) {
      console.error("Error sending email via SendGrid:", error.response?.body || error);
      res.status(500).send("Error sending email.");
    }
  });
});
