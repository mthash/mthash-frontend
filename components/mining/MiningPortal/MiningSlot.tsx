import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import MiningSlotModel from "~/models/MiningSlot";
import Currency from "~/models/types/Currency";
import Paper from "~/components/common/Paper";
import MiningDynamic from "~/components/mining/common/MiningDynamic";
import MiningValueUnit from "~/components/mining/common/MiningValueUnit";
import MiningSlotHeader from "./MiningSlotHeader";
import MiningSlotChart from "./MiningSlotChart";
import MiningHashInput from "./MiningHashInput";
import MiningSlotActions from "./MiningSlotActions";
import TotalWithdrawConfirm from "./TotalWithdrawConfirm";
import MiningContainer from "~/containers/MiningContainer";

interface OperationArgs {
  currency: Currency;
  amount: string;
}

interface Props extends MiningSlotModel {
  onDeposit: (OperationArgs) => {};
  onWithdraw: (OperationArgs) => {};
}

const MiningSlot: React.FC<Props> = ({
  id,
  currency,
  algorithm,
  value,
  unit,
  shift,
  chart_data,
  onDeposit,
  onWithdraw
}): JSX.Element => {
  const [amount, setAmount] = React.useState(null);
  const [confirmShown, setConfirmShown] = React.useState(false);
  const { minedAsset } = MiningContainer.useContainer();
  const chartDataToDisplay = chart_data;

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.currentTarget.value);
  };

  const handleWithdraw = () => {
    onWithdraw && onWithdraw({ currency, amount });
  };

  const handleDeposit = () => {
    onDeposit && onDeposit({ currency, amount });
  };

  const handleClosePosition = () => {
    setConfirmShown(true);
  };

  const handleWithdrawClose = () => setConfirmShown(false);

  const handleWithdrawConfirm = () => {
    minedAsset.unbind(currency);
    setConfirmShown(false);
  };

  return (
    <Wrapper>
      <MiningSlotHeader
        currency={currency}
        algorithm={algorithm}
        onClose={handleClosePosition}
      />

      <SlotValue>
        <MiningValueUnit value={value} unit={unit} />
        <MiningDynamic shift={shift} isWithChart={false} />
      </SlotValue>
      <SlotChart>
        <MiningSlotChart chartData={chartDataToDisplay as any} />
      </SlotChart>
      <MiningHashInput amount={amount} onChange={handleAmountChange} />
      <SlotActions>
        <MiningSlotActions
          onDeposit={handleDeposit}
          onWithdraw={handleWithdraw}
        />
      </SlotActions>
      <TotalWithdrawConfirm
        open={confirmShown}
        onClose={handleWithdrawClose}
        onConfirm={handleWithdrawConfirm}
      />
    </Wrapper>
  );
};

export default MiningSlot;

const Wrapper = styled(Paper)`
  padding: 20px;
  background-color: ${p => p.theme.palette.background.paper2};
`;

const SlotValue = styled.div`
  font-size: 21px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlotChart = styled.div`
  width: 100%;
  height: 55px;
  margin: 20px 0;
`;

const SlotActions = styled.div`
  margin-top: 20px;
  text-align: center;
`;
