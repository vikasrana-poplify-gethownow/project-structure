import {
  CONSTANTS,
  Yup,
  CommonFormikFormAction,
  SignupService,
} from "./imports";

export class SignupAction extends CommonFormikFormAction {
  constructor(router, formRef, setLoading) {
    super(CONSTANTS);
    this.signupService = new SignupService();
    this.router = router;
    this.formRef = formRef;
    this.setLoading = setLoading;
  }

  async submitSignupForm(params) {
    this.formRef.current.setSubmitting(true);
    this.setLoading(true);
    let result = await this.signupService.signup(params);
    if (result.status == 201) {
      this.router
        .push({
          pathname: "/verify-email",
          query: { email: params.email },
        })
        .then(() => {
          this.setLoading(false);
        });
    } else {
      this.formRef.current.setErrors(result.response.data.data.errors);
      this.formRef.current.setSubmitting(false);
      this.setLoading(false);
    }
  }
}
