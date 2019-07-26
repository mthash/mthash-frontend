import * as React from "react";
import styled from "styled-components";

import Dialog from "~/components/common/Dialog";
import CurrenciesSelector from "~/components/common/CurrenciesSelector";
import AppContext from "~/containers/AppContext";
import Currency from "~/models/Currency";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ADD_CURRENCY_DIALOG = "Add currency";

const MiningAddCurrencyDialog: React.FC<Props> = ({
  open,
  onClose
}): JSX.Element => {
  const { currencies } = React.useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = React.useState(currencies[0]);

  const handleChangeCurrency = (
    event: React.ChangeEvent<{ value: Currency }>
  ) => {
    setSelectedCurrency(event.target.value as Currency);
  };

  return (
    <Dialog open={open} onClose={onClose} title={ADD_CURRENCY_DIALOG}>
      <CurrenciesSelector
        onChange={handleChangeCurrency}
        selected={selectedCurrency}
        currencies={currencies}
      />
    </Dialog>
  );
};

export default MiningAddCurrencyDialog;
