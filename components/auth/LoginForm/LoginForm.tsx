import * as React from "react";
import styled from "styled-components";
import { withFormik, InjectedFormikProps } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import { isEmpty } from "ramda";

import { TextField } from "~/components/common/TextField";
import { PasswordField } from "~/components/common/PasswordField"
import { RESPONSE_ERROR_NAME } from "~/constants/request";
import { login } from "~/utils/auth";
import { AsyncService } from "~/services";

import FormErrors from "../FormErrors";
import RedirectButtons from "./RedirectButtons";

const CAPTION = "LOG IN";
const SUBMIT_TEXT = "Log in";

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

const LoginForm: React.FC<InjectedFormikProps<FormProps, FormValues>> = (
  props
): JSX.Element => (
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
    <PasswordField
      id="password"
      label="password"
      margin="normal"
      variant="filled"
      fullWidth
      value={props.values.password}
      onChange={props.handleChange}
    />
    <FormErrors errors={props.errors} touched={props.touched} />
    <SubmitButton
      type="submit"
      size="large"
      variant="contained"
      color="primary"
      // disabled={!isEmpty(props.errors)}
    >
      {SUBMIT_TEXT}
    </SubmitButton>
    <RedirectButtons />
  </WrapperForm>
);

export default withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ login: "", password: "", password2: "" }),
  validationSchema: Yup.object().shape({
    login: Yup.string().required("Please input login"),
    password: Yup.string().required("Please input password")
  }),
  handleSubmit: async (values, { setSubmitting, setErrors }) => {
    try {
      const result = await AsyncService.post(`${window.env.API}/user/login`, values);
      const token = result?.data?.body;
      login({ token });
    } catch (error) {
      setErrors({ 
        [RESPONSE_ERROR_NAME]: error.response?.message || "login or password is incorrect" 
      });
    }

    setSubmitting(false);
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
