import * as React from "react";
import { default as MuiLink } from "@material-ui/core/Link";
import styled from "styled-components";

import ROUTES from "~/constants/routes";

const RedirectButtons: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <MuiLink href={ROUTES.auth.signup}>Don't have an account?</MuiLink>
      <MuiLink href={ROUTES.demo}>Try without registration</MuiLink>
    </Wrapper>
  );
};

export default RedirectButtons;

const Wrapper = styled.div`
  display: flex;
  line-height: 2;
  flex-direction: column;
`;
