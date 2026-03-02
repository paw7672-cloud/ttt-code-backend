import express from "express";
import {
  downloadCertificate,
  emailCertificate,
} from "../controller/certificateController.js";

const router = express.Router();

router.post("/download", downloadCertificate);
router.post("/send-email", emailCertificate);

export default router;