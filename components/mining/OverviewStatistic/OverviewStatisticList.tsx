import * as React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";

import OVERVIEW_CATEGORIES from "~/constants/overviewCategories";
import StatisticItem from "./OverviewStatisticItem";
import OverviewMiningStatistic from "~/models/OverviewMiningStatistic";

interface Props {
  onSelect: (id: any) => void;
  selected: string;
  overviewStatistic?: OverviewMiningStatistic;
}

const STATISTIC_BLOCKS = [
  {
    dataKey: OVERVIEW_CATEGORIES.pools.name,
    caption: "Pools"
  },
  {
    dataKey: OVERVIEW_CATEGORIES.algorithms.name,
    caption: "Algorithms"
  },
  {
    dataKey: OVERVIEW_CATEGORIES.tokens.name,
    caption: "Tokens"
  },
  {
    dataKey: OVERVIEW_CATEGORIES.daily_revenue.name,
    caption: "Daily Revenue",
    formatter: ({ value, unit }) => `$${value}${unit}`
  },
  {
    dataKey: OVERVIEW_CATEGORIES.power.name,
    caption: "Power",
    formatter: ({ value, unit }) => `${value}${unit}`
  }
];

const OverviewStatisticList: React.FC<Props> = ({
  onSelect,
  selected,
  overviewStatistic
}): JSX.Element => {
  if (!overviewStatistic) return null;

  return (
    <StatisticList>
      {STATISTIC_BLOCKS.map(
        ({ dataKey, caption, formatter }): JSX.Element => {
          const statValue = overviewStatistic[dataKey];

          return (
            <StatisticItem
              key={dataKey}
              caption={caption}
              value={formatter ? formatter(statValue) : statValue}
              onClick={onSelect.bind(null, dataKey)}
              selected={dataKey === selected}
            />
          );
        }
      )}
    </StatisticList>
  );
};

export default OverviewStatisticList;

const StatisticList = styled(List)`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
