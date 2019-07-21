import * as React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Logo from "../../../static/Logo.svg";

import User from "./User";
import SectionTabs from "./SectionTabs";

import AppContainer from "~/containers/AppContainer";

import { APP_SECTION_IDS } from "~/constants/appSections";

interface Props {
  activatedSection: number;
}

const Header: React.FC<Props> = ({ activatedSection }): JSX.Element => {
  const { user } = AppContainer.useContainer();

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <StyledLogo />
        <SectionTabs activatedSection={activatedSection} />
        <User user={user} />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;

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
