import * as React from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps
} from "formik";
import Button from "@material-ui/core/Button";

import { TextField } from "~/components/Common/TextField";

export interface Props {
  children?: React.ReactNode;
}

interface LoginFormValues {
  login: string;
  password: string;
}

const CAPTION = "LOG IN";

const LoginForm: React.FC<Props> = (): JSX.Element => {
  const handleSubmit = async (
    values: LoginFormValues,
    actions: FormikActions<LoginFormValues>
  ): void => {
    const res = await axios.post(`${window.env.API}/login`, values);
  };

  return (
    <Wrapper>
      <h1>{CAPTION}</h1>
      <Formik
        initialValues={{ login: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {(formikBag: FormikProps<LoginFormValues>): JSX.Element => {
          return (
            <Form>
              <Field name="login">
                {({
                  field,
                  form
                }: FieldProps<LoginFormValues>): JSX.Element => (
                  <TextField
                    label="login"
                    margin="normal"
                    variant="filled"
                    fullWidth
                    {...field}
                  />
                )}
              </Field>

              <Field name="password">
                {({
                  field,
                  form
                }: FieldProps<LoginFormValues>): JSX.Element => (
                  <TextField
                    label="password"
                    margin="normal"
                    variant="filled"
                    inputProps={{ type: "password" }}
                    fullWidth
                    password
                    {...field}
                  />
                )}
              </Field>

              <SubmitButton
                type="submit"
                size="large"
                variant="contained"
                color="primary"
              >
                Log in
              </SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default LoginForm;

const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
`;

const SubmitButton = styled(Button)`
  margin: 20px 0;
`;
