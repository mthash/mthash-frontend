import * as React from "react";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import Sidebar from "./Sidebar";
import Header from "~/components/layouts/common/Header";

import { APP_SECTION_IDS } from "~/constants/appSections";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <Wrapper>
      <CssBaseline />
      <Header activatedSection={APP_SECTION_IDS.dashboard} />
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
