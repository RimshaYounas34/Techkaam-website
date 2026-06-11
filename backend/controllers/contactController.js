const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // 1. SAVE TO DB (ALWAYS FIRST)
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // 2. EMAIL (SAFE - NEVER BREAK API)
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "mahersaba441@gmail.com",
          pass: "fogdazexpaqopebw",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      await transporter.sendMail({
        from: "mahersaba441@gmail.com",
        to: "mahersaba441@gmail.com",
        subject: `New Contact - ${subject || "No Subject"}`,
        html: `
          <h2>New Contact</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

    } catch (mailError) {
      console.log("EMAIL FAILED:", mailError.message);
      // ❌ but API will NOT crash
    }

    // 3. SUCCESS RESPONSE (ALWAYS)
    return res.status(200).json({
      success: true,
      message: "Message saved successfully",
      data: contact,
    });

  } catch (error) {
    console.log("CONTACT ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};