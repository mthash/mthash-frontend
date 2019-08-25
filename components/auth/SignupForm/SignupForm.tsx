import * as React from "react";
import styled from "styled-components";
import Router from "next/router";
import { withFormik, InjectedFormikProps } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { isEmpty } from "ramda";

import { RESPONSE_ERROR_NAME } from "~/constants/request";
import ENDPOINTS from "~/constants/endpoints";
import ROUTES from "~/constants/routes";
import TextField from "~/components/common/TextField";
import PasswordField from "~/components/common/PasswordField";
import { AsyncService } from "~/services";
import { login } from "~/utils/auth";

import FormErrors from "../FormErrors";
import RedirectButtons from "../common/RedirectButtons";

const CAPTION = "SIGN UP";
const SUBMIT_TEXT = "Sign up";
const DONE_STATUS = "done";
const REGISTRATION_SUCCESSFUL = "Registration successful";
const SNACKBAR_AUTOCLOSE_DURATION = 2000;
const REDIRECT_LINKS = [
  {
    link: ROUTES.auth.login,
    caption: "Already has an account?"
  }
];

interface FormValues {
  login: string;
  password: string;
  name: string;
}

interface FormProps {
  handleSubmit: () => void;
  values: FormValues;
}

const RegistrationForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  status
}): JSX.Element => {
  const handleSnackbarClose = () => {
    Router.push("/login");
  };

  return (
    <WrapperForm onSubmit={handleSubmit}>
      <h1>{CAPTION}</h1>
      <TextField
        id="login"
        label="login"
        margin="normal"
        variant="filled"
        type="text"
        onChange={handleChange}
        value={values.login}
        fullWidth
      />
      <TextField
        id="name"
        label="name"
        margin="normal"
        variant="filled"
        type="text"
        onChange={handleChange}
        value={values.name}
        fullWidth
      />
      <PasswordField
        id="password"
        label="password"
        margin="normal"
        variant="filled"
        inputProps={{ type: "password" }}
        fullWidth
        value={values.password}
        onChange={handleChange}
      />
      <FormErrors errors={errors} touched={touched} />
      <SubmitButton
        type="submit"
        size="large"
        variant="contained"
        color="primary"
        // disabled={!touched || !isEmpty(errors)}
      >
        {SUBMIT_TEXT}
      </SubmitButton>
      <Snackbar
        open={status === DONE_STATUS}
        message={REGISTRATION_SUCCESSFUL}
        autoHideDuration={SNACKBAR_AUTOCLOSE_DURATION}
        onClose={handleSnackbarClose}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
      <RedirectButtons customLinks={REDIRECT_LINKS} />
    </WrapperForm>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    login: "",
    name: "",
    password: ""
  }),
  validationSchema: Yup.object().shape({
    login: Yup.string().required("Please input login"),
    name: Yup.string().required("Please input name"),
    password: Yup.string()
      .min(8)
      .required("Please input password")
  }),
  handleSubmit: async (values, { setSubmitting, setErrors, setStatus }) => {
    try {
      const result = await AsyncService.post(ENDPOINTS.auth.signup, values);
      const token = result.data.body;
      setStatus("done");
    } catch (error) {
      setErrors({
        [RESPONSE_ERROR_NAME]:
          error.response.data.message ||
          "Something happened during registration"
      });
    }

    setSubmitting(false);
  }
})(RegistrationForm);

const WrapperForm = styled.form`
  max-width: 500px;
  padding: 0 30px;
  margin: auto;
`;

const SubmitButton = styled(Button)`
  margin: 20px 0;
`;
