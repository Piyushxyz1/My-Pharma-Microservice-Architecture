import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const storedToken = localStorage.getItem("token");
const storedUser = localStorage.getItem("user");

const initialState = {
  token: storedToken || null,
  isAuthenticated: !!storedToken,
  user:storedUser || null
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user",action.payload.user)
    },

    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;