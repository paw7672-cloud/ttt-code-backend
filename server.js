import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import certificateRoutes from "./routes/certificateRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
dotenv.config({ path: "./.env" });
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/certificate", certificateRoutes);

app.use("/api/certificate", certificateRoutes);
app.use("/api/admin", adminRoutes);
// Root route
app.get("/", (req, res) => res.json({ message: "Server running 🚀" }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));