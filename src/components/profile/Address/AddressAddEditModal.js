import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateSuccessMessage } from "../../../app/features/message/message-slice";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import useHttp from "../../../hooks/useHttp";
import { BASE_URL } from "../../../constants";
import { REQUESTING, SUCCESS, ERROR } from "../../../hooks/useHttp/actionTypes";
import {
  initialState,
  validationSchema,
} from "../../../schemas/address-schema";
import FormMessageBox from "../../FormMessageBox";

// MUI Components
import Typography from "@mui/material/Typography";

// Component Import
import ModalWrapper from "../../AddEditModal";
import { fetchUserInfo } from "../../../app/features/auth/auth-actions";
import { setAddress } from "../../../app/features/auth/auth-slice";

const { REACT_APP_API_KEY } = process.env;

// Main Component
const AddressAddEditModal = (props) => {
  const { open, handleClose, address, actionType } = props;

  const dispatch = useDispatch();

  // access token from redux state
  const { accessToken } = useSelector((state) => state.auth);

  const {
    state: { status, response },
    makeRequest,
  } = useHttp();

  const formik = useFormik({
    initialValues:
      actionType === "Edit"
        ? {
            title: address.title,
            contactNumber: address.contactNo,
            longitude: address.longitude,
            latitude: address.latitude,
            customer: address.customer,
          }
        : initialState,
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const { title, customer, contactNumber, longitude, latitude } = values;

      const bodyData = {
        title,
        customer,
        contact_no: contactNumber,
        longitude,
        latitude,
        isDefault: true,
      };

      let config = {
        headers: {
          "Content-Type": "application/json",
          "Api-Key": REACT_APP_API_KEY,
          Authorization: `Bearer ${accessToken}`,
        },
        body: bodyData,
      };

      if (actionType === "Edit") {
        config = {
          ...config,
          method: "PATCH",
          url: `${BASE_URL}/api/v4/delivery-address/${address.id}`,
        };
      } else {
        config = {
          ...config,
          method: "POST",
          url: `${BASE_URL}/api/v4/delivery-address`,
        };
      }

      makeRequest(config);
    },
  });

  let { handleBlur, handleSubmit, handleChange, values, touched, errors } =
    formik;

  useEffect(() => {
    if (status === SUCCESS) {
      dispatch(setAddress(response));
      dispatch(
        updateSuccessMessage(
          `Address ${actionType === "Edit" ? "edited" : "added"} successfully!`
        )
      );
      handleClose();
    }
  }, [status, handleClose, dispatch, actionType, response]);

  return (
    <>
      <ModalWrapper open={open} handleClose={handleClose}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
          {`${actionType} address details`}
        </Typography>

        {/* Form */}
        <div className="module form-module">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Address Title*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />

                {touched.title && errors.title && (
                  <p className="error-text">{errors.title}</p>
                )}
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="customer"
                  placeholder="Customer*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.customer}
                />

                {touched.customer && errors.customer && (
                  <p className="error-text">{errors.customer}</p>
                )}
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="latitude"
                  placeholder="Latitude*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.latitude}
                />

                {touched.latitude && errors.latitude && (
                  <p className="error-text">{errors.latitude}</p>
                )}
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="longitude"
                  placeholder="Longitude*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.longitude}
                />
                {touched.longitude && errors.longitude && (
                  <p className="error-text">{errors.longitude}</p>
                )}
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contactNumber}
                />

                {touched.contactNumber && errors.contactNumber && (
                  <p className="error-text">{errors.contactNumber}</p>
                )}
              </div>

              <input type="submit" value="Save Changes" />
            </form>

            <FormMessageBox>
              {status === REQUESTING && <CircularProgress />}

              {status === ERROR && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  {response.map((error) => (
                    <Alert key={error.title} severity="error">
                      {error.message}
                    </Alert>
                  ))}
                </Box>
              )}
            </FormMessageBox>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default AddressAddEditModal;
