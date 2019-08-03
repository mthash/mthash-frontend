import * as React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import { AppLayout } from "~/components/layouts";
import { AppStylesProvider } from "~/components/providers";
import Notifications from "~/components/common/Notifications";

import AppContainer from "~/containers/AppContainer";
import AppContext from "~/containers/AppContext";

import { AsyncService } from "~/services";
import ENDPOINTS from "~/constants/endpoints";
import { NoSsr } from "@material-ui/core";

export interface Props {
  children?: React.ReactNode;
  Component: React.Component;
  currencies: any;
}

export interface State {}

const fetchCurrencies = async () => {
  const result = await AsyncService.get(ENDPOINTS.asset.mineable);
  return result.data.body;
};

export default class MtHashApp extends App<Props, State> {
  static async getInitialProps({ Component, router, ctx }): Promise<any> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const currencies = await fetchCurrencies();

    return { pageProps, currencies };
  }

  render(): JSX.Element {
    const { Component, pageProps, currencies } = this.props;

    return (
      <Container>
        <Head>
          <title>MtHash</title>
        </Head>
        <AppStylesProvider>
          <AppContainer.Provider>
            <AppContext.Provider value={{ currencies }}>
              <AppLayout>
                <Component />
              </AppLayout>
              <NoSsr>
                <Notifications />
              </NoSsr>
            </AppContext.Provider>
          </AppContainer.Provider>
        </AppStylesProvider>
      </Container>
    );
  }
}
