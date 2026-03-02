import { createSlice } from "@reduxjs/toolkit";
import { downloadCertificate, emailCertificate } from "../thunks/certificateThunks";

const initialState = {
  loading: false,
  error: null,
  emailMessage: null,
};

const certificateSlice = createSlice({
  name: "certificate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // DOWNLOAD
      .addCase(downloadCertificate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(downloadCertificate.fulfilled, (state, action) => {
        state.loading = false;

        const blob = action.payload;
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "certificate.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        window.URL.revokeObjectURL(url);
      })
      .addCase(downloadCertificate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Download failed";
      })

      // EMAIL
      .addCase(emailCertificate.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.emailMessage = null;
      })
      .addCase(emailCertificate.fulfilled, (state, action) => {
        state.loading = false;
        state.emailMessage = action.payload.message;
      })
      .addCase(emailCertificate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Email failed";
      });
  },
});

export default certificateSlice.reducer;