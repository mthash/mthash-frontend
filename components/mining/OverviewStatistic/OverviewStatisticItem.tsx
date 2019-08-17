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
      {selected && <img src={"/static/ArrowDown.svg"} />}
    </SelectedIndicator>
  </Wrapper>
);

export default StatisticItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 10px;

  @media screen and (max-width: 1100px) {
    margin: 0 8px;
  }

  @media screen and (max-width: 770px) {
    margin: 0 6px;
  }

  @media screen and (max-width: 670px) {
    margin: 0 5px;
  }
`;

const StatisticListItem = styled(ListItem)`
  padding: 40px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${p => p.theme.palette.background.divider};
  min-height: 100px;

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

  @media screen and (max-width: 1100px) {
    padding: 30px;
    font-size: 12px;
  }

  @media screen and (max-width: 770px) {
    padding: 20px;
  }

  @media screen and (max-width: 670px) {
    padding: 2px;
    font-size: 10px;
  }
`;

const StatisticValue = styled.p`
  font-size: 40px;

  @media screen and (max-width: 1100px) {
    font-size: 25px;
  }

  @media screen and (max-width: 670px) {
    font-size: 16px;
  }

  @media screen and (max-width: 520px) {
    font-size: 13px;
  }
`;

const StatisticCaption = styled.p`
  color: ${p => p.theme.palette.text.secondary};
  text-align: center;
`;

const SelectedIndicator = styled.div`
  padding-top: 10px;
  height: 44px;
  text-align: center;
`;
