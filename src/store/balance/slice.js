import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.amount += action.payload;
    },
    withdraw: (state, action) => {
      state.amount -= action.payload;
    },
    reset: (state) => {
      state.amount = initialState.amount;
    },
  },
});

export const { deposit, withdraw, reset } = balanceSlice.actions;

export default balanceSlice.reducer;
