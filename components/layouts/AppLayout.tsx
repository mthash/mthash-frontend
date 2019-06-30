import * as React from "react";
import styled from "styled-components";

import GlobalStyle from "~/theme/GlobalStyle";

export interface Props {
  children?: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default AppLayout;
