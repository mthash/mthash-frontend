import * as React from "react";
import MiningActions from "./MiningActions";

const ACTIONS = {
  mine: "Mine",
  stop: "Stop"
};

interface Props {
  onDeposit: () => void;
  onWithdraw: () => void;
}

const MiningSlotActions: React.FC<Props> = ({
  onDeposit,
  onWithdraw
}): JSX.Element => {
  return (
    <MiningActions
      goCaption={ACTIONS.mine}
      backCaption={ACTIONS.stop}
      onGo={onDeposit}
      onBack={onWithdraw}
    />
  );
};

export default MiningSlotActions;
