import * as React from "react";
import styled from "styled-components";

import TotalPoolHeaderFilter from "./TotalPoolHeaderFilter";

interface Props {
  title: string;
}

const TotalPoolHeader: React.FC<Props> = ({ title }) => {
  return (
    <Header>
      <Caption>{title}</Caption>
      <TotalPoolHeaderFilter />
    </Header>
  );
};

export default TotalPoolHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Caption = styled.span`
  font-size: 20px;
  color: ${p => p.theme.palette.background.control};

  @media screen and (max-width: ${p => p.theme.breakpoints.values.sm}px) {
    font-size: 13px;
  }
`;
