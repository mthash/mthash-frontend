import * as React from "react";
import styled from "styled-components";

import MiningDynamic from "~/components/mining/common/MiningDynamic";
import MiningValueUnit from "~/components/mining/common/MiningValueUnit";
import AppContext from "~/containers/AppContext";
import Currency from "~/models/types/Currency";

interface Props {
  value: string | number;
  unit: string;
  currency?: Currency;
}

const ArcadeMiningValue: React.FC<Props> = ({
  value,
  unit,
  currency
}): JSX.Element => {
  return (
    <div>
      <ValueUnitWrapper>
        <MiningValueUnit value={value} unit={unit} />
      </ValueUnitWrapper>
    </div>
  );
};

export default ArcadeMiningValue;

const ValueUnitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
