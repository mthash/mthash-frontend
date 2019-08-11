import * as React from "react";
import styled from "styled-components";
import { ResponsiveLine, Line } from "@nivo/line";

import { ChartPoint } from "~/models/ChartData";
import Trend from "~/models/types/Trend";

interface Props {
  chartData: {
    id: string | number;
    trend: Trend;
    data: ChartPoint[];
  };
}

const MiningSlotChart: React.FC<Props> = ({
  chartData: { id, trend, data }
}): JSX.Element => {
  return (
    <>
      <ResponsiveLine
        data={[{ id, data }]}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors={[`url(#${trend})`]}
        enablePoints={false}
        lineWidth={3}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={false}
        legends={[]}
      />
      <SvgDefs>
        <defs>
          <linearGradient
            id="negative"
            x1="73.5627"
            y1="-7.53165"
            x2="93.6582"
            y2="61.1978"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A330FF" stop-opacity="0.61" />
            <stop offset="0.393247" stop-color="#BC3DCB" />
            <stop offset="1" stop-color="#E3507A" />
          </linearGradient>
          <linearGradient
            id="positive"
            x1="172.572"
            y1="50.1751"
            x2="-6"
            y2="57.4995"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#63C178" />
            <stop
              offset="0.831269"
              stop-color="#36BBFF"
              stop-opacity="0.466004"
            />
            <stop offset="1" stop-color="#C1F793" stop-opacity="0.01" />
          </linearGradient>
          <linearGradient
            id="neutral"
            x1="165.591"
            y1="34.195"
            x2="-11.5"
            y2="13.9995"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFAD57" />
            <stop
              offset="0.770692"
              stop-color="#EAFF00"
              stop-opacity="0.466004"
            />
            <stop offset="1" stop-color="#FF8502" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </SvgDefs>
    </>
  );
};

export default MiningSlotChart;

const SvgDefs = styled.svg`
  height: 0;
`;
