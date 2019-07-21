import * as React from "react";
import { createContainer } from "unstated-next";
import cookie from "js-cookie";
import jwt_decode from "jwt-decode";

import ENDPOINTS from "~/constants/endpoints";
import AsyncService from "~/services/AsyncService";

function useDashboard() {
  let [wallets, setWallets] = React.useState([]);

  return {
    balance: {
      wallets,
      fetch: async () => {
        const result = await AsyncService.get(ENDPOINTS.wallets);
        setWallets(result.data.body);
      }
    }
  };
}

const DashboardContainer = createContainer(useDashboard);

export default DashboardContainer;
