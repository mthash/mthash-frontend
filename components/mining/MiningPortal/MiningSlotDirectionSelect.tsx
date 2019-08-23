import * as React from "react";
import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";

interface Props {
  selected: string;
  directions: {
    mine: string;
    stop: string;
  };
  onChange: (direction: string) => void;
}

const MiningSlotDirectionSelect: React.FC<Props> = ({
  selected,
  directions,
  onChange
}): JSX.Element => {
  const mine = directions.mine;
  const stop = directions.stop;
  const isMineSelected = selected === mine;
  const isStopSelected = selected === stop;

  const handleMineClick = () => onChange(mine);
  const handleStopClick = () => onChange(stop);

  return (
    <Wrapper>
      <MineButton
        variant="contained"
        selected={isMineSelected}
        onClick={handleMineClick}
      >
        {mine}
      </MineButton>
      <StopButton
        variant="contained"
        selected={isStopSelected}
        onClick={handleStopClick}
      >
        {stop}
      </StopButton>
    </Wrapper>
  );
};

export default MiningSlotDirectionSelect;

interface ActionButtonProps {
  selected: boolean;
  theme: any;
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const ActionButton = styled(Button)`
  text-transform: unset;
  font-size: 13px;
  padding: 7px 31px;
  border-radius: 10px;
  color: ${p => p.theme.palette.text.secondary};
  flex-grow: 1;

  &:hover {
    color: ${p => p.theme.palette.text.primary};
  }

  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }

  &:not(:last-of-type) {
    border-radius: 5px 0 0 5px;
  }
`;

const mineButtonSelectedStyles = p =>
  p.selected &&
  css`
    background: linear-gradient(
      ${p.theme.palette.background.default},
      ${p.theme.palette.background.button}
    );
    color: ${p.theme.palette.text.primary};
  `;

const MineButton = styled(ActionButton)<ActionButtonProps>`
  background-color: ${p => p.theme.palette.background.paper};
  ${mineButtonSelectedStyles}

  &:hover {
    background-color: ${p => p.theme.palette.background.paper};
    ${mineButtonSelectedStyles};
  }
`;

const stopButtonSelectedStyles = p =>
  p.selected &&
  css`
    background-color: ${p.theme.palette.hightlight.red};
    color: ${p.theme.palette.text.primary};
  `;

const StopButton = styled(ActionButton)<ActionButtonProps>`
  background-color: ${p => p.theme.palette.background.paper};
  ${stopButtonSelectedStyles}

  &:hover {
    background-color: ${p => p.theme.palette.background.paper};
    ${stopButtonSelectedStyles}
  }
`;
