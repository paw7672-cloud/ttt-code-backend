import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/auth/register",
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/auth/login",   // ✅ because baseURL already has /api
        formData
      );
      return response.data;   // ⚠️ IMPORTANT (not response.data.user)
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);