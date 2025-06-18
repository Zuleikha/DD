import * as functions from "firebase-functions";
const sgMail = require("@sendgrid/mail");

export const sendEmail = functions.https.onRequest(async (req, res ) => {
  // Set CORS headers for all responses
  res.set('Access-Control-Allow-Origin', 'https://www.dogdays.ie' );
  res.set('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
    return;
  }

  // Set your SendGrid API Key
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

  const msg = {
    to: recipientEmail,
    from: 'dogdays.ie@gmail.com', // Your verified SendGrid email
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
