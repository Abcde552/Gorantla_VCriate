import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "newsubs",
  initialState: {
    value: [],
  },
  reducers: {
    adduser: (state,action) => {
      state.value.push(action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { adduser } = counterSlice.actions;

export default counterSlice.reducer;
