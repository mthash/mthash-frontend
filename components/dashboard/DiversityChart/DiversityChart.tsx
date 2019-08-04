import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import Paper from "~/components/common/Paper";
import PieChart from "~/components/dashboard/common/PieChart";

import WidgetHeader from "../common/WidgetHeader";

import miningPowerData from "~/_mocks_/miningPower.json";
import diversity from "~/_mocks_/diversity.json";

const CAPTION = "Diversity";
const ACTIONS = {
  portfolio: "Portfolio",
  hashPower: "Hash Power"
};

const DiversityChart: React.FC = (): JSX.Element => {
  const chartData = miningPowerData;

  return (
    <Wrapper>
      <WidgetHeader
        caption={<Caption>{CAPTION}</Caption>}
        actions={
          <>
            <FilterButton>{ACTIONS.portfolio}</FilterButton>
            <FilterButton>{ACTIONS.hashPower}</FilterButton>
          </>
        }
      />
      <ChartWrapper>
        <PieChart
          data={diversity}
          colors={["#E040FB", "#7C4DFF", "#FF4081", "#69F0AE", "#FFD740"]}
        />
      </ChartWrapper>
    </Wrapper>
  );
};

export default DiversityChart;

const Wrapper = styled(Paper)`
  height: 45vh;
  display: flex;
  flex-direction: column;
`;

const Caption = styled.span`
  display: inline-block;
  margin-right: 30px;
  white-space: nowrap;
`;

const FilterButton = styled(Button)`
  font-size: 13px;
  background-color: ${p => p.theme.palette.background.default};
  margin-left: 5px;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 25vh;
  flex: 1;
`;
