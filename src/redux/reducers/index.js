import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  items: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getItem: (state, action) => {
      state.loading = true;
    },
    setItem: (state, action) => {
      state.items = [action.payload];
      state.loading = false;
    },
  },
});

export const { getItem, setItem } = weatherSlice.actions;
export default weatherSlice.reducer;
