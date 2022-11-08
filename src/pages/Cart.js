import React from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import BreadCrumb from "../components/BreadCrumb";
import CheckoutSteps from "../components/CheckoutSteps";
import CustomizedGrid from "../components/grid/CustomizedGrid";
import NoItem from "../components/cart/NoItem";
import Summary from "../components/cart/Summary";
import { Separator } from "../components/checkout/table";

// MUI IMPORTS
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
                <Summary cartData={cartData}>
                  <TableRow>
                    <TableCell sx={{ px: 0 }}>
                      <Link
                        to="/checkout"
                        component={RouterLink}
                        underline="none"
                      >
                        <Button variant="contained" fullWidth color="secondary">
                          Proceed To Checkout
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                </Summary>
              </CustomizedGrid>
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
