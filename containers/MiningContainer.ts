import * as React from "react";
import { createContainer } from "unstated-next";
import format from "string-template";

import ENDPOINTS from "~/constants/endpoints";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import AsyncService from "~/services/AsyncService";
import AppContainer from "~/containers/AppContainer";

interface MinedProps {
  overviewStatistic: {
    statistic: any;
    fetch: () => Promise<any>;
  };
  arcadeMining: {
    data: any;
    fetch: () => Promise<any>;
  };
  minedAsset: {
    deposited: any;
    withdrawn: any;
    deposit: ({ asset, amount }: any) => Promise<void>;
    withdraw: ({ asset, amount }: any) => Promise<void>;
  };
  blockRewards: {
    data: any;
    fetch: () => Promise<any>;
  };
  myRewards: {
    data: any;
    fetch: () => Promise<any>;
  };
  hashBalance: {
    data: any;
    fetch: () => Promise<any>;
  };
}

function useMining(): MinedProps {
  let [statistic, setStatistic] = React.useState(null);
  let [depositedAsset, setDeposited] = React.useState(null);
  let [withdrawnAsset, setWithdrawn] = React.useState(null);
  let [arcadeMining, setArcadeMining] = React.useState(null);
  let [blockRewards, setBlockRewards] = React.useState(null);
  let [myRewards, setMyRewards] = React.useState(null);
  let [hashBalance, setHashBalance] = React.useState(null);

  const appContainer = AppContainer.useContainer();

  return {
    overviewStatistic: {
      statistic,
      fetch: async (): Promise<any> => {
        try {
          const result = await AsyncService.get(ENDPOINTS.mining.statistic);
          const data = result.data.body;
          setStatistic(data);

          return data;
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );
          throw Error(message);
        }
      }
    },
    arcadeMining: {
      data: arcadeMining,
      fetch: async (): Promise<any> => {
        try {
          const result = await AsyncService.get(ENDPOINTS.mining.arcade);
          const data = result.data.body;
          setArcadeMining(data);

          return data;
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );
          throw Error(message);
        }
      }
    },
    minedAsset: {
      deposited: depositedAsset,
      withdrawn: withdrawnAsset,
      deposit: async ({ asset, amount }): Promise<any> => {
        const mineEndpoint = format(ENDPOINTS.mining.deposit, { asset });

        try {
          const result = await AsyncService.post(mineEndpoint, { amount });
          const data = result.data.body;
          setDeposited(data);
          appContainer.notifications.addNotification(
            "Deposit successfully made",
            NOTIFICATION_TYPES.success
          );

          return data;
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );
          throw Error(message);
        }
      },
      withdraw: async ({ asset, amount }): Promise<any> => {
        const mineEndpoint = format(ENDPOINTS.mining.withdraw, { asset });

        try {
          const result = await AsyncService.post(mineEndpoint, { amount });
          const data = result.data.body;
          setWithdrawn(data);

          appContainer.notifications.addNotification(
            "Withdraw successfully made",
            NOTIFICATION_TYPES.success
          );
          return data;
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );
          throw Error(message);
        }
      }
    },
    blockRewards: {
      data: blockRewards,
      fetch: async (): Promise<any> => {
        try {
          const result = await AsyncService.get(ENDPOINTS.mining.blockRewards);
          const data = result.data.body;
          setBlockRewards(data);

          return data;
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );

          return Error(message);
        }
      }
    },
    myRewards: {
      data: myRewards,
      fetch: async (): Promise<any> => {
        try {
          const result = await AsyncService.get(ENDPOINTS.mining.myRewards);
          const data = result.data.body;
          setMyRewards(data);

          return data;
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );

          return Error(message);
        }
      }
    },
    hashBalance: {
      data: hashBalance,
      fetch: async (): Promise<any> => {
        try {
          const result = await AsyncService.get(ENDPOINTS.mining.hashBalance);
          const data = result.data.body;
          setHashBalance(data);

          return data;
        } catch ({ message }) {
          appContainer.notifications.addNotification(
            message,
            NOTIFICATION_TYPES.error
          );
          throw Error(message);
        }
      }
    }
  };
}

const MiningContainer = createContainer(useMining);

export default MiningContainer;
