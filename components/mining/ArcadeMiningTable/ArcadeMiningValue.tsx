import * as React from "react";
import styled, { StyledFunction } from "styled-components";

import MiningDynamic from "~/components/mining/common/MiningDynamic";
import MiningValueUnit from "~/components/mining/common/MiningValueUnit";

interface Props {
  balance: number;
  unit: string;
  shift: number;
}

const ArcadeMiningValue: React.FC<Props> = ({
  balance,
  unit,
  shift
}): JSX.Element => (
  <div>
    <div>
      <MiningValueUnit value={balance} unit={unit} />
    </div>
    <MiningDynamic shift={shift} />
  </div>
);

export default ArcadeMiningValue;
