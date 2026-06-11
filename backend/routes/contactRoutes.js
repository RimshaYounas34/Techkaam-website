const router = require("express").Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// Gmail Transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mahersaba441@gmail.com",
    pass: "fogdazexpaqopebw",
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // 1. SAVE TO MONGODB (IMPORTANT FIRST)
    const savedMessage = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // 2. SEND EMAIL (NON-BLOCKING SAFE WAY)
    transporter.sendMail({
      from: "mahersaba441@gmail.com",
      to: "mahersaba441@gmail.com",
      subject: `New Contact Message - ${subject || "No Subject"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    }).catch((err) => {
      console.log("Email Error:", err.message);
    });

    // 3. RESPONSE (ALWAYS SUCCESS IF SAVED)
    return res.json({
      success: true,
      message: "Message saved successfully & email sent (if available)",
      data: savedMessage,
    });

  } catch (error) {
    console.log("Contact API Error:", error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;