import axios from "axios";
import { BASE_URL } from "../../../constants";
import {
  updateErrorMessage,
  updateInfoMessage,
  updateSuccessMessage,
  setLoading,
} from "../message/message-slice";
import { setChange } from "./cart-slice";

const { REACT_APP_WAREHOUSE_ID, REACT_APP_API_KEY } = process.env;

// action
export const addToCart = ({ productId, priceId, qty = 1 }) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    const { isAuthenticated, accessToken } = getState().auth;
    try {
      if (!isAuthenticated) {
        dispatch(updateInfoMessage("Login to add product to the cart!"));
        return;
      }

      let bodyData = JSON.stringify({
        productId: productId,
        priceId: priceId,
        quantity: qty,
      });

      const config = {
        method: "POST",
        url: `${BASE_URL}/api/v4/cart-product`,
        data: bodyData,
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
          "Warehouse-Id": REACT_APP_WAREHOUSE_ID,
          "Api-Key": REACT_APP_API_KEY,
        },
      };

      // add to cart request
      await axios(config);

      dispatch(updateSuccessMessage("Product added to cart successfully!"));

      dispatch(setChange(true));
    } catch (e) {
      const errors =
        e.response && e.response.data.errors
          ? e.response.data.errors
          : e.message;

      dispatch(updateErrorMessage(errors));
    }
  };
};

// update cart product
export const updateCartProduct = ({ quantity, cartProductId }) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    const { accessToken } = getState().auth;
    try {
      let bodyData = JSON.stringify({
        quantity,
        note: "Cart Update",
      });

      const config = {
        method: "PATCH",
        url: `${BASE_URL}/api/v4/cart-product/${cartProductId}`,
        data: bodyData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "Warehouse-Id": REACT_APP_WAREHOUSE_ID,
          "Api-Key": REACT_APP_API_KEY,
        },
      };

      // add to cart request
      await axios(config);

      dispatch(updateSuccessMessage("Quantity updated successfully!"));

      dispatch(setChange(true));
    } catch (e) {
      console.log(e);
      const errors =
        e.response && e.response.data.errors
          ? e.response.data.errors
          : e.message;

      dispatch(updateErrorMessage(errors));
    }
  };
};
