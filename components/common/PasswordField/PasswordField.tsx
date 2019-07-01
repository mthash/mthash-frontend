import * as React from "react";
import { FilledTextFieldProps } from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { TextField } from "~/components/common/TextField";

const PasswordField: React.FC<FilledTextFieldProps> = (props): JSX.Element => {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const inputProps = {
    ...props.inputProps,
    type: passwordShown ? "text" : "password"
  };

  const handleClickShowPassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <TextField
      {...props}
      inputProps={inputProps}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {passwordShown ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

export default PasswordField;
