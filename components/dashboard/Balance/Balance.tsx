import * as React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

// import { TOKENS } from "~/constants/token";

import WidgetHeader from "~/components/dashboard/common/WidgetHeader";
import Paper from "~/components/common/Paper";
import DashboardContainer from "~/containers/DashboardContainer";

import BalanceItem from "./BalanceItem";

import balanceMock from "~/_mocks_/balance.json";
import Wallet from "~/models/Wallet";

import FreeDepositDialog from "./FreeDepositDialog";

const BALANCE_CAPTION: string = "Balance";
const WALLET_ACTION: string = "Wallet";

const Balance: React.FC = (): JSX.Element => {
  const dashboard = DashboardContainer.useContainer();
  const [dialogOpened, setDialogOpened] = React.useState(false);
  // TODO: using mocks for a while
  const wallets = balanceMock; //dashboard.balance.wallets;

  React.useEffect(() => {
    dashboard.balance.fetch();
  }, []);

  const handleOpenFreeDepositDialog = () => {
    setDialogOpened(true);
  };

  const handleDialogClose = () => {
    setDialogOpened(false);
  };

  return (
    <Paper>
      <WidgetHeader
        caption={BALANCE_CAPTION}
        actions={
          <>
            <Button onClick={handleOpenFreeDepositDialog}>+</Button>
            <Button>{WALLET_ACTION}</Button>
          </>
        }
      />
      <TokensList>
        {wallets.map((wallet: Wallet, index: number) => (
          <React.Fragment key={wallet.id}>
            <BalanceItem {...wallet} />
            {index !== wallets.length - 1 && <StyledDivider />}
          </React.Fragment>
        ))}
      </TokensList>
      <FreeDepositDialog open={dialogOpened} onClose={handleDialogClose} />
    </Paper>
  );
};

export default Balance;

const TokensList = styled(List)`
  padding: 15px;
`;

const StyledDivider = styled(Divider)`
  background-color: ${p => p.theme.palette.background.divider};
`;
