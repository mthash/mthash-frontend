import * as React from "react";
import styled from "styled-components";
import { ResponsiveLine, Line } from "@nivo/line";

import Paper from "~/components/common/Paper";
import LinearChart from "~/components/dashboard/common/LinearChart";
import ChartStatistic from "~/components/dashboard/common/ChartStatistic";
import ChartStatisticModel from "~/models/ChartStatistic";

import WidgetHeader from "../common/WidgetHeader";
import PeriodsFilter from "../common/PeriodsFilter";
import SimpleCurrenciesSelector from "~/components/common/SimpleCurrencySelector";
import AppContext from "~/containers/AppContext";
import Currency from "~/models/Currency";

const CAPTION = "Total Hashrate";

interface Props {
  chartData: any;
  statistic: any;
  chartColors: string[];
}

const TotalHashrateChart: React.FC<Props> = ({
  chartData,
  statistic,
  chartColors
}): JSX.Element => {
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
    <Paper>
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
    </Paper>
  );
};

export default TotalHashrateChart;

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
  height: 50vh;
  width: 100%;
`;
