import * as React from "react";
import { createContainer } from "unstated-next";
import format from "string-template";

import ENDPOINTS from "~/constants/endpoints";
import AsyncService from "~/services/AsyncService";

function useMining() {
  let [statistic, setStatistic] = React.useState(null);
  let [depositedAsset, setDeposited] = React.useState(null);
  let [withdrawnAsset, setWithdrawn] = React.useState(null);

  return {
    overviewStatistic: {
      statistic,
      fetch: async () => {
        const result = await AsyncService.get(ENDPOINTS.mining.statistic);
        setStatistic(result.data.body);
      }
    },
    minedAsset: {
      deposited: depositedAsset,
      withdrawn: withdrawnAsset,
      deposit: async ({ asset, amount }) => {
        const mineEndpoint = format(ENDPOINTS.mining.deposit, { asset });

        const result = await AsyncService.post(mineEndpoint, { amount });
        setDeposited(result.data.body);
      },
      withdraw: async asset => {
        const mineEndpoint = format(ENDPOINTS.mining.withdraw, { asset });

        const result = await AsyncService.post(mineEndpoint);
        setWithdrawn(result.data.body);
      }
    }
  };
}

const MiningContainer = createContainer(useMining);

export default MiningContainer;
