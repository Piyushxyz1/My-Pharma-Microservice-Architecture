import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const storedToken = localStorage.getItem("token");

const initialState = {
  token: storedToken || null,
  isAuthenticated: !!storedToken,
  user:null
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload);
    },

    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;