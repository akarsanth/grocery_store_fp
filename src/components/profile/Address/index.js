import React, { useState, useEffect } from "react";

///////////////////////////////////////
// Redux
import { useSelector } from "react-redux";

///////////////////////////////////////
import AddressAddEditModal from "./AddressAddEditModal";

//
import useHttp from "../../../hooks/useHttp";
import { BASE_URL } from "../../../constants";

//////////////////////////////////////
// MUI Components
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import DeleteAddress from "./DeleteAddress";

/////////////////////////////////
// Styled Components
import AddressBox from "../../common/AddressBox";

const { REACT_APP_API_KEY } = process.env;

// Main Component
const Address = () => {
  const [addresses, setAddresses] = useState(null);
  const [addressChange, setAddressChange] = useState(true);
  // const [selectedAddress, setSelectedAddress] = useState(null);
  const { accessToken } = useSelector((state) => state.auth);

  const {
    state: { response },
    makeRequest,
  } = useHttp();

  useEffect(() => {
    const config = {
      url: `${BASE_URL}/api/v4/delivery-address`,

      headers: {
        "Content-Type": "application/json",
        "Api-Key": REACT_APP_API_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
    };

    if (addressChange) {
      makeRequest(config);
      setAddressChange(false);
    }
  }, [makeRequest, accessToken, addressChange]);

  // set response to state
  useEffect(() => {
    if (response) {
      setAddresses(response);
    }
  }, [response]);

  // Address Add / Edit Modal
  const [open, setOpen] = useState(false);
  const handleOpen = (addressId) =>
    setOpen({ open: true, selectedAddressId: addressId });
  const handleClose = () => setOpen(null);

  // Edit / Add
  const [actionType, setActionType] = useState("");

  const handleEdit = (addressId) => {
    // setSelectedAddress(address.find((ad) => ad.id === addressId));
    setActionType("Edit");
    handleOpen(addressId);
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
        <Box sx={{ my: 3, display: "flex", gap: 3, flexWrap: "wrap" }}>
          {/* addresses */}
          {addresses && (
            <>
              {addresses.map((address) => {
                return (
                  <AddressBox address={address} key={address.id}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<EditIcon />}
                        onClick={() => handleEdit(address.id)}
                      >
                        Edit Address
                      </Button>

                      <DeleteAddress
                        setAddressChange={setAddressChange}
                        addressId={address.id}
                      />
                    </Box>
                  </AddressBox>
                );
              })}
            </>
          )}

          <Box>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Add new address!
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
        </Box>
      </Box>

      {open && (
        <AddressAddEditModal
          open={open.open}
          handleClose={handleClose}
          address={addresses.find(
            (address) => address.id === open.selectedAddressId
          )}
          actionType={actionType}
          setAddressChange={setAddressChange}
        />
      )}
    </>
  );
};

export default Address;
