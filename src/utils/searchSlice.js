import { createSlice } from "@reduxjs/toolkit";

const seacrhSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
        state = Object.assign(state, action.payload);
    },
  },
});
export const { cacheResults } = seacrhSlice.actions;
export default seacrhSlice.reducer;
