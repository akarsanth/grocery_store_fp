import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

// Mui
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

//
import { BASE_URL } from "../../constants";
import useHttp from "../../hooks/useHttp";
import { Box } from "@mui/material";
import AddressBox from "../common/AddressBox";

const { REACT_APP_API_KEY } = process.env;

// Main component
const Delivery = ({ deliveryId, setDeliveryId }) => {
  const [addresses, setAddresses] = useState(null);

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

    makeRequest(config);
  }, [makeRequest, accessToken]);

  // set response to state
  useEffect(() => {
    if (response) {
      console.log(response);
      setAddresses(response);
    }
  }, [response]);

  const handleChange = (e) => {
    setDeliveryId(e.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 16, mt: 1, mb: 1 }}>
          Delivery Address
        </Typography>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={deliveryId}
          onChange={handleChange}
        >
          {addresses && (
            <>
              {addresses.map((address) => {
                return (
                  <Box
                    key={address.id}
                    sx={{ display: "flex", flexDirection: "column", mb: 3 }}
                  >
                    <FormControlLabel
                      key={address.id}
                      value={address.id}
                      control={<Radio />}
                      label={address.title}
                    />
                    <AddressBox address={address} />
                  </Box>
                );
              })}
            </>
          )}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Delivery;
