import { createSlice } from "@reduxjs/toolkit";

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState: { categories: [] },

  reducers: {
    setCategoryList(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategoryList } = categoryListSlice.actions;

export default categoryListSlice.reducer;
