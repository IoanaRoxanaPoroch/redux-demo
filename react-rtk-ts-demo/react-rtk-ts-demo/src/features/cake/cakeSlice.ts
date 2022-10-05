import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfCakes: number
}

const initialState: InitialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const cakeReducer = cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
