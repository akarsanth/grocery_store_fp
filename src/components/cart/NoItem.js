import React from "react";
import { Link as RouterLink } from "react-router-dom";

// MUI IMPORTS
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NoItem = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 9,
        mb: 15,
      }}
    >
      <Typography sx={{ mb: 2 }}>Your cart is currently empty!</Typography>
      <Link to="/" component={RouterLink} underline="none">
        <Button variant="outlined">Continue Shopping</Button>
      </Link>
    </Box>
  );
};

export default NoItem;
