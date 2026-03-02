// redux/thunks/adminThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios"; // your axios setup

export const fetchAllUsers = createAsyncThunk(
  "admin/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/admin/users");
      return res.data.users; // array of users
    } catch (err) {
      return rejectWithValue(err.response.data.message || "Failed to fetch users");
    }
  }
);
export const sendCertificateEmail = createAsyncThunk(
  "admin/sendCertificateEmail",
  async ({ name, email }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/admin/send-email", {
        name,
        email,
      });

      return res.data.message;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to send email"
      );
    }
  }
);
// Send All Certificates  for Email 
export const sendAllCertificates = createAsyncThunk(
  "admin/sendAllCertificates",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/admin/send-all");
      return res.data.message;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to send all"
      );
    }
  }
);

// Download all Certificates 
export const downloadAllCertificates = createAsyncThunk(
  "admin/downloadAllCertificates",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/admin/download-all", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "all-certificates.zip");
      document.body.appendChild(link);
      link.click();

    } catch (err) {
      return rejectWithValue("Download failed");
    }
  }
  );export const uploadExcel = createAsyncThunk(
  "admin/uploadExcel",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axiosInstance.post(
        "/admin/upload-excel",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return res.data.message;

    } catch (err) {
      console.log("FRONTEND ERROR:", err.response?.data);
      return rejectWithValue(
        err.response?.data?.message || "Upload failed"
      );
    }
  }
);