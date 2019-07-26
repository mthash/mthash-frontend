import * as React from "react";
import styled from "styled-components";

import Currency from "~/models/Currency";
import CurrencyIcon from "~/components/common/CurrencyIcon";

const CurrencyItem: React.FC<Currency> = ({ name, symbol }): JSX.Element => {
  return (
    <Wrapper>
      <CurrencyIcon currency={symbol} /> {name} ({symbol})
    </Wrapper>
  );
};

export default CurrencyItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
`;
