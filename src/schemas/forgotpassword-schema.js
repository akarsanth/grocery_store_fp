import * as Yup from "yup";

// LOGIN FORM INITIAL STATE AND VALIDATION
export const initialState = {
  email: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email address"),
});
