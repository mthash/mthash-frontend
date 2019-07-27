import * as React from "react";
import styled from "styled-components";

import Currency from "~/models/Currency";
import CurrencyIcon from "~/components/common/CurrencyIcon";

interface Props extends Currency {
  className?: string;
}

const CurrencyItem: React.FC<Props> = ({
  name,
  symbol,
  className
}): JSX.Element => {
  return (
    <Wrapper className={className}>
      <CurrencyIcon currency={symbol} />
      <Name>
        {name} ({symbol})
      </Name>
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

const Name = styled.span`
  padding: 0 10px;
`;
