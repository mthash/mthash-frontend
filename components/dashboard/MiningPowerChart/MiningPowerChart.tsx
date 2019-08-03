import * as React from "react";
import styled from "styled-components";

import Paper from "~/components/common/Paper";
import LinearChart from "~/components/dashboard/common/LinearChart";
import ChartStatistic from "~/components/dashboard/common/ChartStatistic";
import SimpleCurrenciesSelector from "~/components/common/SimpleCurrencySelector";
import ChartStatisticModel from "~/models/ChartStatistic";

import WidgetHeader from "../common/WidgetHeader";
import PeriodsFilter from "../common/PeriodsFilter";
import AppContext from "~/containers/AppContext";
import Currency from "~/models/Currency";

const CAPTION = "Mining Power";

import miningPowerData from "~/_mocks_/miningPower.json";
import miningPowerStatistic from "~/_mocks_/miningPowerStatistic.json";

const MiningPowerChart: React.FC = (): JSX.Element => {
  const chartData = miningPowerData;
  const statistic = miningPowerStatistic;
  const chartColors = ["#00C9FF"];

  const { currencies } = React.useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = React.useState(
    currencies && currencies[0]
  );

  const handleChangeCurrency = (
    event: React.ChangeEvent<{ value: Currency }>
  ) => {
    setSelectedCurrency(event.target.value as Currency);
  };

  return (
    <Wrapper>
      <WidgetHeader
        caption={
          <CaptionWrapper>
            <Caption>{CAPTION}</Caption>
            <CurrenciesSelector
              currencies={currencies}
              selected={selectedCurrency}
              onChange={handleChangeCurrency}
            />
          </CaptionWrapper>
        }
        actions={<PeriodsFilter />}
      />
      <ChartStatistic statistic={statistic as ChartStatisticModel[]} />
      <ChartWrapper>
        <LinearChart data={chartData} colors={chartColors} />
      </ChartWrapper>
    </Wrapper>
  );
};

export default MiningPowerChart;

const Wrapper = styled(Paper)`
  height: 45vh;
  display: flex;
  flex-direction: column;
`;

const CaptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Caption = styled.span`
  display: inline-block;
  margin-right: 30px;
  white-space: nowrap;
`;

const CurrenciesSelector = styled(SimpleCurrenciesSelector)`
  font-weight: normal;
  font-size: 12px;
  color: ${p => p.theme.palette.text.secondary};
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 25vh;
  flex: 1;
`;
