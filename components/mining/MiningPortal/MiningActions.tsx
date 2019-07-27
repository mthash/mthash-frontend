import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ACTIONS = {
  mine: "Mine",
  stop: "Stop"
};

interface Props {
  goCaption: string;
  backCaption: string;
  onGo: () => void;
  onBack: () => void;
}

const MiningActions: React.FC<Props> = ({
  onGo,
  onBack,
  goCaption,
  backCaption
}): JSX.Element => {
  return (
    <>
      <MineButton variant="contained" onClick={onGo}>
        {goCaption}
      </MineButton>
      <StopButton variant="contained" onClick={onBack}>
        {backCaption}
      </StopButton>
    </>
  );
};

export default MiningActions;

const ActionButton = styled(Button)`
  text-transform: unset;
  font-size: 13px;
  padding: 7px 31px;
  border-radius: 10px;
  color: ${p => p.theme.palette.text.primary};

  &:hover {
    background: ${p => p.theme.palette.background.button};
  }

  &:not(:last-of-type) {
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
