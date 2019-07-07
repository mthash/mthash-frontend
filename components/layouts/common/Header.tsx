import * as React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Logo from "../../../static/Logo.svg";

import User from "./User";
import SectionTabs from "./SectionTabs";

import { APP_SECTION_IDS } from "~/constants/appSections";

const sectionIds = Object.values(APP_SECTION_IDS);
type sectionID = typeof sectionIds;

interface Props {
  user: string;
  activatedSection: sectionID;
}

const Header: React.FC<Props> = ({ user, activatedSection }): JSX.Element => {
  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <StyledLogo />
        <SectionTabs activatedSection={activatedSection} />
        <User name={user} />
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
