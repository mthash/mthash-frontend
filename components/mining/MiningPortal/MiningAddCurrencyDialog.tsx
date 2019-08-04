import * as React from "react";
import styled from "styled-components";

import Dialog from "~/components/common/Dialog";
import CurrenciesSelector from "~/components/common/CurrenciesSelector";
import AppContext from "~/containers/AppContext";
import Currency from "~/models/Currency";
import MiningHashInput from "./MiningHashInput";
import TextField from "~/components/common/TextField";
import { DialogActions, Button, Divider } from "@material-ui/core";
import MiningActions from "./MiningActions";
import AppContainer from "~/containers/AppContainer";
import MiningContainer from "~/containers/MiningContainer";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ADD_CURRENCY_DIALOG = "Add currency";
const ACTIONS = {
  add: "Add",
  cancel: "Cancel"
};

const MiningAddCurrencyDialog: React.FC<Props> = ({
  open,
  onClose
}): JSX.Element => {
  const {
    currencies: { mineable: mineableCurrencies }
  } = React.useContext(AppContext);
  const { minedAsset } = MiningContainer.useContainer();
  const [selectedCurrency, setSelectedCurrency] = React.useState(
    mineableCurrencies && mineableCurrencies[0]
  );
  const [amount, setAmount] = React.useState("0");

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.currentTarget.value);
  };

  const handleChangeCurrency = (
    event: React.ChangeEvent<{ value: Currency }>
  ) => {
    setSelectedCurrency(event.target.value as Currency);
  };

  const handleAddCurrency = async () => {
    const result: any = await minedAsset.deposit({
      asset: selectedCurrency.symbol,
      amount
    });

    if (result instanceof Error) return;

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} title={ADD_CURRENCY_DIALOG}>
      <ContentWrapper>
        <CurrenciesSelector
          onChange={handleChangeCurrency}
          selected={selectedCurrency}
          currencies={mineableCurrencies}
        />
        <TextField
          value={amount}
          onChange={handleAmountChange}
          variant="filled"
          type="number"
          inputProps={{
            step: 0.0001,
            min: 0
          }}
          fullWidth
        />
      </ContentWrapper>
      <ActionsWrapper>
        <Divider />
        <MiningActions
          goCaption={ACTIONS.add}
          backCaption={ACTIONS.cancel}
          onGo={handleAddCurrency}
          onBack={onClose}
        />
      </ActionsWrapper>
    </Dialog>
  );
};

export default MiningAddCurrencyDialog;

const ContentWrapper = styled.div`
  max-width: 300px;
  min-height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActionsWrapper = styled(DialogActions)`
  padding: 20px 0px;
`;
