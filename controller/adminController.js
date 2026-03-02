// controllers/adminController.js
import User from "../models/user.js";
import multer from "multer";
import xlsx from "xlsx";
import fs from "fs";


// Get all users (admin only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // exclude password
    res.json({ users });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const emailCertificate = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email required" });
    }

    // For testing (skip certificate generation first)
    await sendEmailWithCertificate(email);

    res.json({ message: "Certificate sent successfully ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Email Error" });
  }
};

// Multer config

const upload = multer({ dest: "uploads/" });
export const uploadExcelMiddleware = upload.single("file");

export const uploadExcelData = async (req, res) => {
  try {

    console.log("FILE RECEIVED:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;

    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    for (let row of data) {

      if (!row.name || !row.email) continue;

      const existing = await User.findOne({ email: row.email });
      if (existing) continue;

      await User.create({
        name: row.name,
        email: row.email,
        whatsapp: row.whatsapp || "0000000000",
        className: row.className || "Unknown",
        password: "123456",
        role: "user",
      });
    }

    fs.unlinkSync(filePath);

    res.json({ message: "Excel Uploaded Successfully ✅" });

  } catch (err) {
    console.error("BACKEND ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};