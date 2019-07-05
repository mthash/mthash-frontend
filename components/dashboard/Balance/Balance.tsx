import * as React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// import { TOKENS } from "~/constants/token";

import Bitcoin from "../../../static/tokens/Bitcoin.svg";
import Litecoin from "../../../static/tokens/Litecoin.svg";

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
  }
};

interface BalanceItemProps {
  Icon: React.FC;
  name: string;
  alias: string;
}

const BalanceItem: React.FC<BalanceItemProps> = ({
  Icon,
  alias,
  name
}): JSX.Element => {
  return (
    <ListItem>
      <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
      <ListItemText>
        {name} ({alias})
      </ListItemText>
    </ListItem>
  );
};

const Balance: React.FC = (): JSX.Element => {
  return (
    <Paper>
      <h3>Balance</h3>
      <List>
        {Object.values(TOKENS).map(token => (
          <BalanceItem key={token.alias} {...token} />
        ))}
      </List>
    </Paper>
  );
};

export default Balance;
