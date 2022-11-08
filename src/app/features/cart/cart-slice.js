import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: null,
  change: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.cartData = action.payload;
      state.change = false;
    },

    setChange(state, action) {
      state.change = action.payload;
    },
  },
});

export const { replaceCart, setChange } = cartSlice.actions;

export default cartSlice.reducer;
