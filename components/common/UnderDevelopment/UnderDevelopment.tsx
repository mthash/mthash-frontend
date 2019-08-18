import * as React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Router from "next/router";
import Link from "@material-ui/core/Link";

import ROUTES from "~/constants/routes";

const STUB_TEXT = "The page under development";

interface Props {
  namespace: string;
}

const UnderDevelopment: React.FC<Props> = ({ namespace }): JSX.Element => {
  const handleRedirectToMining = () => {
    const miningRoute = ROUTES.mining;
    const link = namespace ? `${namespace}${miningRoute}` : miningRoute;
    Router.push(link);
  };

  return (
    <Wrapper>
      <StubText variant="h2">{STUB_TEXT}</StubText>
      <Typography variant="h6">
        You can try
        <MiningLink onClick={handleRedirectToMining}>mining page</MiningLink>
      </Typography>
    </Wrapper>
  );
};

export default UnderDevelopment;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0px;
  opacity: 0.9;
  z-index: 1250;
  top: ${p => p.theme.layouts.dashboard.headerHeight}px;
  background-color: ${p => p.theme.palette.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StubText = styled(Typography)`
  margin: 20px 0;
`;

const MiningLink = styled(Link)`
  cursor: pointer;
  margin: 0 10px;
`;
