import * as React from "react";
import styled from "styled-components";

import Dialog from "~/components/common/Dialog";
import CurrenciesSelector from "~/components/common/CurrenciesSelector";
import AppContext from "~/containers/AppContext";
import Currency from "~/models/Currency";
import { default as CurrencyType } from "~/models/types/Currency";
import MiningHashInput from "./MiningHashInput";
import TextField from "~/components/common/TextField";
import { DialogActions, Button, Divider } from "@material-ui/core";
import MiningActions from "./MiningActions";
import AppContainer from "~/containers/AppContainer";
import MiningContainer from "~/containers/MiningContainer";

interface Props {
  open: boolean;
  onClose: () => void;
  currenciesToExclude: CurrencyType[];
}

const ADD_CURRENCY_DIALOG = "Add currency";
const ACTIONS = {
  add: "Add",
  cancel: "Cancel"
};

function filterCurrencies(currencies, exclude) {
  return currencies.filter(({ symbol }) => !exclude.includes(symbol));
}

const MiningAddCurrencyDialog: React.FC<Props> = ({
  open,
  onClose,
  currenciesToExclude
}): JSX.Element => {
  const {
    currencies: { mineable: mineableCurrencies }
  } = React.useContext(AppContext);
  const { minedAsset } = MiningContainer.useContainer();
  const filteredCurrencies = filterCurrencies(
    mineableCurrencies,
    currenciesToExclude
  );
  const [availableCurrencies, setAvailableCurrencies] = React.useState(
    filteredCurrencies
  );
  const [selectedCurrency, setSelectedCurrency] = React.useState(
    filteredCurrencies && filteredCurrencies[0]
  );

  React.useEffect(() => {
    const newAvailableCurrencies = filterCurrencies(
      mineableCurrencies,
      currenciesToExclude
    );

    setAvailableCurrencies(newAvailableCurrencies);
    if (!newAvailableCurrencies.includes(selectedCurrency)) {
      setSelectedCurrency(newAvailableCurrencies[0]);
    }
  }, [currenciesToExclude]);

  // React.useEffect(() => {

  // }, [availableCurrencies]);

  const handleChangeCurrency = (
    event: React.ChangeEvent<{ value: Currency }>
  ) => {
    setSelectedCurrency(event.target.value as Currency);
  };

  const handleAddCurrency = async () => {
    const result: any = await minedAsset.bind(selectedCurrency.symbol);

    if (result instanceof Error) return;

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} title={ADD_CURRENCY_DIALOG}>
      <ContentWrapper>
        <CurrenciesSelector
          onChange={handleChangeCurrency}
          selected={selectedCurrency}
          currencies={availableCurrencies}
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActionsWrapper = styled(DialogActions)`
  padding: 20px 0px;
`;
