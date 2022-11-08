import * as Yup from "yup";

// REGISTER FORM INITIAL STATE AND VALIDATION
export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  password: "",
};
export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is a required Field"),
  lastName: Yup.string().required("Last Name is a required Field"),
  contactNumber: Yup.string()
    .required("Contact Number is a required field")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  email: Yup.string()
    .required("Email is a required Field")
    .email("Invalid email address")
    .max(255, "Must be less than 255 characters"),
  password: Yup.string()
    .required("Password field is required field")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .max(255, "Must be less than 255 characters"),
});
