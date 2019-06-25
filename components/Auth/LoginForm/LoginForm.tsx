import * as React from "react";
import styled from "styled-components";
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

const CAPTION = "LOG IN";

const LoginForm: React.FC<Props> = (): JSX.Element => {
  return (
    <Wrapper>
      <h1>{CAPTION}</h1>
      <TextField label="login" margin="normal" variant="filled" fullWidth />
      <TextField
        label="password"
        margin="normal"
        variant="filled"
        inputProps={{ type: "password" }}
        fullWidth
        password
      />
      <SubmitButton size="large" variant="contained" color="primary">
        Log in
      </SubmitButton>
    </Wrapper>
  );
};

export default LoginForm;

const Wrapper = styled.div`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  margin: 20px 0;
`;
