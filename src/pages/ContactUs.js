import React, { useEffect } from "react";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Banner from "../components/layout/Banner";
import BreadCrumb from "../components/BreadCrumb";
import { initialState, validationSchema } from "../schemas/contactus-schema";
import useHttp from "../hooks/useHttp";
import { REQUESTING, SUCCESS, ERROR } from "../hooks/useHttp/actionTypes";
import { BASE_URL } from "../constants";

const { REACT_APP_WAREHOUSE_ID, REACT_APP_API_KEY } = process.env;

// Main Component
const ContactUs = () => {
  const {
    state: { status, response },
    makeRequest,
  } = useHttp();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,

    onSubmit: async (values, actions) => {
      const config = {
        url: `${BASE_URL}/api/v4/contact-us`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Warehouse-Id": REACT_APP_WAREHOUSE_ID,
          "Api-Key": REACT_APP_API_KEY,
        },
        body: values,
      };

      makeRequest(config);
    },
  });

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
  } = formik;

  useEffect(() => {
    if (status === SUCCESS) {
      resetForm();
    }
  }, [status, resetForm]);
  return (
    <>
      <BreadCrumb page="Mail Us" />

      <Banner>
        <div className="mail">
          <h3>Mail Us</h3>

          <div className="agileinfo_mail_grids">
            <div className="col-md-4 agileinfo_mail_grid_left">
              <ul>
                <li>
                  <i className="fa fa-home" aria-hidden="true"></i>
                </li>
                <li>
                  address<span>868 1st Avenue NYC.</span>
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </li>
                <li>
                  email
                  <span>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </li>
                <li>
                  call to us<span>(+123) 233 2362 826</span>
                </li>
              </ul>
            </div>

            <div className="col-md-8 agileinfo_mail_grid_right">
              <form onSubmit={handleSubmit}>
                <div className="col-md-6 wthree_contact_left_grid">
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Name*"
                    />

                    {touched.name && errors.name && (
                      <p className="error-text">{errors.name}</p>
                    )}
                  </div>

                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Email*"
                    />

                    {touched.email && errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-6 wthree_contact_left_grid">
                  <div className="input-group">
                    <input
                      type="text"
                      name="contact"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contact}
                      placeholder="Contact Number*"
                    />

                    {touched.contact && errors.contact && (
                      <p className="error-text">{errors.contact}</p>
                    )}
                  </div>

                  <div className="input-group">
                    <input
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                      placeholder="Subject*"
                    />

                    {touched.subject && errors.subject && (
                      <p className="error-text">{errors.subject}</p>
                    )}
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="input-group">
                  <textarea
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder="Message..."
                  >
                    Message...
                  </textarea>

                  {touched.message && errors.message && (
                    <p className="error-text pl-3">{errors.message}</p>
                  )}
                </div>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  {status === REQUESTING && <CircularProgress />}

                  {status === SUCCESS && (
                    <Alert severity="success">{response.success.message}</Alert>
                  )}

                  {status === ERROR && (
                    <>
                      {response.map((error) => (
                        <Alert key={error.title} severity="error">
                          {error.message}
                        </Alert>
                      ))}
                    </>
                  )}
                </Box>

                <input type="submit" value="Submit" />
                <input type="reset" value="Clear" onClick={resetForm} />
              </form>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </Banner>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d96748.15352429623!2d-74.25419879353115!3d40.731667701988506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshopping+mall+in+New+York%2C+NY%2C+United+States!5e0!3m2!1sen!2sin!4v1467205237951"
          style={{ border: "0" }}
          title="map"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
