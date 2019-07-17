import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/styles";
import flush from "styled-jsx/server";

import getEnv from "~/utils/getEnviroment";

export default class MyDocument extends Document {
  static async getInitialProps(ctx): Promise<any> {
    const sheet = new ServerStyleSheet();
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => ({
            ...sheet.collectStyles(<App {...props} />),
            ...sheets.collect(<App {...props} />)
          })
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {sheets.getStyleElement()}
            {sheet.getStyleElement()}
            {flush() || null}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap"
            rel="stylesheet"
          ></link>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          {/* <meta
            name="theme-color"
            content={theme.palette.primary.main}
          /> */}
          <script
            dangerouslySetInnerHTML={{
              __html: "env = " + JSON.stringify(getEnv)
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
