import * as React from "react";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import JssProvider from "react-jss/lib/JssProvider";

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
  pageContext: PageContext;

  constructor(props: Props, context: PageContext) {
    super(props, context);

    this.pageContext = this.props.pageContext || getPageContext();
  }

  render() {
    return (
      <JssProvider
        jss={this.pageContext.jss}
        registry={this.pageContext.sheetsRegistry}
        generateClassName={this.pageContext.generateClassName}
      >
        <MuiThemeProvider
          theme={this.pageContext.muiTheme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <CssBaseline />
          <ThemeProvider theme={this.pageContext.theme}>
            {this.props.children}
          </ThemeProvider>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}
