export const CONSTANTS = {
  form_fields_hash: {
    name: { name: "name", value: "" },
    email: { name: "email", value: "" },
    password: { name: "password", value: "" },
    confirm_password: { name: "confirm_password", value: "" },
  },
  texts: {
    text_1: "name",
    text_2: "email",
    text_3: "sign up",
    text_4: "forgot password?",
    text_5: "login",
    text_6: "already have an account?",
    text_7: "password",
    text_8: "confirm password",
  },
  form_validation_hash: {
    // NOTE:- form_validation_hash_name
    name: Yup ? Yup.string().required("name cannot be left blank") : "",
    email: COMMON_FORMIK_VALIDATION.email,
    password: COMMON_FORMIK_VALIDATION.password,
    // NOTE:- form_validation_hash_confirm_password
    confirm_password: Yup
      ? Yup.string()
          .oneOf([Yup.ref("password"), null], "password do not match")
          .required("Required")
      : "",
  },
};
