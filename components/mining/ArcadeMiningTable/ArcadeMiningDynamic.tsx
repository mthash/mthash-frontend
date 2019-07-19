import * as React from "react";
import styled from "styled-components";

import NegativeShiftDirection from "../../../static/mining/NegativeShiftDirection.svg";
import PositiveShiftDirection from "../../../static/mining/PositiveShiftDirection.svg";

interface Props {
  shift: number;
}

const ArcadeMiningDynamic: React.FC<Props> = ({ shift }): JSX.Element => {
  if (shift === 0) {
    return <>_</>;
  } else if (shift > 0) {
    return (
      <Wrapper>
        <img src="static/mining/PositiveShift.svg" />
        <PositiveShiftDirection />
      </Wrapper>
    );
  } else if (shift < 0) {
    return (
      <Wrapper>
        <img src="static/mining/NegativeShift.svg" />
        <NegativeShiftDirection />
      </Wrapper>
    );
  }
};

export default ArcadeMiningDynamic;

const Wrapper = styled.span`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  > :first-child {
    margin-right: 5px;
  }
`;
