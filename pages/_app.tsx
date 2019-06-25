import * as React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import { StyledMaterialProvider, Layout } from "~/components/Layout";
import getPageContext from "~/utils/getPageContext";
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

    return { pageProps };
  }

  pageContext: PageContext;

  constructor(props: Props, ctx: any) {
    super(props, ctx);
    this.pageContext = getPageContext();
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <StyledMaterialProvider pageContext={this.pageContext}>
        <Layout>
          <Container>
            <Head>
              <title>MtHash</title>
            </Head>
          </Container>
          <Component {...pageProps} pageContext={this.pageContext} />
        </Layout>
      </StyledMaterialProvider>
    );
  }
}
