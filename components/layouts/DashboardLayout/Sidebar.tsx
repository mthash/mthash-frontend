import * as React from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Analytics from "../../../static/icons/Analytics.svg";
import Arcade from "../../../static/icons/Arcade.svg";
import FinancialHistory from "../../../static/icons/FinancialHistory.svg";
import Main from "../../../static/icons/Main.svg";
import Mining from "../../../static/icons/Mining.svg";
import Payments from "../../../static/icons/Payments.svg";
import Trade from "../../../static/icons/Trade.svg";
import Wallet from "../../../static/icons/Wallet.svg";

const MENU_ITEMS = {
  main: {
    text: "Home",
    Icon: Main
  },
  mining: {
    text: "Mining",
    Icon: Mining
  },
  wallet: {
    text: "Wallet",
    Icon: Wallet
  },
  arcade: {
    text: "Arcade",
    Icon: Arcade
  },
  trade: {
    text: "Trade",
    Icon: Trade
  },
  analytics: {
    text: "Analytics",
    Icon: Analytics
  },
  financialHistory: {
    text: "Financial History",
    Icon: FinancialHistory
  },
  payments: {
    text: "Payments",
    Icon: Payments
  }
};

interface MenuItemProps {
  text: string;
  Icon: React.FC;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, Icon }): JSX.Element => {
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <Tooltip title={text} placement="right">
      <StyledListItem button>
        <Icon />
      </StyledListItem>
    </Tooltip>
  );
};

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <StyledDrawer variant="permanent">
      <List>
        <MenuItem {...MENU_ITEMS.main} />
        <MenuItem {...MENU_ITEMS.mining} />
        <MenuItem {...MENU_ITEMS.wallet} />
        <MenuItem {...MENU_ITEMS.arcade} />
        <MenuItem {...MENU_ITEMS.trade} />
        <MenuItem {...MENU_ITEMS.analytics} />
        <MenuItem {...MENU_ITEMS.financialHistory} />
        <MenuItem {...MENU_ITEMS.payments} />
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;

const StyledDrawer = styled(Drawer)`
  width: ${p => p.theme.layouts.dashboard.sidebar.minWidth}px;

  .MuiDrawer-paper {
    width: ${p => p.theme.layouts.dashboard.sidebar.minWidth}px;
    padding-top: ${p => p.theme.layouts.dashboard.headerHeight}px;
  }
`;

const StyledListItem = styled(ListItem)`
  margin: 4px auto;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  border-radius: ${p => p.theme.rounding.md}px;
  color: ${p => p.theme.palette.text.secondary};

  &&:hover {
    color: ${p => p.theme.palette.text.primary};
    background-color: ${p => p.theme.palette.background.hightlight};
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;
