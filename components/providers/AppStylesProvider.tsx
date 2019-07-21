import * as React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import StylesProvider from "@material-ui/styles/StylesProvider";

import theme from "~/theme/theme";

export interface Props {
  children?: React.ReactElement;
}

export interface State {}

export default class AppStylesProvider extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeProvider theme={theme as any}>
            {this.props.children}
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    );
  }
}
