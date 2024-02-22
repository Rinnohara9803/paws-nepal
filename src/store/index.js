import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth-slice";
import inventorySlice from "../slices/inventory-slice";
import cartSlice from "../slices/cart-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    inventory: inventorySlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
