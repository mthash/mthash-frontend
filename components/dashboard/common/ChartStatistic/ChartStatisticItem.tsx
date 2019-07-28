import * as React from "react";
import styled from "styled-components";

import ChartStatistic from "~/models/ChartStatistic";
import ChartStatisticItemValue from "./ChartStatisticItemValue";

const ChartStatisticItem: React.FC<ChartStatistic> = ({
  value,
  caption,
  trend
}): JSX.Element => {
  return (
    <Wrapper>
      <ChartStatisticItemValue trend={trend}>{value}</ChartStatisticItemValue>
      <Caption>{caption}</Caption>
    </Wrapper>
  );
};

export default ChartStatisticItem;

const Wrapper = styled.section`
  margin: 10px 0;
`;

const Caption = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  color: ${p => p.theme.palette.text.secondary};
`;
