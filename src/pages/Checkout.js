import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import BreadCrumb from "../components/BreadCrumb";
import CheckoutSteps from "../components/CheckoutSteps";
import CustomizedGrid from "../components/grid/CustomizedGrid";
import Summary from "../components/cart/Summary";
import { Separator } from "../components/checkout/table";
import Payment from "../components/checkout/Payment";
import Delivery from "../components/checkout/Delivery";

//
import { BASE_URL } from "../constants";
import useHttp from "../hooks/useHttp";

// MUI IMPORTS
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import { REQUESTING, SUCCESS } from "../hooks/useHttp/actionTypes";
import { setChange } from "../app/features/cart/cart-slice";

const { REACT_APP_API_KEY } = process.env;

// Main Component
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [deliveryId, setDeliveryId] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [error, setError] = useState(false);

  const address = useSelector((state) => state.auth.userInfo?.address);
  const cartData = useSelector((state) => state.cart.cartData);

  useEffect(() => {
    if (cartData?.cartProducts.length === 0) {
      navigate("/cart");
    }
  }, [navigate, cartData?.cartProducts]);

  // access token from redux state
  const { accessToken } = useSelector((state) => state.auth);

  const {
    state: { status, response },
    makeRequest,
  } = useHttp();

  const checkoutHandler = () => {
    setError(false);
    if (!deliveryId || !paymentId) {
      setError(true);
      return;
    }

    // if no error
    const config = {
      url: `${BASE_URL}/api/v4/cart/checkout`,
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "Api-Key": REACT_APP_API_KEY,
        Authorization: `Bearer ${accessToken}`,
        DeliveryId: deliveryId,
        PaymentMethodId: paymentId,
      },
    };

    makeRequest(config);
  };

  //
  useEffect(() => {
    if (status === SUCCESS) {
      dispatch(setChange(true));
      navigate("/orderComplete", {
        replace: true,
        state: { from: "checkout" },
      });
    }
  }, [navigate, dispatch, status, response]);

  return (
    <>
      <BreadCrumb page="Checkout" />
      <Container>
        {cartData && (
          <>
            <CheckoutSteps step2 />

            <CustomizedGrid
              container
              columns={{ xs: 1, md: 13 }}
              sx={{ mb: 12, mt: 0 }}
            >
              {/* Payment method and delivery address */}
              <Grid item xs={1} md={7.5} sx={{ mb: 10 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {/* payment */}
                  <Payment paymentId={paymentId} setPaymentId={setPaymentId} />

                  {/* Delivery */}
                  <Delivery address={address} setDeliveryId={setDeliveryId} />
                </Box>
              </Grid>

              <Grid
                item
                md={0.5}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Separator />
              </Grid>

              {/* summary */}
              <Summary cartData={cartData} page="Checkout">
                <TableRow>
                  <TableCell sx={{ px: 0 }} colSpan="2">
                    <LoadingButton
                      loading={status === REQUESTING}
                      variant="contained"
                      fullWidth
                      color="secondary"
                      onClick={checkoutHandler}
                    >
                      Complete Order
                    </LoadingButton>
                  </TableCell>
                </TableRow>
                {
                  <TableRow>
                    {error && (
                      <Alert severity="error">
                        Select Payment method and delivery address!
                      </Alert>
                    )}
                  </TableRow>
                }
              </Summary>
            </CustomizedGrid>
          </>
        )}
      </Container>
    </>
  );
};

export default Checkout;
