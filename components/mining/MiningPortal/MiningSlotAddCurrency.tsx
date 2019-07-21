import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ADD_CURRENCY = "+ Add currency";

const MiningSlotAddCurrency: React.FC = (): JSX.Element => {
  return (
    <AddCurrencyButton variant="outlined">{ADD_CURRENCY}</AddCurrencyButton>
  );
};

export default MiningSlotAddCurrency;

const AddCurrencyButton = styled(Button)`
  width: 100%;
  height: 100%;
  font-size: 18px;
  border-radius: 10px;
  text-transform: unset;
  color: ${p => p.theme.palette.text.third};
  border: 1px dashed ${p => p.theme.palette.text.third};

  &:hover {
    color: ${p => p.theme.palette.text.secondary};
    border-color: ${p => p.theme.palette.text.secondary};
  }
`;
