import * as React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Head from "next/head";

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
        <img src="static/logo.png" />
        <div>{COMPANY_NAME}</div>
      </CompanyName>
      <FormWrapper>{children}</FormWrapper>
    </FormGridCell>
    <Hidden smDown>
      <PromoGridCell item md={6} lg={7} zeroMinWidth>
        <div>
          <Slogan>{SLOGAN}</Slogan>
          <div>{PROMO}</div>
        </div>
      </PromoGridCell>
    </Hidden>
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

const FormGridCell = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

const PromoGridCell = styled(Grid)`
  background-color: ${p => p.theme.background.paper};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CompanyName = styled.div`
  font-size: 30px;
  display: flex;
  margin: 25px;
  align-items: center;
  color: ${p => p.theme.text.main};

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
