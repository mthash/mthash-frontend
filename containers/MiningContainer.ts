import * as React from "react";
import { createContainer } from "unstated-next";
import format from "string-template";
import { findIndex, propEq, update, append, remove, isEmpty } from "ramda";

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
  miningPortal: {
    data: any;
    fetch: () => Promise<any>;
  };
  minedAsset: {
    deposited: any;
    withdrawn: any;
    deposit: ({ asset, amount }: any) => Promise<void>;
    withdraw: ({ asset }: any) => Promise<void>;
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
  let [arcadeMining, setArcadeMining] = React.useState([]);
  let [miningPortal, setMiningPortal] = React.useState([]);
  let [blockRewards, setBlockRewards] = React.useState(null);
  let [myRewards, setMyRewards] = React.useState(null);
  let [hashBalance, setHashBalance] = React.useState(null);

  const appContainer = AppContainer.useContainer();

  const fetchOverviewStatistic = async (): Promise<any> => {
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
      return Error(message);
    }
  };

  const fetchMiningPortal = async (): Promise<any> => {
    try {
      const result = await AsyncService.get(ENDPOINTS.mining.portal);
      const data = result.data.body;

      setMiningPortal(data);

      return data;
    } catch ({ message }) {
      appContainer.notifications.addNotification(
        message,
        NOTIFICATION_TYPES.error
      );
      return Error(message);
    }
  };

  const fetchArcadeMining = async (): Promise<any> => {
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
      return Error(message);
    }
  };

  const depositRequest = async ({ asset, amount = null }): Promise<any> => {
    const mineEndpoint = format(ENDPOINTS.mining.deposit, { asset });

    try {
      const result = await AsyncService.post(mineEndpoint, { amount });
      const data = result.data.body;

      if (data) {
        const miningPortalData = (() => {
          const foundIndex = findIndex(propEq("id", data.id))(miningPortal);

          if (~foundIndex) {
            if (!isEmpty(miningPortal)) {
              return update(foundIndex, data, miningPortal);
            } else {
              return [data];
            }
          } else {
            return append(data, miningPortal);
          }
        })();

        setMiningPortal(miningPortalData);
      }

      setDeposited(data);
      fetchBalance();
      fetchArcadeMining();

      appContainer.notifications.addNotification(
        "Deposit successfully made",
        NOTIFICATION_TYPES.success
      );

      return data;
    } catch (err) {
      const { message } = err;

      console.log(err);

      appContainer.notifications.addNotification(
        message,
        NOTIFICATION_TYPES.error
      );
      return Error(message);
    }
  };

  const withdrawRequest = async ({ asset, amount = null }): Promise<any> => {
    const mineEndpoint = format(ENDPOINTS.mining.withdraw, { asset });

    try {
      const result = await AsyncService.post(mineEndpoint, { amount });
      const data = result.data.body;

      const miningPortalData = (() => {
        if (data && !isEmpty(data)) {
          const foundIndex = findIndex(propEq("id", data.id))(miningPortal);
          return update(foundIndex, data, miningPortal);
        } else {
          const foundIndex = findIndex(propEq("currency", asset))(miningPortal);
          return remove(foundIndex, 1, miningPortal);
        }
      })();

      setMiningPortal(miningPortalData);
      setWithdrawn(data);
      fetchBalance();
      fetchArcadeMining();

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
      return Error(message);
    }
  };

  const fetchBlockRewards = async (): Promise<any> => {
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
  };

  const fetchMyRewards = async (): Promise<any> => {
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
  };

  const fetchBalance = async (): Promise<any> => {
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
      return Error(message);
    }
  };

  return {
    overviewStatistic: {
      statistic,
      fetch: fetchOverviewStatistic
    },
    arcadeMining: {
      data: arcadeMining,
      fetch: fetchArcadeMining
    },
    miningPortal: {
      data: miningPortal,
      fetch: fetchMiningPortal
    },
    minedAsset: {
      deposited: depositedAsset,
      withdrawn: withdrawnAsset,
      deposit: depositRequest,
      withdraw: withdrawRequest
    },
    blockRewards: {
      data: blockRewards,
      fetch: fetchBlockRewards
    },
    myRewards: {
      data: myRewards,
      fetch: fetchMyRewards
    },
    hashBalance: {
      data: hashBalance,
      fetch: fetchBalance
    }
  };
}

const MiningContainer = createContainer(useMining);

export default MiningContainer;
