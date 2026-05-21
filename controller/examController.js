import Exam from "../models/examModel.js";

// CREATE EXAM
export const createExam = async (req, res) => {

  try {

    const exam = await Exam.create(req.body);

    res.status(201).json(exam);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// GET ALL EXAMS
export const getExams = async (req, res) => {

  try {

    const exams = await Exam.find();

    res.json(exams);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// UPDATE EXAM
export const updateExam = async (req, res) => {

  try {

    const exam = await Exam.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(exam);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};