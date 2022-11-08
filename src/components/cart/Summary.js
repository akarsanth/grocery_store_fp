import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { CustTableCell, TableCellBox } from "../checkout/table/index";

// MUI IMPORTS
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Summary = ({ cartData }) => {
  return (
    <Grid item xs={1} md={4.5}>
      <TableContainer component={Box}>
        <Table sx={{ border: 0 }} aria-label="cart items table">
          <TableHead sx={{ borderBottom: 2, borderColor: "grey.300" }}>
            <TableRow>
              <CustTableCell align="left" sx={{ pl: 0, fontWeight: 700 }}>
                CART TOTALS
              </CustTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ px: 0 }}>
                <TableCellBox>
                  <Typography>Order Amount</Typography>
                  <Typography fontWeight={700}>
                    NPR {cartData.orderAmount}
                  </Typography>
                </TableCellBox>

                <TableCellBox>
                  <Typography>Discount</Typography>
                  <Typography fontWeight={700}>
                    NPR {cartData.discount}
                  </Typography>
                </TableCellBox>

                <TableCellBox>
                  <Typography>Delivery Charge</Typography>
                  <Typography fontWeight={700}>
                    NPR {cartData.deliveryCharge}
                  </Typography>
                </TableCellBox>

                {cartData.extra.map((ex) => {
                  return (
                    <TableCellBox key={ex.title}>
                      <Typography>{ex.title}</Typography>
                      <Typography fontWeight={700}>NPR {ex.value}</Typography>
                    </TableCellBox>
                  );
                })}

                <TableCellBox>
                  <Typography>Total</Typography>
                  <Typography fontWeight={700}>NPR {cartData.total}</Typography>
                </TableCellBox>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ px: 0 }}>
                <Link to="/checkout" component={RouterLink} underline="none">
                  <Button variant="contained" fullWidth color="secondary">
                    Proceed To Checkout
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Summary;
