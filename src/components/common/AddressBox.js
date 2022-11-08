import React from "react";

//////////////////////////////////////
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Styled Components
import { styled } from "@mui/material/styles";

const AddressTitle = styled("span")({
  fontWeight: 700,
});

const AddressBox = ({ address, children }) => {
  return (
    <Box
      sx={{
        border: 2,
        borderColor: "#eee",
        display: "inline-block",
        p: 3,
      }}
      key={address.id}
    >
      <Box
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Typography>
          <AddressTitle>Address Title: </AddressTitle>
          {address.title}
        </Typography>
        <Typography>
          <AddressTitle>Customer: </AddressTitle>
          {address.customer}
        </Typography>
        <Typography>
          <AddressTitle>Contact No: </AddressTitle>
          {address.contactNo}
        </Typography>
        <Typography>
          <AddressTitle>Country: </AddressTitle>
          {address.detail.country}
        </Typography>

        <Typography>
          <AddressTitle>District: </AddressTitle>
          {address.detail.district}
        </Typography>

        <Typography>
          <AddressTitle>Province: </AddressTitle>
          {address.detail.provience}
        </Typography>

        <Typography>
          <AddressTitle>Ward: </AddressTitle>
          {address.detail.ward}
        </Typography>
      </Box>

      {/* action buttons if required */}
      {children}
    </Box>
  );
};

export default AddressBox;
