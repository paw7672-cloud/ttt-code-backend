import User from "../models/user.js";
import bcrypt from "bcryptjs";

// Signup
export const register = async (req, res) => {
  const { name, email, password, whatsapp, className, role } = req.body;

  if (!name || !email || !password || !whatsapp || !className) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ❌ No manual hashing needed anymore
    const newUser = await User.create({
      name,
      email,
      password,   // plain password
      whatsapp,
      className,
      role: role === "admin" ? "admin" : "user",
    });

    const userData = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      whatsapp: newUser.whatsapp,
      className: newUser.className,
      role: newUser.role,
    };

    res.status(201).json({
      message: "User registered successfully",
      user: userData,
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
// export const register = async (req, res) => {
//   const { name, email, password, whatsapp, className, role } = req.body;

//   if (!name || !email || !password || !whatsapp || !className) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const existing = await User.findOne({ email });
//     if (existing) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       whatsapp,
//       className,
//       role: role === "admin" ? "admin" : "user",  // ✅ safe role set
//     });

//     // ❌ Never send password
//     const userData = {
//       _id: newUser._id,
//       name: newUser.name,
//       email: newUser.email,
//       whatsapp: newUser.whatsapp,
//       className: newUser.className,
//       role: newUser.role,
//     };

//     res.status(201).json({
//       message: "User registered successfully",
//       user: userData,
//     });

//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };


export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email & password required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ❌ Never send password back
    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      whatsapp: user.whatsapp,
      className: user.className,
      role: user.role,   // 👈 important
    };

    res.json({
      message: "Login successful",
      user: userData,
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};