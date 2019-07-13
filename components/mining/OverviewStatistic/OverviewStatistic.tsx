import * as React from "react";
import styled, { css } from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import MiningStatistic from "../../../static/MiningStatistic.svg";

import miningStatistic from "~/_mocks_/miningStatistic.json";

interface StatisticItemProps {
  id: number;
  caption: string;
  value: string;
  selected: boolean;
  onClick: () => {};
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  caption,
  value,
  selected,
  onClick
}): JSX.Element => {
  return (
    <StatisticListItem onClick={onClick} selected={selected} button>
      <StatisticValue>{value}</StatisticValue>
      <StatisticCaption>{caption}</StatisticCaption>
    </StatisticListItem>
  );
};

const OverviewStatistic: React.FC = (): JSX.Element => {
  const [selected, setSelected] = React.useState(null);

  const handleClick = id => () => {
    setSelected(id);
  };

  return (
    <Wrapper>
      <MiningStatistic />
      <StatisticList>
        {miningStatistic.map(
          ({ id, caption, value }): JSX.Element => (
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

const StatisticListItem = styled(ListItem)`
  margin: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 10px
  border: 1px solid ${p => p.theme.palette.background.divider};
  ${p =>
    p.selected &&
    css`
      background-color: ${p.theme.palette.background.default} !important;
      border-color: ${p.theme.palette.background.default};
      box-shadow: 0px 2px 11px 7px ${p.theme.palette.background.divider};
    `}


  &:hover {
    background-color: ${p => p.theme.palette.background.divider};
  }
`;
const StatisticValue = styled.p`
  font-size: 40px;
`;

const StatisticCaption = styled.p`
  color: ${p => p.theme.palette.text.secondary};
`;
