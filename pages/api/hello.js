// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sendMail = require('./sendMail')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body; 

    try {
      await sendMail({
        email: email,
        subject: subject,
        message: message,
        name: name,
      });
      res.status(201).json({
        success: true,
        message: 'Email has been sent.',
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message, // Use err.message instead of err
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
