import * as React from "react";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import { APP_SECTION_IDS } from "~/constants/appSections";
import Header from "~/components/layouts/common/Header";
import UnderDevelopment from "~/components/common/UnderDevelopment";

interface Props {
  children: React.ReactNode;
  namespace?: string;
  isDemo?: boolean;
}

const ExchangeLayout: React.FC<Props> = ({
  children,
  namespace,
  isDemo = false
}): JSX.Element => {
  return (
    <Wrapper>
      <CssBaseline />
      <UnderDevelopment namespace={namespace} />
      <Header
        activatedSection={APP_SECTION_IDS.exchange}
        namespace={namespace}
        isDemo={isDemo}
      />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default ExchangeLayout;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.main`
  margin: auto;
  margin-top: ${p => p.theme.layouts.dashboard.headerHeight}px;
  max-width: ${p => p.theme.layouts.dashboard.contentMaxWidth}px;
  padding: 20px;
`;
