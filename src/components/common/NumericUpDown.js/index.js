import React from "react";

//////////////////////////////////
// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { updateCartProduct } from "../../../app/features/cart/cart-actions";

import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";

const CustButton = styled(Button)(({ theme }) => ({
  ".MuiButton-startIcon": {
    margin: 0,
  },
}));

////////////////////////////////////////////////
// MAIN Component
const NumericUpDown = ({ inStock, qty, cartProductId }) => {
  const dispatch = useDispatch();

  const updateQuantity = (newQty) => {
    dispatch(updateCartProduct({ quantity: newQty, cartProductId }));
  };

  return (
    <Box sx={{ display: "flex", gap: 0.2 }}>
      <CustButton
        disabled={qty === 1}
        variant="outlined"
        sx={{ minWidth: 0, fontSize: 20 }}
        classes={{ startIcon: { margin: 0 } }}
        startIcon={<RemoveIcon />}
        onClick={() => updateQuantity(qty - 1)}
        size="small"
      />

      <TextField
        type="number"
        InputProps={{
          readOnly: true,
        }}
        value={qty}
        disabled
        size="small"
        sx={{ width: 70 }}
      />
      <CustButton
        disabled={qty === inStock}
        variant="contained"
        sx={{ minWidth: 0 }}
        startIcon={<AddIcon />}
        onClick={() => updateQuantity(qty + 1)}
        disableElevation
        size="small"
      />
    </Box>
  );
};

export default NumericUpDown;
