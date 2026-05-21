// =========================================
// USER MODEL UPDATE
// FILE: models/user.js
// =========================================

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(

  {

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    whatsapp: {
      type: String,
      required: true,
    },

    className: {
      type: String,
      required: true,
    },

  

    // PROFILE IMAGE

    profilePic: {
      type: String,
      default: "",
    },

    // ADMIN ONLY UPDATE THESE

    marks: {
      type: Number,
      default: 0,
    },

    role: {
  type: String,
  enum: ["user", "admin"],
  default: "student",
},

    resultStatus: {
      type: String,
      default: "Pending",
    },

    examDate: {
      type: String,
      default: "",
    },

  },

  { timestamps: true }

);

// HASH PASSWORD

userSchema.pre("save", async function (next) {

  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();

});

export default mongoose.model("User", userSchema);