import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  success: null,
  info: null,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,

  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
      state.success = null;
      state.error = null;
      state.info = null;
    },

    updateSuccessMessage(state, action) {
      state.success = action.payload;
      state.error = null;
      state.info = null;
      state.isLoading = false;
    },

    updateInfoMessage(state, action) {
      state.info = null;
      state.info = action.payload;
      state.success = null;
      state.error = null;
      state.isLoading = false;
    },

    updateErrorMessage(state, action) {
      state.success = null;
      state.info = null;
      state.error = null;
      state.error = action.payload;
      state.isLoading = false;
    },

    resetMessageState(state) {
      state.success = null;
      state.error = null;
      state.info = null;
    },
  },
});

export const {
  updateSuccessMessage,
  updateInfoMessage,
  updateErrorMessage,
  resetMessageState,
  setLoading,
} = messageSlice.actions;

export default messageSlice.reducer;
