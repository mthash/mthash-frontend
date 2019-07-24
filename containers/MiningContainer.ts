import * as React from "react";
import { createContainer } from "unstated-next";
import format from "string-template";

import ENDPOINTS from "~/constants/endpoints";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import AsyncService from "~/services/AsyncService";
import AppContainer from "~/containers/AppContainer";

function useMining() {
  let [statistic, setStatistic] = React.useState(null);
  let [depositedAsset, setDeposited] = React.useState(null);
  let [withdrawnAsset, setWithdrawn] = React.useState(null);
  let [blockRewards, setBlockRewards] = React.useState(null);

  const appContainer = AppContainer.useContainer();

  return {
    overviewStatistic: {
      statistic,
      fetch: async () => {
        try {
          const result = await AsyncService.get(ENDPOINTS.mining.statistic);
          setStatistic(result.data.body);
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );
        }
      }
    },
    minedAsset: {
      deposited: depositedAsset,
      withdrawn: withdrawnAsset,
      deposit: async ({ asset, amount }) => {
        const mineEndpoint = format(ENDPOINTS.mining.deposit, { asset });

        try {
          const result = await AsyncService.post(mineEndpoint, { amount });
          setDeposited(result.data.body);
          appContainer.notifications.addNotification(
            "Deposit successfully made",
            NOTIFICATION_TYPES.success
          );
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );
        }
      },
      withdraw: async ({ asset, amount }) => {
        const mineEndpoint = format(ENDPOINTS.mining.withdraw, { asset });

        try {
          const result = await AsyncService.post(mineEndpoint, { amount });
          setWithdrawn(result.data.body);

          appContainer.notifications.addNotification(
            "Withdraw successfully made",
            NOTIFICATION_TYPES.success
          );
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );
        }
      }
    },
    blockRewards: {
      data: blockRewards,
      fetch: async () => {
        try {
          const result = await AsyncService.get(ENDPOINTS.mining.blockRewards);
          setBlockRewards(result.data.body);
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );
        }
      }
    }
  };
}

const MiningContainer = createContainer(useMining);

export default MiningContainer;
