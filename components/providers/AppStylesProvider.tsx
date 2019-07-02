import * as React from "react";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";

import theme from "~/theme/theme";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class AppStylesProvider extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    );
  }
}
