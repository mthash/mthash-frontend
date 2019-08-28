import * as React from "react";
import styled, { css } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Logo from "../../../static/Logo.svg";

import User from "./User";
import SectionTabs from "./SectionTabs";

import AppContainer from "~/containers/AppContainer";
import { boolean } from "yup";

interface Props {
  activatedSection: number;
  namespace?: string;
  centered?: boolean;
}

const Header: React.FC<Props> = ({
  activatedSection,
  namespace,
  centered = false
}): JSX.Element => {
  const { user } = AppContainer.useContainer();

  React.useEffect(() => {
    user.refresh();
  }, []);

  return (
    <StyledAppBar position="fixed" centered={centered}>
      <StyledToolbar centered={centered}>
        <StyledLogo />
        <SectionTabs
          activatedSection={activatedSection}
          namespace={namespace}
        />
        <User user={user.data} />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;

interface AppBarProps {
  theme: any;
  centered: boolean;
}

const StyledAppBar = styled(AppBar)<AppBarProps>`
  z-index: 1201;
  background-color: ${p => p.theme.palette.background.paper};
  box-shadow: none;
  color: ${p => p.theme.palette.text.secondary};
  height: ${p => p.theme.layouts.dashboard.headerHeight}px;

  ${p =>
    p.centered &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: center;
    `}
`;

interface ToolbarProps {
  theme: any;
  centered: boolean;
}

const StyledToolbar = styled(Toolbar)<ToolbarProps>`
  ${p =>
    p.centered &&
    css`
      max-width: ${p => p.theme.layouts.dashboard.contentMaxWidth}px;
      width: 100%;
      padding: 0 40px;
    `}
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  color: ${p => p.theme.palette.text.primary};
  display: block;
  height: 47px;
  width: 48px;
  margin: 15px 0;

  @media screen and (max-width: ${p => p.theme.breakpoints.values.sm}px) {
    width: 30px;
  }
`;
