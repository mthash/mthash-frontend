import * as React from "react";
import styled, { StyledFunction } from "styled-components";

import ArcadeMiningDynamic from "./ArcadeMiningDynamic";

interface Props {
  value: number | string;
  unit: string;
  shift: number;
}

const SIGNS = {
  plus: "+",
  minus: "-"
};

const ArcadeMiningValue: React.FC<Props> = ({
  value,
  unit,
  shift
}): JSX.Element => {
  const isPositiveShift = shift > 0;
  const shiftSign = isPositiveShift && SIGNS.plus;

  return (
    <Wrapper>
      <div>
        {value}
        <Unit>{unit}</Unit>
      </div>
      <div>
        <ArcadeMiningDynamic shift={shift} />
        <Shift shift={shift}>
          {shiftSign}
          {shift}%
        </Shift>
      </div>
    </Wrapper>
  );
};

export default ArcadeMiningValue;

const Wrapper = styled.div`
  display: block;
`;

const Unit = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-size: 12px;
  color: ${p => p.theme.palette.text.secondary};
`;

interface ShiftProps {
  shift: number;
  theme: any;
}

const Shift = styled.span<ShiftProps>`
  display: inline-block;
  margin-left: 5px;
  font-size: 12px;
  color: ${({ shift, theme }: ShiftProps) => {
    if (shift === 0) return theme.palette.text.secondary;
    if (shift > 0) return theme.palette.success.main;
    if (shift < 0) return theme.palette.error.main;
  }};
`;
