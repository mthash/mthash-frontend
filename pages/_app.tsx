import * as React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import { AppLayout } from "~/components/layouts";
import { StyledMaterialProvider } from "~/components/providers";
import getPageContext from "~/utils/getPageContext";
import getEnv from "~/utils/getEnviroment";
import PageContext from "~/models/common/PageContext";

export interface Props {
  children?: React.ReactNode;
  Component: React.Component;
}

export interface State {}

export default class MtHashApp extends App<Props, State> {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.env = getEnv;

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  pageContext: PageContext;

  constructor(props: Props, ctx: any) {
    super(props, ctx);

    // TODO: Probably it should be reimplemented
    if (process.browser) {
      window.env = props.pageProps.env;
    }

    this.pageContext = getPageContext();
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <StyledMaterialProvider pageContext={this.pageContext}>
          <AppLayout>
            <Component {...pageProps} pageContext={this.pageContext} />
          </AppLayout>
        </StyledMaterialProvider>
      </Container>
    );
  }
}
