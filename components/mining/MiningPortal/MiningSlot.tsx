import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import format from "string-template";
import { isEmpty } from "ramda";

import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import ENDPOINTS from "~/constants/endpoints";
import { AsyncService } from "~/services";
import MiningSlotModel from "~/models/MiningSlot";
import Currency from "~/models/types/Currency";
import Paper from "~/components/common/Paper";
import Confirm from "~/components/common/Confirm";
import MiningDynamic from "~/components/mining/common/MiningDynamic";
import MiningValueUnit from "~/components/mining/common/MiningValueUnit";
import MiningSlotHeader from "./MiningSlotHeader";
import MiningSlotChart from "./MiningSlotChart";
import MiningHashInput from "./MiningHashInput";
import MiningContainer from "~/containers/MiningContainer";
import MiningSlotDirectionSelect from "./MiningSlotDirectionSelect";
import AppContainer from "~/containers/AppContainer";

const TOTAL_WITHDRAW = {
  title: "Close position",
  text: "Stop all mining of this coin?"
};

const DIRECTIONS = {
  mine: "Mine",
  stop: "Stop"
};

const SUBMIT_CAPTION = "Submit";

interface OperationArgs {
  currency: Currency;
  amount: string;
}

interface Props extends MiningSlotModel {
  onDeposit: (OperationArgs) => {};
  onWithdraw: (OperationArgs) => {};
}

interface Maxes {
  withdraw?: number;
  deposit?: number;
}

function getMaxByDirection(direction: string, maxes: Maxes): number {
  return direction === DIRECTIONS.mine ? maxes.deposit : maxes.withdraw;
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
  const [selectedDirection, setSelectedDirection] = React.useState(
    DIRECTIONS.mine
  );
  const [maxesLoading, setMaxesLoading] = React.useState(false);
  const [maxes, setMaxes] = React.useState<Maxes>({});
  const { notifications } = AppContainer.useContainer();

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

  const handleChangeDirection = (direction: string) => {
    if (!isEmpty(maxes)) setAmount(getMaxByDirection(direction, maxes));

    setSelectedDirection(direction);
  };

  const handleWithdrawClose = () => setConfirmShown(false);

  const handleWithdrawConfirm = () => {
    minedAsset.unbind(currency);
    setConfirmShown(false);
  };

  const handleMaxesRequest = async () => {
    setMaxesLoading(true);
    const mineMaxesUrl = format(ENDPOINTS.mining.mineMaxes, {
      asset: currency
    });
    // const minePredictUrl = format(ENDPOINTS.mining.minePredict, {
    //   asset: currency
    // });

    try {
      const result = await AsyncService.get(mineMaxesUrl);
      const maxes = result.data.body;
      // const params = { amount: 10 };
      // const minePredict = await AsyncService.get(minePredictUrl, { amount });

      setMaxes(maxes);
      setAmount(getMaxByDirection(selectedDirection, maxes));
    } catch ({ message }) {
      notifications.addNotification({
        type: NOTIFICATION_TYPES.error,
        message
      });
    }

    setMaxesLoading(false);
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
      <MiningSlotDirectionSelect
        selected={selectedDirection}
        directions={DIRECTIONS}
        onChange={handleChangeDirection}
      />
      <MiningHashInput
        amount={amount}
        amountLoading={maxesLoading}
        onChange={handleAmountChange}
        onMaxRequest={handleMaxesRequest}
      />
      <Confirm
        open={confirmShown}
        onClose={handleWithdrawClose}
        onConfirm={handleWithdrawConfirm}
        title={TOTAL_WITHDRAW.title}
        text={TOTAL_WITHDRAW.text}
      />
      <SubmitWrapper>
        <SubmitButton variant="contained">{SUBMIT_CAPTION}</SubmitButton>
      </SubmitWrapper>
    </Wrapper>
  );
};

export default MiningSlot;

const Wrapper = styled(Paper)`
  padding: 20px;
  background-color: ${p => p.theme.palette.background.paper2};
`;

const SlotValue = styled.div`
  font-size: 16px;
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

const SubmitWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled(Button)`
  text-transform: uppercase;
  font-size: 13px;
  padding: 7px 25px;
  color: ${p => p.theme.palette.text.primary};
  background: ${p => `linear-gradient(
      ${p.theme.palette.background.default},
      ${p.theme.palette.background.button}
    `}
  );
`;
