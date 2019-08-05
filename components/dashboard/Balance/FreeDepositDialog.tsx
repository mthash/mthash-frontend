import * as React from "react";
import styled from "styled-components";

import Dialog from "~/components/common/Dialog";
import CurrenciesSelector from "~/components/common/CurrenciesSelector";
import AppContext from "~/containers/AppContext";
import Currency from "~/models/Currency";
import TextField from "~/components/common/TextField";
import { DialogActions, Button, Divider } from "@material-ui/core";

import MiningContainer from "~/containers/MiningContainer";
import { AsyncService } from "~/services";
import ENDPOINTS from "~/constants/endpoints";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import AppContainer from "~/containers/AppContainer";

interface Props {
  open: boolean;
  onClose: () => void;
}

const FREE_DEPOSIT_TITLE = "Deposit";

const FreeDepositDialog: React.FC<Props> = ({ open, onClose }): JSX.Element => {
  const {
    currencies: { all: allCurrencies }
  } = React.useContext(AppContext);
  const { notifications } = AppContainer.useContainer();
  // const { minedAsset } = MiningContainer.useContainer();
  const [selectedCurrency, setSelectedCurrency] = React.useState(
    allCurrencies && allCurrencies[0]
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

  const handleFreeDeposit = async () => {
    try {
      const result = await AsyncService.post(ENDPOINTS.freeDeposit, {
        asset_id: selectedCurrency.id,
        amount
      });
      const data = result.data.body;

      notifications.addNotification({
        message: "Free deposit is made",
        type: NOTIFICATION_TYPES.success
      });
      // return data;
    } catch ({ message }) {
      notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error
      });
    }
    // try {
    //   const res = await minedAsset.deposit({
    //     asset: selectedCurrency.symbol,
    //     amount
    //   });
    //   onClose();
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <Dialog open={open} onClose={onClose} title={FREE_DEPOSIT_TITLE}>
      <ContentWrapper>
        <CurrenciesSelector
          onChange={handleChangeCurrency}
          selected={selectedCurrency}
          currencies={allCurrencies}
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
        <Button onClick={handleFreeDeposit}>Add</Button>
        <Button onClick={onClose}>Cancel</Button>
      </ActionsWrapper>
    </Dialog>
  );
};

export default FreeDepositDialog;

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
