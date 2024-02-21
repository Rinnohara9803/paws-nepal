import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth-slice";
import inventorySlice from "../slices/inventory-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    inventory: inventorySlice.reducer,
  },
});

export default store;
