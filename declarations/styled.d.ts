// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
    palette: {
      common: {
        black: string;
        white: string;
      };
      hightlight: {
        dark: string;
        blue: string;
      };
      background: {
        paper: string;
        paper2: string;
        paperDarkest: string;
        default: string;
        control: string;
        control2: string;
        darkBlue: string;
        divider: string;
        button: string;
      };
      primary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      error: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      success: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      text: {
        primary: string;
        secondary: string;
        third: string;
        disabled: string;
        hint: string;
      };
    };
    typography: {
      fontFamily: string;
    };
    breakpoints: {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
    rounding: {
      md: number;
      lg: number;
    };
    layouts: {
      dashboard: {
        headerHeight: number;
        contentMaxWidth: number;
        sidebar: {
          minWidth: number;
        };
      };
    };
    zIndex: {
      drawer: number;
    };
  }
}
