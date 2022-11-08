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
} from "../../../schemas/changePassword-schema";
import useHttp from "../../../hooks/useHttp";
import { BASE_URL } from "../../../constants";
import { REQUESTING, SUCCESS, ERROR } from "../../../hooks/useHttp/actionTypes";
import FormMessageBox from "../../FormMessageBox";
import { updateSuccessMessage } from "../../../app/features/message/message-slice";
import { fetchUserInfo } from "../../../app/features/auth/auth-actions";

const { REACT_APP_API_KEY } = process.env;

// Main component
const UpdatePassword = () => {
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
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const { oldPassword, newPassword, confirmNewPassword } = values;

      const bodyData = {
        "new-password": newPassword,
        "old-password": oldPassword,
        "confirm-password": confirmNewPassword,
      };

      console.log(bodyData);
      const config = {
        url: `${BASE_URL}/api/v4/profile/change-password`,
        method: "POST",
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

  let {
    handleBlur,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    resetForm,
  } = formik;

  useEffect(() => {
    if (status === SUCCESS) {
      dispatch(updateSuccessMessage("Password changed successfully!"));
      resetForm();
    }
  }, [status, dispatch, resetForm]);

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="body1" sx={{ mb: 2, fontWeight: 700 }}>
        Change Password
      </Typography>

      <div className="module form-module al-l">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="password"
                name="oldPassword"
                placeholder="Old Password*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.oldPassword}
              />

              {touched.oldPassword && errors.oldPassword && (
                <p className="error-text">{errors.oldPassword}</p>
              )}
            </div>

            <div className="input-group">
              <input
                type="password"
                name="newPassword"
                placeholder="New Password*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPassword}
              />

              {touched.newPassword && errors.newPassword && (
                <p className="error-text">{errors.newPassword}</p>
              )}
            </div>

            <div className="input-group">
              <input
                type="password"
                name="confirmNewPassword"
                placeholder="Confirm New Password*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmNewPassword}
              />

              {touched.confirmNewPassword && errors.confirmNewPassword && (
                <p className="error-text">{errors.confirmNewPassword}</p>
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

export default UpdatePassword;
