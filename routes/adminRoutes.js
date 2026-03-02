import express from "express";
import { getAllUsers } from "../controller/adminController.js";
import { emailCertificate, sendAllCertificates, downloadAllCertificates } from "../controller/certificateController.js";
import { uploadExcelData, uploadExcelMiddleware } from "../controller/adminController.js";

const router = express.Router();

// GET all users
router.get("/users", getAllUsers);
router.post ("/send-email", emailCertificate);

// Send All certificate 
router.post ("/send-all", sendAllCertificates);
router.post ("/download-all",downloadAllCertificates);
router.post(
  "/upload-excel",
  uploadExcelMiddleware,
  uploadExcelData
);
export default router;