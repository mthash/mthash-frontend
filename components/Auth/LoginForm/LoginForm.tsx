import * as React from "react";
import styled from "styled-components";
import axios from "axios";
import { withFormik, InjectedFormikProps } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import { isEmpty } from "ramda";

import { TextField } from "~/components/Common/TextField";

import RedirectButtons from "./RedirectButtons";

const CAPTION = "LOG IN";

export interface Props {
  children?: React.ReactNode;
}

interface FormValues {
  login: string;
  password: string;
}

interface FormProps {
  handleSubmit: () => void;
  values: FormValues;
}

const LoginForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = (
  props
): JSX.Element => (
  <WrapperForm onSubmit={props.handleSubmit}>
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
      Log in
    </SubmitButton>
    <RedirectButtons />
  </WrapperForm>
);

export default withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ login: "", password: "" }),
  validationSchema: Yup.object().shape({
    login: Yup.string().required("Please input login name"),
    password: Yup.string().required("Please input password")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const handleSubmit = async (values: FormValues): void => {
      const res = await axios.post(`${window.env.API}/login`, values);

      setSubmitting(false);
    };
  }
})(LoginForm);

const WrapperForm = styled.form`
  max-width: 500px;
  padding: 0 30px;
  margin: auto;
`;

const SubmitButton = styled(Button)`
  margin: 20px 0;
`;
