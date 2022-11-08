import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";

import Banner from "../components/layout/Banner";
import BreadCrumb from "../components/BreadCrumb";

import { authUser } from "../app/features/auth/auth-actions";

// Yup
import { initialState, validationSchema } from "../schemas/login-schema";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  // After successful authentication and fetching of user info
  useEffect(() => {
    if (isAuthenticated) {
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, navigate, location.state?.from]);

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(authUser({ ...values, grantType: "password" }));
    },
  });

  let { handleBlur, handleSubmit, handleChange, values, touched, errors } =
    formik;

  return (
    <>
      <BreadCrumb page="Sign In" />
      <Banner>
        <div className="w3_login">
          <h3>Sign In</h3>
          <div className="module form-module">
            <div className="form">
              <h2>Login to your account</h2>
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
                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />

                  {touched.password && errors.password && (
                    <p className="error-text">{errors.password}</p>
                  )}
                </div>

                <input type="submit" value="Login" />
              </form>

              <p className="my-4">
                Create new account <Link to="/register">Sign Up!</Link>
              </p>

              <div className="cta">
                <Link to="/forgot">Forgot your password?</Link>
              </div>
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

export default Login;
