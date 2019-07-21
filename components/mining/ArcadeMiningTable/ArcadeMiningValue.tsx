import * as React from "react";
import styled, { StyledFunction } from "styled-components";

import MiningDynamic from "~/components/mining/common/MiningDynamic";
import MiningValueUnit from "~/components/mining/common/MiningValueUnit";

interface Props {
  value: number | string;
  unit: string;
  shift: number;
}

const ArcadeMiningValue: React.FC<Props> = ({
  value,
  unit,
  shift
}): JSX.Element => (
  <div>
    <div>
      <MiningValueUnit value={value} unit={unit} />
    </div>
    <MiningDynamic shift={shift} />
  </div>
);

export default ArcadeMiningValue;
