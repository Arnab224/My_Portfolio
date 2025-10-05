// controllers/contactController.js
const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact from ${name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error sending email'
    });
  }
};