import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers, sendCertificateEmail } from "../thunks/adminThunks";

const initialState = {
  users: [],
  loading: false,
  error: null,
  emailSuccess: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.emailSuccess = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Send Email
      .addCase(sendCertificateEmail.pending, (state) => {
        state.loading = true;
        state.emailSuccess = null;
      })
      .addCase(sendCertificateEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.emailSuccess = action.payload;
      })
      .addCase(sendCertificateEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessage } = adminSlice.actions;
export default adminSlice.reducer;