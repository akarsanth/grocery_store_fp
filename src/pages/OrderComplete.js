import React, { useEffect, useState } from "react";

import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

// MUI IMPORTS
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import CheckoutSteps from "../components/CheckoutSteps";

const OrderComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // To handle (if user tries to access this screen randomly)
  // orderId is also passed through the navigate (state prop)
  const [from, setFrom] = useState("");
  useEffect(() => {
    if (location?.state) {
      setFrom("checkout");
    } else {
      setFrom("random");
    }
  }, [location]);

  useEffect(() => {
    if (from && from === "random") {
      navigate("/");
    }
  }, [from, navigate]);

  return (
    <Container>
      <CheckoutSteps step3 />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 9,
          mb: 15,
        }}
      >
        <CheckCircleOutlineIcon
          fontSize="large"
          color="primary"
          sx={{ mb: 1 }}
        />
        <Typography sx={{ mb: 3 }}>Order Completed Successfully!</Typography>
        <Link to={`/profile/orders`} component={RouterLink} underline="none">
          <Button variant="outlined">View Orders</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default OrderComplete;
