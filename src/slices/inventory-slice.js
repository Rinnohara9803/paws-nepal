import { createSlice } from "@reduxjs/toolkit";

const initialInventoryState = { pets: [], petFoods: [], petAccessories: [] };

const inventorySlice = createSlice({
  name: "inventory",
  initialState: initialInventoryState,
  reducers: {
    replacePetsList(state, action) {
      state.pets = action.payload.list;
    },
    replacePetFoodsList(state, action) {
      state.petFoods = action.payload.list;
    },
    replacePetAccessoriesList(state, action) {
      state.petAccessories = action.payload.list;
    },
  },
});

export default inventorySlice;

export const inventorySliceActions = inventorySlice.actions;
