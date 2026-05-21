import express from "express";

import {
  createExam,
  getExams,
  updateExam,
} from "../controller/examController.js";

const router = express.Router();

router.post("/", createExam);

router.get("/", getExams);

router.put("/:id", updateExam);

export default router;