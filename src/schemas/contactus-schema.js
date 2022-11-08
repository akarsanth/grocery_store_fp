import * as Yup from "yup";

export const initialState = {
  name: "",
  contact: "",
  email: "",
  subject: "",
  message: "",
};
export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required Field")
    .max(50, "Must be less than 50 characters"),
  contact: Yup.string()
    .required("Contact is a required field")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  email: Yup.string()
    .required("Email is a required Field")
    .email("Invalid email address")
    .max(255, "Must be less than 255 characters"),
  subject: Yup.string()
    .required("Subject is a required Field")
    .max(50, "Must be less than 50 characters"),

  message: Yup.string().required("Message is a required field"),
  // .min(20, "Must be at least 20 characters"),
});
