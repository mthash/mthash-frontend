import * as React from "react";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import { CURRENCIES, REAL_CURRENCIES } from "~/constants/currencies";
import Wallet from "~/models/Wallet";

import SharePercentage from "./SharePercentage";
import CurrencyIcon from "~/components/common/CurrencyIcon";

const BalanceItem: React.FC<Wallet> = ({
  currency,
  balance,
  balanceUSD,
  share
}): JSX.Element => {
  const currencyParams = CURRENCIES[currency];

  return (
    <TokenListItem button>
      <ListItemIcon>{<CurrencyIcon currency={currency} />}</ListItemIcon>
      <ListItemText>
        <Grid container>
          <Grid item xs={3}>
            {currencyParams.name} ({currency})
          </Grid>
          <Grid item xs={3}>
            <SharePercentage share={share} color={currencyParams.color} />
          </Grid>
          <Grid item xs={3}>
            {balance} {currency}
          </Grid>
          <Grid item xs={3}>
            <BalanceUSD>
              {balanceUSD} {REAL_CURRENCIES.USD.currency}
            </BalanceUSD>
          </Grid>
        </Grid>
      </ListItemText>
    </TokenListItem>
  );
};

export default BalanceItem;

const TokenListItem = styled(ListItem)`
  padding: 15px;
`;

const BalanceUSD = styled.span`
  color: ${p => p.theme.palette.text.secondary};
`;
