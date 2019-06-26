import { createMuiTheme } from "@material-ui/core";

const muiTheme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    action: {
      disabledBackground: "#676f91"
    },
    background: {
      paper: "#101425",
      default: "#131828"
    },
    primary: {
      light: "#75feb0",
      main: "#61e786",
      dark: "#44a05e",
      contrastText: "#000"
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "#fff",
      secondary: "#676f91",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
});

export default muiTheme;
