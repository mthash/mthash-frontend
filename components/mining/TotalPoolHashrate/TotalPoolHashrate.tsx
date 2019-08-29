import * as React from "react";
import styled from "styled-components";
import numeral from "numeral";
import { find, propEq } from "ramda";

import Paper from "~/components/common/Paper";
import { PERIODS_SHORT } from "~/constants/periods";
import OVERVIEW_CATEGORIES from "~/constants/overviewCategories";
import TotalPoolHeader from "./TotalPoolHeader";
import MiningContainer from "~/containers/MiningContainer";
import TotalPoolHashrateChart from "./TotalPoolHashrateChart";
import AppContext from "~/containers/AppContext";
import { defaultCipherList } from "constants";

const CHART_PRECISION_BY_PERIOD = {
  [PERIODS_SHORT.h1]: {
    xFormat: "time:%I %M",
    precision: "minute",
    axisBottom: {
      format: "%I:%M %p",
      tickValues: "every 30 minutes"
    }
  },
  [PERIODS_SHORT.h3]: {
    xFormat: "time:%I %M",
    precision: "hour",
    axisBottom: {
      format: "%I:%M %p",
      tickValues: "every 1 hour"
    }
  },
  [PERIODS_SHORT.d1]: {
    xFormat: "time:%I %M",
    precision: "hour",
    axisBottom: {
      format: "%I:%M %p",
      tickValues: "every 1 hour"
    }
  },
  [PERIODS_SHORT.d7]: {
    xFormat: "time:%I %M",
    precision: "hour",
    axisBottom: {
      format: "%d/%m %I:%M %p",
      tickSize: 4,
      tickRotation: -15,
      tickValues: "every 6 hour"
    }
  },
  [PERIODS_SHORT.m1]: {
    xFormat: "time:%d %m",
    precision: "day",
    axisBottom: {
      format: "%d/%m",
      tickValues: "every 12 hours"
    }
  },
  [PERIODS_SHORT.all]: {
    xFormat: "time:%d %m",
    precision: "day",
    axisBottom: {
      format: "%d/%m",
      tickValues: "every 1 day"
    }
  }
};

const Y_FORMATERS = {
  poolsHashrate: value => {
    const petaValue = (+value / 1e15).toFixed(2);
    return `${petaValue} PH/s`;
  },
  hashrate: value =>
    `${numeral(value)
      .format("0.0 a")
      .toUpperCase()}H/s`,
  money: value =>
    `$ ${numeral(value)
      .format("0.0 a")
      .toUpperCase()}`,
  power: value =>
    `${numeral(value)
      .format("0.0 a")
      .toUpperCase()}W`,
  common: value => numeral(value).format("0,0.0")
};

const TotalPoolHashrate: React.FC = (): JSX.Element => {
  const {
    selectedOverviewPeriod,
    selectedOverviewCategory,
    selectedCurrency,
    totalPoolHashrate
  } = MiningContainer.useContainer();
  const { currencies } = React.useContext(AppContext);
  const selectedCategory = selectedOverviewCategory.category;
  const poolsCategory = OVERVIEW_CATEGORIES.pools.name;
  const algorithmsCategory = OVERVIEW_CATEGORIES.algorithms.name;
  const revenueCategory = OVERVIEW_CATEGORIES.daily_revenue.name;
  const powerCategory = OVERVIEW_CATEGORIES.power.name;
  const selectedCategoryTitle = OVERVIEW_CATEGORIES[selectedCategory].title;

  const yFormatter = (() => {
    switch (selectedCategory) {
      case poolsCategory:
        return Y_FORMATERS.poolsHashrate;
      case algorithmsCategory:
        return Y_FORMATERS.hashrate;
      case revenueCategory:
        return Y_FORMATERS.money;
      case powerCategory:
        return Y_FORMATERS.power;
      default:
        return Y_FORMATERS.common;
    }
  })();

  React.useEffect(() => {
    totalPoolHashrate.fetch();
  }, []);

  const { chart, min, max } = totalPoolHashrate.data;

  const yScale = {
    type: "linear",
    stacked: false,
    min,
    max
  };

  const handleLegendClick = ({ id }) => {
    const allCurrencies = currencies.all;
    const foundCurrency = find(propEq("symbol", id))(allCurrencies);

    if (foundCurrency) selectedCurrency.set(foundCurrency.id);
  };

  return (
    <Wrapper>
      <TotalPoolHeader title={selectedCategoryTitle} />
      <TotalPoolHashrateChart
        data={chart}
        {...CHART_PRECISION_BY_PERIOD[selectedOverviewPeriod.period]}
        yScale={yScale}
        axisLeft={{ format: yFormatter }}
        yTooltipFormat={yFormatter}
        onLegendClick={handleLegendClick}
      />
    </Wrapper>
  );
};

export default TotalPoolHashrate;

const Wrapper = styled(Paper)`
  width: 100%;
  height: 55vh;
  background-color: ${p => p.theme.palette.background.paperDarkest};
  padding: 20px;
  margin: 25px 0 30px;
`;
