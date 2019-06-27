import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/styles";

import getEnv from "~/utils/getEnviroment";

export default class MyDocument extends Document {
  static getInitialProps = async ctx => {
    const muiSheets = new ServerStyleSheets();
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => muiSheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {muiSheets.getStyleElement()}
          {sheet.getStyleElement()}
        </>
      )
    };
  };

  render() {
    // const { initStyles, muiStyles, styledComponentsStyles } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <style id="jss-server-side" />
          {/* <meta name="theme-color" content="#0074c6" /> */}
          {/* <link rel="shortcut icon" href="/static/images/favicon.ico" /> */}
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
