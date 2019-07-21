import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ACTIONS = {
  mine: "Mine",
  stop: "Stop"
};

const MiningSlotActions: React.FC = (): JSX.Element => {
  return (
    <>
      <MineButton variant="contained">{ACTIONS.mine}</MineButton>
      <StopButton variant="contained">{ACTIONS.stop}</StopButton>
    </>
  );
};

export default MiningSlotActions;

const ActionButton = styled(Button)`
  text-transform: unset;
  font-size: 13px;
  padding: 7px 31px;
  border-radius: 10px;
  color: ${p => p.theme.palette.text.primary};

  &:hover {
    background: ${p => p.theme.palette.background.button};
  }

  &:not(last-of-type) {
    margin-right: 10px;
  }
`;

const MineButton = styled(ActionButton)`
  background-color: ${p => p.theme.palette.hightlight.blue};
`;

const StopButton = styled(ActionButton)`
  background: linear-gradient(
    ${p => p.theme.palette.background.default},
    ${p => p.theme.palette.background.button}
  );
`;
