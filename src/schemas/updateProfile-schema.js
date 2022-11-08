import * as Yup from "yup";

// REGISTER FORM INITIAL STATE AND VALIDATION
export const initialState = {
  firstName: "",
  lastName: "",
  contactNumber: "",
};
export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is a required Field"),
  lastName: Yup.string().required("Last Name is a required Field"),
  contactNumber: Yup.string()
    .required("Contact Number is a required field")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
});
