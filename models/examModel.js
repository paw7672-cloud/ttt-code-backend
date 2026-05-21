import mongoose from "mongoose";

const examSchema = new mongoose.Schema({

  subject: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  examDate: {
    type: String,
    required: true,
  },

  resultDate: {
    type: String,
    required: true,
  },

  marks: {
    type: Number,
    default: 100,
  },

  status: {
    type: String,
    default: "Open",
  },

  icon: {
    type: String,
    default: "📘",
  },

  color: {
    type: String,
    default: "cyan",
  },

});

export default mongoose.model("Exam", examSchema);