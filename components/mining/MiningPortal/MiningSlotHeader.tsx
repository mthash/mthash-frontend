import * as React from "react";
import styled from "styled-components";
import Currency from "~/models/types/Currency";

import ExchangeArrows from "../../../static/ExchangeArrows.svg";

interface Props {
  currency: Currency;
  algorithm: string;
}

const MiningSlotHeader: React.FC<Props> = ({
  currency,
  algorithm
}): JSX.Element => {
  return (
    <Header>
      <Item>{currency}</Item>
      <ExchangeIcon />
      <Item>{algorithm}</Item>
    </Header>
  );
};

export default MiningSlotHeader;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Item = styled.span`
  display: inline-block;
  color: ${p => p.theme.palette.text.secondary};
  font-weight: bold;
`;

const ExchangeIcon = styled(ExchangeArrows)`
  width: 10px;
  margin: 10px;
  color: ${p => p.theme.palette.background.button};
`;
