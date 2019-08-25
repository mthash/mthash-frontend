import * as React from "react";
import styled from "styled-components";
import numeral from "numeral";

import Paper from "~/components/common/Paper";
import { PERIODS_SHORT } from "~/constants/periods";
import OVERVIEW_CATEGORIES from "~/constants/overviewCategories";
import TotalPoolHeader from "./TotalPoolHeader";
import MiningContainer from "~/containers/MiningContainer";
import TotalPoolHashrateChart from "./TotalPoolHashrateChart";

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

const Y_AXIS_FORMAT = {
  hashrate: {
    format: value =>
      `${numeral(value)
        .format("0.0 a")
        .toUpperCase()}H/s`
  },
  money: {
    format: value =>
      `$ ${numeral(value)
        .format("0.0 a")
        .toUpperCase()}`
  },
  power: {
    format: value =>
      `${numeral(value)
        .format("0.0 a")
        .toUpperCase()}W`
  },
  common: {
    format: value => numeral(value).format("0,0.0")
  }
};

const TotalPoolHashrate: React.FC = (): JSX.Element => {
  const {
    selectedOverviewPeriod,
    selectedOverviewCategory,
    totalPoolHashrate
  } = MiningContainer.useContainer();
  const selectedCategory = selectedOverviewCategory.category;
  const poolsCategory = OVERVIEW_CATEGORIES.pools.name;
  const algorithmsCategory = OVERVIEW_CATEGORIES.algorithms.name;
  const revenueCategory = OVERVIEW_CATEGORIES.daily_revenue.name;
  const powerCategory = OVERVIEW_CATEGORIES.power.name;
  const selectedCategoryTitle = OVERVIEW_CATEGORIES[selectedCategory].title;

  const yAxis = (() => {
    const isHashrateCategorySelected = [
      poolsCategory,
      algorithmsCategory
    ].includes(selectedCategory);

    if (isHashrateCategorySelected) {
      return Y_AXIS_FORMAT.hashrate;
    } else if (selectedCategory === revenueCategory) {
      return Y_AXIS_FORMAT.money;
    } else if (selectedCategory === powerCategory) {
      return Y_AXIS_FORMAT.power;
    } else {
      return Y_AXIS_FORMAT.common;
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

  return (
    <Wrapper>
      <TotalPoolHeader title={selectedCategoryTitle} />
      <TotalPoolHashrateChart
        data={chart}
        {...CHART_PRECISION_BY_PERIOD[selectedOverviewPeriod.period]}
        yScale={yScale}
        axisLeft={yAxis}
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
