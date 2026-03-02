import nodemailer from "nodemailer";

export const sendEmailWithCertificate = async (email, filePath) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Certificate System 🎓" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Certificate 🎓",
    text: "Congratulations! Please find your certificate attached.",
    attachments: [
      {
        filename: "certificate.pdf",
        path: filePath,
      },
    ],
  });
};