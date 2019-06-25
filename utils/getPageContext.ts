import { create, SheetsRegistry } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/styles";

import theme from "~/theme/theme";
import muiTheme from "~/theme/muiTheme";

function createPageContext() {
  const jss = create(jssPreset());

  jss.setup({
    insertionPoint:
      process.browser && document.getElementById("jss-server-side")
  });

  return {
    muiTheme,
    theme,
    // This is needed in order to inject the critical CSS
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator
    generageClassName: createGenerateClassName(),
    // For priority styled-components css
    jss
  };
}

export default function getPageContext() {
  if (!process.browser) {
    return createPageContext();
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
