import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "newcomment",
  initialState: {
    value: [],
  },
  reducers: {
    addcomment: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addcomment} = counterSlice.actions;

export default counterSlice.reducer;
