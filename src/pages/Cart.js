import React from "react";
import { useSelector } from "react-redux";

import BreadCrumb from "../components/BreadCrumb";
import CheckoutSteps from "../components/CheckoutSteps";
import CustomizedGrid from "../components/grid/CustomizedGrid";
import NoItem from "../components/cart/NoItem";
import Summary from "../components/cart/Summary";
import { Separator } from "../components/checkout/table";

// MUI IMPORTS
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import CartProducts from "../components/cart/CartProducts";

// Main Component
const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartData);

  return (
    <>
      <BreadCrumb page="Cart" />

      <Container>
        {cartData && (
          <div>
            <CheckoutSteps step1 />

            {cartData.cartProducts.length === 0 ? (
              <NoItem />
            ) : (
              <CustomizedGrid
                container
                columns={{ xs: 1, md: 13 }}
                sx={{ mb: 12, mt: 0 }}
              >
                {/* Cart Products */}
                <CartProducts cartData={cartData} />
                <Grid
                  item
                  md={0.5}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Separator />
                </Grid>

                {/* summary */}
                <Summary cartData={cartData} />
              </CustomizedGrid>
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
