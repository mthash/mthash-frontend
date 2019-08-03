import * as React from "react";
import styled from "styled-components";
import Trend from "~/models/types/Trend";
import { TRENDS } from "~/constants/trends";

interface Props {
  children: React.ReactChildren | string | number;
  trend?: Trend;
}

const ChartStatisticItemValue: React.FC<Props> = ({
  children,
  trend
}): JSX.Element => {
  const arrowDirection = ((): JSX.Element | string => {
    switch (trend) {
      case TRENDS.positive:
        return <ArrowUp trend={trend} />;
      case TRENDS.negative:
        return <ArrowDown trend={trend} />;
      default:
        return "-";
    }
  })();

  const content = trend ? (
    <ValueWithTrendWrapper>
      <ValueWithTrend trend={trend}>{children}</ValueWithTrend>
      {arrowDirection}
    </ValueWithTrendWrapper>
  ) : (
    children
  );

  return <Wrapper>{content}</Wrapper>;
};

export default ChartStatisticItemValue;

interface WithTrendProps {
  trend: Trend;
  theme: any;
}

const colorDefine = ({ trend, theme }: WithTrendProps): string => {
  switch (trend) {
    case TRENDS.positive:
      return theme.palette.success.main;
    case TRENDS.negative:
      return theme.palette.error.main;
    case TRENDS.neutral:
    default:
      return theme.palette.text.secondary;
  }
};

const Wrapper = styled.div`
  font-size: 2em;
  line-height: 1;
`;

const ArrowUp = styled.span`
  display: inline-block;
  border: 8px solid transparent;
  border-bottom-color: ${colorDefine};
  margin: 8px;
`;

const ArrowDown = styled.span`
  display: inline-block;
  border: 8px solid transparent;
  border-top-color: ${colorDefine};
  margin: 16px 8px;
`;

const ValueWithTrendWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ValueWithTrend = styled.div<WithTrendProps>`
  color: ${colorDefine};
`;
