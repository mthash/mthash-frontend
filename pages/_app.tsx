import * as React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import { AppLayout } from "~/components/layouts";
import { AppStylesProvider } from "~/components/providers";
import AppContainer from "~/containers/AppContainer";

export interface Props {
  children?: React.ReactNode;
  Component: React.Component;
}

export interface State {}

export default class MtHashApp extends App<Props, State> {
  static async getInitialProps({ Component, router, ctx }): Promise<any> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>MtHash</title>
        </Head>
        <AppStylesProvider>
          <AppContainer.Provider>
            <AppLayout>
              <Component />
            </AppLayout>
          </AppContainer.Provider>
        </AppStylesProvider>
      </Container>
    );
  }
}
