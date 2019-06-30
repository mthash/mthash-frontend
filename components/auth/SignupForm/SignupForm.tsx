import * as React from "react";
import styled from "styled-components";
import axios from "axios";
import { withFormik, InjectedFormikProps } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import { isEmpty } from "ramda";

import { TextField } from "~/components/common/TextField";

import RedirectButtons from "./RedirectButtons";

const CAPTION = "SIGN UP";
const SUBMIT_TEXT = "Sign up";

interface Props {
  children?: React.ReactNode;
}

interface FormValues {
  login: string;
  password: string;
  passwordConfirmation: string;
}

interface FormProps {
  handleSubmit: () => void;
  values: FormValues;
}

const RegistrationForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = (props): JSX.Element => (
  <WrapperForm onSubmit={props.handleSubmit}>
    <h1>{CAPTION}</h1>
    <TextField
      id="login"
      label="login"
      margin="normal"
      variant="filled"
      type="text"
      onChange={props.handleChange}
      value={props.values.login}
      fullWidth
    />
    <TextField
      id="password"
      label="password"
      margin="normal"
      variant="filled"
      inputProps={{ type: "password" }}
      fullWidth
      value={props.values.password}
      onChange={props.handleChange}
    />
    <TextField
      id="passwordConfirmation"
      label="passwordConfirmation"
      margin="normal"
      variant="filled"
      inputProps={{ type: "password" }}
      fullWidth
      value={props.values.passwordConfirmation}
      onChange={props.handleChange}
    />
    {props.touched.login && props.errors.login && (
      <div>{props.errors.login}</div>
    )}
    <SubmitButton
      type="submit"
      size="large"
      variant="contained"
      color="primary"
      disabled={!props.touched || !isEmpty(props.errors)}
    >
      {SUBMIT_TEXT}
    </SubmitButton>
    <RedirectButtons />
  </WrapperForm>
);

export default withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({
    login: "",
    password: "",
    passwordConfirmation: ""
  }),
  validationSchema: Yup.object().shape({
    login: Yup.string().required("Please input login name"),
    password: Yup.string().required("Please input password")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const handleSubmit = async (values: FormValues): void => {
      const res = await axios.post(`${window.env.API}/user`, values);

      setSubmitting(false);
    };
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
