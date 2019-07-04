import * as React from "react";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

import Logo from "../../../static/Logo.svg";
import Sidebar from "./Sidebar";
import SectionTabs from "./SectionTabs";
import User from "./User";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <Wrapper>
      <CssBaseline />

      <StyledAppBar position="fixed">
        <StyledToolbar>
          <StyledLogo />
          <SectionTabs />
          <User name="Henri Miel" />
        </StyledToolbar>
      </StyledAppBar>
      <Sidebar />

      <Content>{children}</Content>
    </Wrapper>
  );
};

export default DashboardLayout;

const Wrapper = styled.div`
  display: flex;
`;

const StyledAppBar = styled(AppBar)`
  z-index: ${p => p.theme.zIndex.drawer + 1};
  background-color: ${p => p.theme.palette.background.paper};
  box-shadow: none;
  color: ${p => p.theme.palette.text.secondary};
  height: ${p => p.theme.layouts.dashboard.headerHeight}px;
`;

const StyledToolbar = styled(Toolbar)`
  display: fixed;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  color: ${p => p.theme.palette.text.primary};
  height: 47px;
  width: 48px;
  margin: 15px 0;
`;

const Content = styled.main`
  margin: auto;
  margin-top: ${p => p.theme.layouts.dashboard.headerHeight}px;
  max-width: ${p => p.theme.layouts.dashboard.contentMaxWidth}px;
  padding: 20px;
`;
