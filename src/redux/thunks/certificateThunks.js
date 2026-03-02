import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";// your axios instance

// ✅ Download certificate
export const downloadCertificate = createAsyncThunk(
  "certificate/download",
  async (name) => {
    const res = await axiosInstance.post("/certificate/download", { name }, { responseType: "blob" });

    // Download the PDF directly
    const blob = new Blob([res.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}-certificate.pdf`;
    a.click();

    return name; // optional, serializable for Redux
  }
);

// ✅ Send certificate via email
export const emailCertificate = createAsyncThunk(
  "certificate/email",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        "/certificate/send-email",   // ✅ correct route
        data
      );
      return res.data;
    } catch (error) {
      return rejectWithValue("Failed to send email");
    }
  }
);