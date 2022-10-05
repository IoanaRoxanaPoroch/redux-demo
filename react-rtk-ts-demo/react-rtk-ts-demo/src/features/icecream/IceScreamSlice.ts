import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ordered as cakeOrdered } from "../cake/cakeSlice";


type InitalState = {
  numOfIceCreams: number
}
const initialState: InitalState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfIceCreams--;
    },
    restock: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state, action) => {
  //     state.numOfIceCreams--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export const iceCreamReducer = iceCreamSlice.reducer;
export const { order, restock } = iceCreamSlice.actions;
