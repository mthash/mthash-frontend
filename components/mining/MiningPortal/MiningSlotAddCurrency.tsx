import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import MiningAddCurrencyDialog from "./MiningAddCurrencyDialog";
import Currency from "~/models/types/Currency";

const ADD_CURRENCY = "+ Add currency";

interface Props {
  addedCurrencies: Currency[];
}

const MiningSlotAddCurrency: React.FC<Props> = ({ addedCurrencies }): JSX.Element => {
  const [modalOpened, setModalOpened] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpened(true);
  };

  const handleCloseModal = () => {
    setModalOpened(false);
  };

  return (
    <>
      <AddCurrencyButton variant="outlined" onClick={handleOpenModal}>
        {ADD_CURRENCY}
      </AddCurrencyButton>
      <MiningAddCurrencyDialog 
        open={modalOpened} 
        onClose={handleCloseModal} 
        currenciesToExclude={addedCurrencies}
      />
    </>
  );
};

export default MiningSlotAddCurrency;

const AddCurrencyButton = styled(Button)`
  width: 100%;
  height: 100%;
  font-size: 18px;
  border-radius: 10px;
  min-height: 302px;
  text-transform: unset;
  color: ${p => p.theme.palette.text.third};
  border: 1px dashed ${p => p.theme.palette.text.third};

  &:hover {
    color: ${p => p.theme.palette.text.secondary};
    border-color: ${p => p.theme.palette.text.secondary};
  }
`;
