import * as Yup from "yup";

// LOGIN FORM INITIAL STATE AND VALIDATION
export const initialState = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email address"),
  password: Yup.string().required("Password is a required field"),
});
