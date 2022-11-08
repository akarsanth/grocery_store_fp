import React, { useEffect } from "react";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import Banner from "../components/layout/Banner";
import BreadCrumb from "../components/BreadCrumb";

import { initialState, validationSchema } from "../schemas/register-schema";
import useHttp from "../hooks/useHttp";
import { BASE_URL } from "../constants";
import { REQUESTING, SUCCESS, ERROR } from "../hooks/useHttp/actionTypes";
import FormMessageBox from "../components/FormMessageBox";

const { REACT_APP_API_KEY } = process.env;

// Main Component
const Register = () => {
  const {
    state: { status, response },
    makeRequest,
  } = useHttp();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const { firstName, lastName, contactNumber, email, password } = values;

      const bodyData = {
        first_name: firstName,
        last_name: lastName,
        mobile_number: contactNumber,
        email,
        password,
      };

      const config = {
        url: `${BASE_URL}/api/v4/auth/signup`,
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
      <BreadCrumb page="Sign Up" />
      <Banner>
        <div className="w3_login">
          <h3>Sign Up</h3>
          <div className="module form-module">
            <div className="form">
              <h2>Create an account</h2>
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

                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <p className="error-text">{errors.email}</p>
                  )}
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />

                  {touched.password && errors.password && (
                    <p className="error-text">{errors.password}</p>
                  )}
                </div>

                <input type="submit" value="Register" />
              </form>

              <p className="mt-4">
                Already have an account? <Link to="/login">Login!</Link>
              </p>

              <FormMessageBox>
                {status === REQUESTING && <CircularProgress />}

                {status === SUCCESS && (
                  <Alert severity="success">
                    {`Account registered successfully!`}
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

      <div className="newsletter-top-serv-btm">
        <div className="container">
          <div className="col-md-4 wthree_news_top_serv_btm_grid">
            <div className="wthree_news_top_serv_btm_grid_icon">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <h3>Nam libero tempore</h3>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et.
            </p>
          </div>
          <div className="col-md-4 wthree_news_top_serv_btm_grid">
            <div className="wthree_news_top_serv_btm_grid_icon">
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <h3>officiis debitis aut rerum</h3>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et.
            </p>
          </div>
          <div className="col-md-4 wthree_news_top_serv_btm_grid">
            <div className="wthree_news_top_serv_btm_grid_icon">
              <i className="fa fa-truck" aria-hidden="true"></i>
            </div>
            <h3>eveniet ut et voluptates</h3>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et.
            </p>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default Register;
