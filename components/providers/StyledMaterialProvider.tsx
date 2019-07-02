import * as React from "react";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import JssProvider from "react-jss/lib/JssProvider";

import theme from "~/theme/theme";
import muiTheme from "~/theme/muiTheme";

import getPageContext from "~/utils/getPageContext";
import PageContext from "~/models/common/PageContext";

export interface Props {
  children?: React.ReactNode;
  pageContext: PageContext;
}

export interface State {}

export default class StyledMaterialProvider extends React.Component<
  Props,
  State
> {
  private pageContext: PageContext;

  // constructor(props: Props, context: PageContext) {
  //   super(props, context);

  //   this.pageContext = this.props.pageContext || getPageContext();
  // }

  render(): JSX.Element {
    // const {
    //   jss,
    //   sheetsRegistry,
    //   muiTheme,
    //   theme,
    //   generateClassName
    // } = this.pageContext;

    return (
      // <JssProvider
      //   jss={jss}
      //   registry={sheetsRegistry}
      //   generateClassName={generateClassName}
      // >
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
      // </JssProvider>
    );
  }
}
