import * as React from "react";
import styled from "styled-components";
import numeral from "numeral";

import { REAL_CURRENCIES } from "~/constants/currencies";
import MiningDynamic from "~/components/mining/common/MiningDynamic";
import MiningValueUnit from "~/components/mining/common/MiningValueUnit";

interface Props {
  value: string | number;
  unit: string;
  usd: number;
}

const ArcadeMiningValue: React.FC<Props> = ({
  value,
  unit,
  usd
}): JSX.Element => (
  <div>
    <ValueUnitWrapper>
      <MiningValueUnit value={value} unit={unit} />
    </ValueUnitWrapper>
    <UsdValue>
      {numeral(usd).format("0,0.0")} {REAL_CURRENCIES.USD.currency}
    </UsdValue>
  </div>
);

export default ArcadeMiningValue;

const ValueUnitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const UsdValue = styled.div`
  font-size: 12px;
  text-align: right;
  color: ${p => p.theme.palette.text.secondary};
`;
