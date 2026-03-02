import { configureStore } from "@reduxjs/toolkit";

// this is pages routes yar 

//
import authReducer from "./slice/authSlice.js";
import certificateReducer from "./slice/certificateSlice.js";
import adminReducer from "./slice/adminSlice.js";



export const store = configureStore({
  reducer: {
    auth: authReducer,
    certificate: certificateReducer,
    admin: adminReducer,


  },
});