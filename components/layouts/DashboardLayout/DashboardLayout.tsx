import * as React from "react";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import Sidebar from "./Sidebar";
import Header from "~/components/layouts/common/Header";

import { APP_SECTION_IDS } from "~/constants/appSections";
import UnderDevelopment from "~/components/common/UnderDevelopment";

interface Props {
  children: React.ReactNode;
  namespace?: string;
  isDemo?: boolean;
}

const DashboardLayout: React.FC<Props> = ({
  children,
  namespace,
  isDemo = false
}): JSX.Element => {
  return (
    <Wrapper>
      <UnderDevelopment namespace={namespace} />
      <CssBaseline />
      <Header
        activatedSection={APP_SECTION_IDS.dashboard}
        namespace={namespace}
        isDemo={isDemo}
      />
      <Sidebar />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default DashboardLayout;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.main`
  margin: auto;
  margin-top: ${p => p.theme.layouts.dashboard.headerHeight}px;
  max-width: ${p => p.theme.layouts.dashboard.contentMaxWidth}px;
  padding: 20px;
`;
