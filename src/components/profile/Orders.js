import React, { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

import useHttp from "../../hooks/useHttp";
import { BASE_URL } from "../../constants";

//////////////////////////////////
// MUI IMPORTS
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";
import { SUCCESS } from "../../hooks/useHttp/actionTypes";

const { REACT_APP_API_KEY } = process.env;

// Main Component
const Orders = () => {
  const dispatch = useDispatch();

  // access token from redux state
  const { accessToken } = useSelector((state) => state.auth);

  const {
    state: { status, response: orders },
    makeRequest,
  } = useHttp();

  useEffect(() => {
    const config = {
      url: `${BASE_URL}/api/v4/order`,
      headers: {
        "Content-Type": "application/json",
        "Api-Key": REACT_APP_API_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
    };

    makeRequest(config);
  }, [makeRequest, accessToken]);

  useEffect(() => {
    if (status === SUCCESS) {
      console.log(orders);
    }
  }, [status, orders]);

  return (
    <>
      {orders && (
        <>
          {orders.length === 0 ? (
            <>
              <Alert severity="info" sx={{ mb: 2 }}>
                You have not made any orders yet!
              </Alert>
              <Link
                to="/"
                component={RouterLink}
                underline="none"
                sx={{ display: "inline-block" }}
              >
                Continue Shopping !
              </Link>
            </>
          ) : (
            <>
              <TableContainer component={Box}>
                <Table sx={{ border: 0 }} aria-label="cart items table">
                  {/* Head */}
                  <TableHead sx={{ borderBottom: 2, borderColor: "grey.300" }}>
                    <TableRow>
                      <TableCell align="left" sx={{ pl: 0 }}>
                        ORDER ID
                      </TableCell>
                      <TableCell>ORDER NUMBER</TableCell>
                      <TableCell>ORDER DATE</TableCell>
                      <TableCell>TOTAL</TableCell>
                      <TableCell>STATUS</TableCell>
                    </TableRow>
                  </TableHead>
                  {/* Body */}
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell align="left" sx={{ pl: 0 }}>
                          <Link
                            to={`/profile/vieworder/${order.id}`}
                            component={RouterLink}
                            underline="none"
                          >
                            #{order.id}
                          </Link>
                        </TableCell>
                        <TableCell>{order.orderNumber}</TableCell>
                        <TableCell>
                          {order.orderDate.substring(0, 10)}
                        </TableCell>
                        <TableCell>{`NPR ${order.total}`}</TableCell>
                        <TableCell>
                          <Chip variant="outlined" label={order.status} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Orders;
