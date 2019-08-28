import * as React from "react";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "~/components/layouts/common/Header";

import { APP_SECTION_IDS } from "~/constants/appSections";

interface Props {
  children: React.ReactNode;
  namespace?: string;
}

const MiningLayout: React.FC<Props> = ({
  children,
  namespace
}): JSX.Element => {
  return (
    <Wrapper>
      <CssBaseline />
      <Header
        activatedSection={APP_SECTION_IDS.mining}
        namespace={namespace}
        centered
      />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default MiningLayout;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.main`
  margin: auto;
  margin-top: ${p => p.theme.layouts.dashboard.headerHeight}px;
  max-width: ${p => p.theme.layouts.dashboard.contentMaxWidth}px;
  width: 100%;
  padding: 20px;
`;
