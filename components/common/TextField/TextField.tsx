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
  background-color: ${p => p.theme.palette.background.control};
  overflow: hidden;

  input {
    padding: 27px 12px 10px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: ${p => p.theme.palette.text.secondary};
    -webkit-box-shadow: inset 0 0 0px 9999px
      ${p => p.theme.palette.background.control};
  }
`;
