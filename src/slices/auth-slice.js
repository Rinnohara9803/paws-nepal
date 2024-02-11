import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    replaceLoggedInState(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export default authSlice;

export const authSliceActions = authSlice.actions;
