import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setChange, replaceCart } from "../../app/features/cart/cart-slice";
import useHttp from "../../hooks/useHttp";
import { BASE_URL } from "../../constants";

const { REACT_APP_WAREHOUSE_ID, REACT_APP_API_KEY } = process.env;

// Main Component
const CartButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    state: { response },
    makeRequest,
  } = useHttp();

  const { accessToken } = useSelector((state) => state.auth);
  const { change } = useSelector((state) => state.cart);

  // Replace cart data when there is change
  useEffect(() => {
    if (accessToken && change) {
      const config = {
        url: `${BASE_URL}/api/v4/cart`,
        headers: {
          "Content-Type": "application/json",
          "Warehouse-Id": REACT_APP_WAREHOUSE_ID,
          "Api-Key": REACT_APP_API_KEY,
          Authorization: accessToken,
        },
      };

      makeRequest(config);
      // replace cart
      dispatch(setChange(false));
    }
  }, [accessToken, change, dispatch, makeRequest]);

  useEffect(() => {
    if (response) {
      dispatch(replaceCart(response));
    }
  }, [response, dispatch]);

  return (
    <div className="product_list_header">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/cart");
        }}
      >
        <fieldset>
          <input
            type="submit"
            name="submit"
            value="View your cart"
            className="button"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default CartButton;
