import React from "react";

// MUI
import Box from "@mui/material/Box";

// Components
import UpdateDetails from "./UpdateDetails";
import UpdatePassword from "./UpdatePassword";

const AccountDetails = () => {
  return (
    <Box>
      <UpdateDetails />
      <UpdatePassword />
    </Box>
  );
};

export default AccountDetails;
