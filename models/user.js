import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    whatsapp: { type: String, required: true },

    className: { type: String, required: true },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// 🔥 AUTO HASH PASSWORD FOR ALL CASES
userSchema.pre("save", async function (next) {

  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// 🔥 PASSWORD COMPARE METHOD
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },

//     email: { type: String, required: true, unique: true },

//     password: { type: String, required: true },

//     whatsapp: { type: String, required: true },

//     className: { type: String, required: true },

//     role: {
//       type: String,
//       enum: ["user", "admin"],   // ✅ Only these allowed
//       default: "user",           // ✅ Default role
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);