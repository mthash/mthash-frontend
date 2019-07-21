import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import MiningSlotModel from "~/models/MiningSlot";
import Paper from "~/components/common/Paper";
import MiningDynamic from "~/components/mining/common/MiningDynamic";
import MiningValueUnit from "~/components/mining/common/MiningValueUnit";
import MiningSlotHeader from "./MiningSlotHeader";
import MiningSlotChart from "./MiningSlotChart";
import MiningHashInput from "./MiningHashInput";
import MiningSlotActions from "./MiningSlotActions";

const MiningSlot: React.FC<MiningSlotModel> = ({
  id,
  currency,
  algorithm,
  value,
  unit,
  shift,
  miningValue,
  chartData
}): JSX.Element => {
  return (
    <Wrapper>
      <MiningSlotHeader currency={currency} algorithm={algorithm} />
      <SlotValue>
        <MiningValueUnit value={value} unit={unit} />
        <MiningDynamic shift={shift} isWithChart={false} />
      </SlotValue>
      <SlotChart>
        <MiningSlotChart chartData={chartData} />
      </SlotChart>
      <MiningHashInput miningValue={miningValue} />
      <SlotActions>
        <MiningSlotActions />
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
