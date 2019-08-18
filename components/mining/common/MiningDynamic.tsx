import * as React from "react";
import styled from "styled-components";

import NegativeShiftDirection from "../../../static/mining/NegativeShiftDirection.svg";
import PositiveShiftDirection from "../../../static/mining/PositiveShiftDirection.svg";

interface ShiftDirectionProps {
  shift: number;
  className?: string;
}

interface MiningDynamicProps {
  shift: number;
  isWithChart?: boolean;
}

const SIGNS = {
  plus: "+",
  minus: "-"
};

const SHIFT_IMG_BY_GROW = {
  true: "PositiveShift.svg",
  false: "NegativeShift.svg"
};

const ShiftDirection: React.FC<ShiftDirectionProps> = ({
  shift,
  className
}): JSX.Element => {
  if (shift === 0) {
    return <span className={className}></span>;
  } else if (shift > 0) {
    return <PositiveShiftDirection className={className} />;
  } else if (shift < 0) {
    return <NegativeShiftDirection className={className} />;
  }
};

const MiningDynamic: React.FC<MiningDynamicProps> = ({
  shift,
  isWithChart = true
}): JSX.Element => {
  const isPositiveShift = shift > 0;
  const isNil = shift === 0;
  const shiftSign = isPositiveShift && SIGNS.plus;

  return (
    <>
      {isWithChart && !isNil && (
        <img
          src={`/static/mining/${
            SHIFT_IMG_BY_GROW[isPositiveShift.toString()]
          }`}
        />
      )}
      <Shift shift={shift}>
        <ShiftDirectionArrow shift={shift} />
        {shiftSign}
        {shift}%
      </Shift>
    </>
  );
};

export default MiningDynamic;

const ShiftDirectionArrow = styled(ShiftDirection)`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px;
`;

interface ShiftProps {
  shift: number;
  theme: any;
}

// const Shift = styled.span<ShiftProps>`
//   display: inline-block;
// `;

const Shift = styled.span<ShiftProps>`
  display: inline-block;
  white-space: nowrap;
  font-size: 12px;
  color: ${({ shift, theme }: ShiftProps) => {
    if (shift === 0) return theme.palette.text.secondary;
    if (shift > 0) return theme.palette.success.main;
    if (shift < 0) return theme.palette.error.main;
  }};
`;
