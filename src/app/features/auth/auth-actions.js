import {
  authFail,
  authRequest,
  authSuccess,
  reset,
  setUserInfo,
} from "./auth-slice";
import {
  updateSuccessMessage,
  updateInfoMessage,
} from "../message/message-slice";
import { BASE_URL } from "../../../constants/index";

import axios from "axios";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_API_KEY } =
  process.env;

export const authUser = (loginDetails) => {
  return async (dispatch) => {
    const { email, password, grantType, refreshToken } = loginDetails;

    try {
      dispatch(reset());
      dispatch(authRequest());

      const config = {
        headers: {
          "Content-Type": "application/json",
          "Api-Key": REACT_APP_API_KEY,
        },
      };

      let bodyData = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: REACT_APP_CLIENT_SECRET,
        grant_type: grantType,
      };

      if (grantType === "password") {
        bodyData = { ...bodyData, username: email, password };
      } else {
        bodyData = { ...bodyData, refresh_token: refreshToken };
      }

      // Making request
      const { data } = await axios.post(
        `${BASE_URL}/api/v4/auth/login`,
        bodyData,
        config
      );

      // set refresh token
      localStorage.setItem("refreshToken", data.refresh_token);

      dispatch(authSuccess(data));
      dispatch(updateSuccessMessage("Logged in successfully!"));
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.errors[0].message
          ? error.response.data.errors[0].message
          : error.message;

      dispatch(authFail(errorMessage));
    }
  };
};

export const fetchUserInfo = () => {
  return async (dispatch, getState) => {
    const { accessToken } = getState().auth;

    const config = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "Api-Key": REACT_APP_API_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
    };

    // userinfo
    let { data } = await axios({
      url: `${BASE_URL}/api/v4/profile/show`,
      ...config,
    });
    let userInfo = data.data;

    // address
    const { data: address } = await axios({
      url: `${BASE_URL}/api/v4/delivery-address`,
      ...config,
    });

    userInfo = { ...userInfo, address: address.data[0] || null };

    dispatch(setUserInfo(userInfo));
  };
};

// logout
export const logout = () => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("refreshToken");
      window.location.href = "/";

      dispatch(updateInfoMessage("Logged out successfully!"));
    } catch (err) {
      window.location.href = "/";
    }
  };
};
