import { createMuiTheme } from "@material-ui/core";

const muiTheme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    hightlight: {
      dark: "#181D30",
      blue: "#14BAE3"
    },
    background: {
      paper: "#131828",
      default: "#101425",
      control: "#373e65",
      darkBlue: "#14182c",
      divider: "#1B223C",
      button: "#342a59"
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
    success: {
      light: "#add8ce",
      main: "#50E3C2",
      dark: "#2f947d",
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
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 1024,
      md: 1280,
      lg: 1400,
      xl: 1700
    }
  },
  rounding: {
    md: 5,
    lg: 8
  },
  typography: {
    fontFamily: `Montserrat, -apple-system,system-ui, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue,Arial,sans-serif`
  },
  layouts: {
    dashboard: {
      headerHeight: 75,
      contentMaxWidth: 1560,
      sidebar: {
        minWidth: 90
      }
    }
  }
});

export default muiTheme;
