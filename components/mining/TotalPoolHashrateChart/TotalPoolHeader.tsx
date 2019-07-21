import * as React from "react";
import styled from "styled-components";

import TotalPoolHeaderFilter from "./TotalPoolHeaderFilter";

const CAPTION = "Total pool hash rate";

const TotalPoolHeader: React.FC = () => {
  return (
    <Header>
      <Caption>{CAPTION}</Caption>
      <TotalPoolHeaderFilter />
    </Header>
  );
};

export default TotalPoolHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Caption = styled.span`
  font-size: 20px;
  color: ${p => p.theme.palette.background.control};
`;
