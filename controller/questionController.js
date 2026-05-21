// =========================================
// FILE: controller/questionController.js
// =========================================

import Question from "../models/questionModel.js";

// =========================================
// CREATE QUESTION
// =========================================

export const createQuestion = async (req, res) => {

  try {

    const question = await Question.create(
      req.body
    );

    res.status(201).json(question);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// =========================================
// GET QUESTIONS BY EXAM
// =========================================

export const getQuestionsByExam = async (req, res) => {

  try {

    const questions = await Question.find({

      examId: req.params.examId,

    });

    res.json(questions);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};