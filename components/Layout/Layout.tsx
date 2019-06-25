import * as React from "react";
import styled from "styled-components";

import GlobalStyle from "~/theme/GlobalStyle";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

const Layout: React.SFC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  background-color: yellow;
`;

const Content = styled.main`
  background-color: green;
`;
