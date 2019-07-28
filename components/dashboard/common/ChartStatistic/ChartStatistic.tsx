import * as React from "react";
import styled from "styled-components";
import { isEmpty } from "ramda";

import ChartStatisticModel from "~/models/ChartStatistic";
import ChartStatisticItem from "./ChartStatisticItem";

interface Props {
  statistic: ChartStatisticModel[];
}

const ChartStatistic: React.FC<Props> = ({ statistic }): JSX.Element | null => {
  if (isEmpty(statistic)) return null;

  return (
    <Wrapper>
      {statistic.map(statItem => (
        <ChartStatisticItem key={statItem.caption} {...statItem} />
      ))}
    </Wrapper>
  );
};

export default ChartStatistic;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;
