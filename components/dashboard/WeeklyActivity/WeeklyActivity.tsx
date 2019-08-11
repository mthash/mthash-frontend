import * as React from "react";
import styled from "styled-components";

import Paper from "~/components/common/Paper";
import BarChart from "~/components/dashboard/common/BarChart";
import ChartStatistic from "~/components/dashboard/common/ChartStatistic";
import SimpleCurrenciesSelector from "~/components/common/SimpleCurrencySelector";
import ChartStatisticModel from "~/models/ChartStatistic";

import WidgetHeader from "../common/WidgetHeader";
import PeriodsFilter from "../common/PeriodsFilter";
import AppContext from "~/containers/AppContext";
import Currency from "~/models/Currency";

const CAPTION = "Mining Payout";

import weeklyActivityData from "~/_mocks_/weeklyActivity.json";
import weeklyActivityStatistic from "~/_mocks_/weeklyActivityStatistic.json";

const WeeklyActivityChart: React.FC = (): JSX.Element => {
  const chartData = weeklyActivityData;
  const statistic = weeklyActivityStatistic;

  const {
    currencies: { all: allCurrencies }
  } = React.useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = React.useState(
    allCurrencies && allCurrencies[0]
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
              currencies={allCurrencies}
              selected={selectedCurrency}
              onChange={handleChangeCurrency}
            />
          </CaptionWrapper>
        }
        actions={<PeriodsFilter />}
      />
      <ChartStatistic statistic={statistic as ChartStatisticModel[]} />
      <ChartWrapper>
        <BarChart data={chartData} indexedBy="day" keys={["value"]} />
      </ChartWrapper>
    </Wrapper>
  );
};

export default WeeklyActivityChart;

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
