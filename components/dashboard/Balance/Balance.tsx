import * as React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// import { TOKENS } from "~/constants/token";

import WidgetHeader from "~/components/dashboard/common/WidgetHeader";

import Bitcoin from "../../../static/currencies/Bitcoin.svg";
import Litecoin from "../../../static/currencies/Litecoin.svg";
import BitcoinCash from "../../../static/currencies/BitcoinCash.svg";
import Ethereum from "../../../static/currencies/Ethereum.svg";
import Monero from "../../../static/currencies/Monero.svg";

import DashboardContainer from "~/containers/DashboardContainer";

export const TOKENS = {
  bitcoin: {
    name: "Bitcoin",
    alias: "BTC",
    Icon: Bitcoin
  },
  litecoin: {
    name: "Litecoin",
    alias: "LTC",
    Icon: Litecoin
  },
  bitcoinCash: {
    name: "Bitcoin Cash",
    alias: "BCH",
    Icon: BitcoinCash
  },
  ethereum: {
    name: "Enthereum",
    alias: "ETC",
    Icon: Ethereum
  },
  monero: {
    name: "Monero",
    alias: "XMR",
    Icon: Monero
  }
};
const BALANCE_CAPTION = "Balance";
const WALLET_ACTION = "Wallet";

const BalanceItem: React.FC<BalanceItemProps> = ({
  Icon,
  alias,
  name
}): JSX.Element => {
  return (
    <TokenListItem>
      <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
      <ListItemText>
        <Grid container>
          <Grid item xs={3}>
            {name} ({alias})
          </Grid>
          <Grid item xs={3}>
            123456
          </Grid>
          <Grid item xs={3}>
            123456
          </Grid>
          <Grid item xs={3}>
            123456
          </Grid>
        </Grid>
      </ListItemText>
    </TokenListItem>
  );
};

const Balance: React.FC = (): JSX.Element => {
  const tokens = Object.values(TOKENS);
  const dashboard = DashboardContainer.useContainer();

  React.useEffect(() => {
    dashboard.balance.fetch();
  }, []);

  console.log(dashboard.balance.wallets);

  return (
    <Paper>
      <WidgetHeader
        caption={BALANCE_CAPTION}
        actions={<Button>{WALLET_ACTION}</Button>}
      />
      <TokensList>
        {tokens.map((token, index) => (
          <React.Fragment key={token.alias}>
            <BalanceItem {...token} />
            {index !== tokens.length - 1 && <Divider light />}
          </React.Fragment>
        ))}
      </TokensList>
    </Paper>
  );
};

export default Balance;

const TokensList = styled(List)`
  padding: 15px;
`;

const TokenListItem = styled(ListItem)`
  padding: 10px 0;
`;
