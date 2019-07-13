import * as React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Head from "next/head";

import Logo from "../../../static/Logo.svg";

const COMPANY_NAME = "mthash";
const SLOGAN = "Token Distributed Hash Power";
const PROMO = "Hash the peaks and beyond";

interface Props {
  children: React.ReactNode;
  title: string;
}

const AuthLayout: React.FC<Props> = ({ children, title }): JSX.Element => (
  <WrapperGrid container spacing={0} alignItems="stretch">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <FormGridCell item sm={12} md={6} lg={5}>
      <CompanyName>
        <StyledLogo />
        <div>{COMPANY_NAME}</div>
      </CompanyName>
      <FormWrapper>{children}</FormWrapper>
    </FormGridCell>
    <PromoGridCell item md={6} lg={7} zeroMinWidth>
      <div>
        <Slogan>{SLOGAN}</Slogan>
        <div>{PROMO}</div>
      </div>
    </PromoGridCell>
  </WrapperGrid>
);

export default AuthLayout;

const WrapperGrid = styled(Grid)`
  position: absolute;
  height: 100%;
`;

const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding-bottom: 200px;
`;

const StyledLogo = styled(Logo)`
  height: 47px;
  width: 48px;
`;

const FormGridCell = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

const PromoGridCell = styled(Grid)`
  background-color: ${p => p.theme.palette.background.paper};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${p => p.theme.breakpoints.values.sm}px) {
    display: none;
  }
`;

const CompanyName = styled.div`
  font-size: 30px;
  display: flex;
  margin: 25px;
  align-items: center;
  color: ${p => p.theme.palette.text.main};

  > img {
    margin: 10px;
  }
`;

const Slogan = styled.div`
  font-size: 40px;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    font-size: 30px;
  }
`;
