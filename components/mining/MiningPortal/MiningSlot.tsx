import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import MiningSlotModel from "~/models/MiningSlot";
import Currency from "~/models/types/Currency";
import { ChartPoint } from "~/models/ChartData";
import Paper from "~/components/common/Paper";
import MiningDynamic from "~/components/mining/common/MiningDynamic";
import MiningValueUnit from "~/components/mining/common/MiningValueUnit";
import MiningSlotHeader from "./MiningSlotHeader";
import MiningSlotChart from "./MiningSlotChart";
import MiningHashInput from "./MiningHashInput";
import MiningSlotActions from "./MiningSlotActions";

import miningPortalMock from "~/_mocks_/miningPortal.json";

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
  miningValue,
  chartData,
  onDeposit,
  onWithdraw
}): JSX.Element => {
  const [amount, setAmount] = React.useState(miningValue);
  const mockedChartData = miningPortalMock[id % 4].chartData;
  const chartDataToDisplay = chartData || mockedChartData;

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.currentTarget.value);
  };

  const handleWithdraw = () => {
    onWithdraw && onWithdraw({ currency, amount });
  };

  const handleDeposit = () => {
    onDeposit && onDeposit({ currency, amount });
  };

  return (
    <Wrapper>
      <MiningSlotHeader currency={currency} algorithm={algorithm} />
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
