import * as React from "react";
import styled from "styled-components";
import {
  default as MuiTextField,
  FilledTextFieldProps
} from "@material-ui/core/TextField";

const TextField: React.FC<FilledTextFieldProps> = (props): JSX.Element => {
  return <StyledTextField {...props} />;
};

export default TextField;

const StyledTextField = styled(MuiTextField)`
  border-radius: 5px;

  input {
    background-color: ${p => p.theme.background.control};
    border-radius: 5px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: ${p => p.theme.text.main};
    -webkit-box-shadow: 0 0 0px 1000px ${p => p.theme.background.control} inset;
  }
`;
