import * as React from "react";
import styled from "styled-components";

import MiningDynamic from "~/components/mining/common/MiningDynamic";
import MiningValueUnit from "~/components/mining/common/MiningValueUnit";

interface Props {
  value: string | number;
  unit: string;
  shift: number;
}

const ArcadeMiningHashrateValue: React.FC<Props> = ({
  value,
  unit,
  shift
}): JSX.Element => (
  <div>
    <ValueUnitWrapper>
      <MiningValueUnit value={value} unit={unit} />
    </ValueUnitWrapper>
    <MiningDynamic shift={shift} />
  </div>
);

export default ArcadeMiningHashrateValue;

const ValueUnitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
