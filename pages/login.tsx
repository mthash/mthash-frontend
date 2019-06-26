import * as React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import LoginForm from "~/components/Auth/LoginForm";

const COMPANY_NAME = "mthash";
const SLOGAN = "Token Distributed Hash Power";
const PROMO = "Hash the peaks and beyond";

const Login: React.FC = (): JSX.Element => {
  return (
    <WrapperGrid container spacing={0} alignItems="stretch">
      <FormGridCell item xs={5}>
        <CompanyName>
          <img src="static/logo.png" />
          <div>{COMPANY_NAME}</div>
        </CompanyName>
        <FormWrapper>
          <LoginForm />
        </FormWrapper>
      </FormGridCell>
      <PromoGridCell item xs={7}>
        <div>
          <Slogan>{SLOGAN}</Slogan>
          <div>{PROMO}</div>
        </div>
      </PromoGridCell>
    </WrapperGrid>
  );
};

export default Login;

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
`;
