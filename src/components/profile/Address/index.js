import React, { useState } from "react";

///////////////////////////////////////
// Redux
import { useSelector } from "react-redux";

///////////////////////////////////////
import AddressAddEditModal from "./AddressAddEditModal";

//////////////////////////////////////
// MUI Components
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";

/////////////////////////////////
// Styled Components
import { styled } from "@mui/material/styles";

const AddressTitle = styled("span")({
  fontWeight: 700,
});

// Main Component
const Address = () => {
  const address = useSelector((state) => state.auth.userInfo?.address);

  // Address Add / Edit Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Edit / Add
  const [actionType, setActionType] = useState("");

  const handleEdit = (data) => {
    setActionType("Edit");
    handleOpen();
  };

  const handleAdd = () => {
    setActionType("Add");
    handleOpen();
  };

  return (
    <>
      <Box>
        <Typography variant="body2">
          The following address will be used on the checkout page by default.
        </Typography>
        <Box sx={{ my: 3 }}>
          {address ? (
            <Box
              sx={{
                border: 2,
                borderColor: "#eee",
                display: "inline-block",
                p: 3,
              }}
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
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<EditIcon />}
                onClick={handleEdit}
              >
                Edit Address
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography variant="body1" sx={{ mb: 1 }}>
                No default address found !
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
                onClick={handleAdd}
              >
                Add Address
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {open && (
        <AddressAddEditModal
          open={open}
          handleClose={handleClose}
          address={address}
          actionType={actionType}
        />
      )}
    </>
  );
};

export default Address;
