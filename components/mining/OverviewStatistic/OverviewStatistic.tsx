import * as React from "react";
import styled, { css } from "styled-components";
import List from "@material-ui/core/List";

import MiningStatistic from "../../../static/mining/MiningStatistic.svg";
import StatisticItem from "./OverviewStatisticItem";

import miningStatistic from "~/_mocks_/miningStatistic.json";

interface StatItem {
  id: number;
  caption: string;
  value: string;
}

const OverviewStatistic: React.FC = (): JSX.Element => {
  const [selected, setSelected] = React.useState(1);

  const handleClick = id => () => {
    setSelected(id);
  };

  return (
    <Wrapper>
      <MiningStatistic />
      <StatisticList>
        {miningStatistic.map(
          ({ id, caption, value }: StatItem): JSX.Element => (
            <StatisticItem
              key={id}
              caption={caption}
              value={value}
              onClick={handleClick(id)}
              selected={id === selected}
            />
          )
        )}
      </StatisticList>
    </Wrapper>
  );
};

export default OverviewStatistic;

const Wrapper = styled.div`
  margin: 0 100px;
`;

const StatisticList = styled(List)`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
