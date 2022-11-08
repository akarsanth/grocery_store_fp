import * as Yup from "yup";

// REGISTER FORM INITIAL STATE AND VALIDATION
export const initialState = {
  title: "",
  latitude: "",
  longitude: "",
  customer: "",
  contactNumber: "",
};
export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Address title is a required Field"),
  customer: Yup.string().required("Customer is a required Field"),
  latitude: Yup.number()
    .required("Latitude is a required Field")
    .typeError("Invalid entry")
    .positive(),
  longitude: Yup.number()
    .required("Longitude is a required Field")
    .typeError("Invalid entry")
    .positive(),
  contactNumber: Yup.string()
    .required("Contact Number is a required field")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
});
