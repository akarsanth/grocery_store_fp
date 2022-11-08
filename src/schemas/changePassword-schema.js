import * as Yup from "yup";

// REGISTER FORM INITIAL STATE AND VALIDATION
export const initialState = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};
export const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password is a required field"),
  newPassword: Yup.string()
    .required("New Password is a required field")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .notOneOf(
      [Yup.ref("oldPassword"), null],
      "Current and New password are same"
    ),
  confirmNewPassword: Yup.string()
    .required("Confirm password is a required field")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});
