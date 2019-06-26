import * as React from "react";
import styled from "styled-components";

import GlobalStyle from "~/theme/GlobalStyle";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

const Layout: React.SFC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
