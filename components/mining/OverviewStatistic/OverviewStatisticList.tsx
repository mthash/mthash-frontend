import * as React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";

import StatisticItem from "./OverviewStatisticItem";
import OverviewMiningStatistic from "~/models/OverviewMiningStatistic";

interface Props {
  onSelect: (id: any) => void;
  selected: string;
  overviewStatistic?: OverviewMiningStatistic;
}

const STATISTIC_BLOCKS = [
  {
    dataKey: "pools",
    caption: "Pools"
  },
  {
    dataKey: "algorithms",
    caption: "Algorithms"
  },
  {
    dataKey: "tokens",
    caption: "Tokens"
  },
  ,
  {
    dataKey: "power",
    caption: "Power",
    formatter: ({ value, unit }) => `${value}${unit}`
  },
  {
    dataKey: "daily_revenue",
    caption: "Daily Revenue",
    formatter: ({ value, unit }) => `$${value}${unit}`
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
