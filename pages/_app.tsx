import * as React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import { AppLayout } from "~/components/layouts";
import { AppStylesProvider } from "~/components/providers";
import getEnv from "~/utils/getEnviroment";
import PageContext from "~/models/common/PageContext";

export interface Props {
  children?: React.ReactNode;
  Component: React.Component;
}

export interface State {}

export default class MtHashApp extends App<Props, State> {
  static async getInitialProps({ Component, router, ctx }): any {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.env = getEnv;

    return { pageProps };
  }

  pageContext: PageContext;

  constructor(props: Props, ctx: any) {
    super(props, ctx);

    // TODO: Probably it should be reimplemented
    if (process.browser) {
      window.env = props.pageProps.env;
    }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>MtHash</title>
        </Head>
        <AppStylesProvider>
          <AppLayout>
            <Component />
          </AppLayout>
        </AppStylesProvider>
      </Container>
    );
  }
}
