import * as React from "react";
import styled, { css } from "styled-components";
import ListItem from "@material-ui/core/ListItem";

// import ArrowDown from "../../../static/icons/ArrowDown.svg";

interface StatisticItemProps {
  caption: string;
  value: string;
  selected: boolean;
  onClick: () => void;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  caption,
  value,
  selected,
  onClick
}): JSX.Element => (
  <Wrapper>
    <StatisticListItem onClick={onClick} selected={selected} button>
      <StatisticValue>{value}</StatisticValue>
      <StatisticCaption>{caption}</StatisticCaption>
    </StatisticListItem>
    <SelectedIndicator>
      {selected && <img src={"/static/arrow-down.png"} />}
    </SelectedIndicator>
  </Wrapper>
);

export default StatisticItem;

const Wrapper = styled.div`
  display: block;
  flex: 1;
  margin: 0 10px;
`;

const StatisticListItem = styled(ListItem)`
  // margin: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
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

const SelectedIndicator = styled.div`
  padding-top: 10px;
  height: 44px;
  text-align: center;
`;
