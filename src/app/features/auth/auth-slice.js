import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  isAuthenticated: false,
  accessToken: null,
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    authRequest(state) {
      state.isLoading = true;
    },

    authFail(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    authSuccess(state, action) {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
      state.accessToken = action.payload.access_token;
    },

    reset(state) {
      state = initialState;
    },

    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },

    // setAddress(state, action) {
    //   state.userInfo.address = action.payload;
    // },
  },
});

export const {
  authRequest,
  authFail,
  authSuccess,
  reset,
  setUserInfo,
  // setAddress,
} = authSlice.actions;

export default authSlice.reducer;
