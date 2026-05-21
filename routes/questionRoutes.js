import express from "express";

import {
  createQuestion,
  getQuestionsByExam,
} from "../controller/questionController.js";

const router = express.Router();

// CREATE QUESTION
router.post("/", createQuestion);

// GET QUESTIONS
router.get("/:examId", getQuestionsByExam);

export default router;