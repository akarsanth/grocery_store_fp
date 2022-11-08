import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

// MUI Components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

// Components
import {
  initialState,
  validationSchema,
} from "../../../schemas/updateProfile-schema";
import useHttp from "../../../hooks/useHttp";
import { BASE_URL } from "../../../constants";
import { REQUESTING, SUCCESS, ERROR } from "../../../hooks/useHttp/actionTypes";
import FormMessageBox from "../../FormMessageBox";
import { updateSuccessMessage } from "../../../app/features/message/message-slice";
import { fetchUserInfo } from "../../../app/features/auth/auth-actions";

const { REACT_APP_API_KEY } = process.env;

// Main component
const UpdateDetails = () => {
  const dispatch = useDispatch();

  // token
  const { accessToken, userInfo } = useSelector((state) => state.auth);

  // userinfo

  // Formik
  const {
    state: { status, response },
    makeRequest,
  } = useHttp();

  const formik = useFormik({
    initialValues: {
      firstName: userInfo?.firstName,
      lastName: userInfo?.lastName,
      contactNumber: userInfo?.mobileNumber,
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const { firstName, lastName, contactNumber } = values;

      const bodyData = {
        "first-name": firstName,
        "last-name": lastName,
        "mobile-number": contactNumber,
      };

      const config = {
        url: `${BASE_URL}/api/v4/profile`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": REACT_APP_API_KEY,
          Authorization: `Bearer ${accessToken}`,
        },
        body: bodyData,
      };

      makeRequest(config);
    },
  });

  let { handleBlur, handleSubmit, handleChange, values, touched, errors } =
    formik;

  useEffect(() => {
    if (status === SUCCESS) {
      dispatch(updateSuccessMessage("User details updated successfully!"));
      dispatch(fetchUserInfo());
    }
  }, [status, dispatch]);

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="body1" sx={{ mb: 2, fontWeight: 700 }}>
        Update Account Details
      </Typography>

      <div className="module form-module al-l">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />

              {touched.firstName && errors.firstName && (
                <p className="error-text">{errors.firstName}</p>
              )}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />

              {touched.lastName && errors.lastName && (
                <p className="error-text">{errors.lastName}</p>
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
    </Box>
  );
};

export default UpdateDetails;
