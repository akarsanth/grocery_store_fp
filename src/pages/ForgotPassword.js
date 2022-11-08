import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Banner from "../components/layout/Banner";
import { useFormik } from "formik";
import useHttp from "../hooks/useHttp";
import { BASE_URL } from "../constants";
import {
  initialState,
  validationSchema,
} from "../schemas/forgotpassword-schema";
import FormMessageBox from "../components/FormMessageBox";
import { REQUESTING, SUCCESS, ERROR } from "../hooks/useHttp/actionTypes";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

const { REACT_APP_API_KEY } = process.env;

// Main Component
const ForgotPassword = () => {
  const {
    state: { status, response },
    makeRequest,
  } = useHttp();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const { email } = values;

      const bodyData = {
        email,
      };

      const config = {
        url: `${BASE_URL}/api/v4/auth/forgot-password`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": REACT_APP_API_KEY,
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
      resetForm();
    }
  }, [status, resetForm]);

  return (
    <>
      <BreadCrumb page="Forgot Password" />

      <Banner>
        <div className="w3_login">
          <h3>Forgot Password</h3>
          <div className="module form-module">
            <div className="form">
              <h2>Enter your email.</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <p className="error-text">{errors.email}</p>
                  )}
                </div>

                <input type="submit" value="Submit" />
              </form>

              <p className="my-4">
                Go back to <Link to="/login">Login!</Link>
              </p>

              <FormMessageBox>
                {status === REQUESTING && <CircularProgress />}

                {status === SUCCESS && (
                  <Alert severity="success">
                    {`Please check your email '${response.email}' for verification!`}
                  </Alert>
                )}

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
        </div>
      </Banner>
    </>
  );
};

export default ForgotPassword;
