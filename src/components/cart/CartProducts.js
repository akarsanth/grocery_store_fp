import React from "react";
import { Link as RouterLink } from "react-router-dom";

import NumericUpDown from "../common/NumericUpDown.js";

// MUI IMPORTS
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "@mui/material/Link";

const CartProducts = ({ cartData }) => {
  const removeFromCartHandler = () => {};
  return (
    <Grid item xs={1} md={7.5} sx={{ mb: 10 }}>
      <TableContainer component={Box}>
        <Table sx={{ border: 0 }} aria-label="cart items table">
          <TableHead sx={{ borderBottom: 2, borderColor: "grey.300" }}>
            <TableRow>
              <TableCell align="left" sx={{ pl: 0 }}>
                PRODUCT
              </TableCell>
              <TableCell>PRICE</TableCell>
              <TableCell>QUANTITY</TableCell>
              <TableCell align="right" sx={{ pr: 0 }}>
                SUBTOTAL
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartData?.cartProducts.map((cartProduct) => (
              <TableRow key={cartProduct.id}>
                <TableCell align="left" sx={{ pl: 0 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeFromCartHandler(cartProduct.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Link
                      to={`/product/${cartProduct.product.id}`}
                      component={RouterLink}
                      underline="none"
                    >
                      <img
                        src={cartProduct.product.images[0].imageName}
                        alt="product"
                        height={80}
                        width={80}
                      />
                    </Link>

                    <Box>
                      <Link
                        to={`/product/${cartProduct.product.id}`}
                        component={RouterLink}
                        underline="none"
                      >
                        {cartProduct.product.title}
                      </Link>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }}>
                  NPR {cartProduct.selectedUnit.sellingPrice}
                </TableCell>
                <TableCell>
                  <NumericUpDown
                    qty={cartProduct.quantity}
                    inStock={cartProduct.selectedUnit.stock}
                    cartProductId={cartProduct.id}
                  />
                </TableCell>
                <TableCell align="right" sx={{ pr: 0, fontWeight: 700 }}>
                  NPR{" "}
                  {cartProduct.selectedUnit.sellingPrice * cartProduct.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CartProducts;
