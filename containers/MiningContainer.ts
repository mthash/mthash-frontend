import * as React from "react";
import { createContainer } from "unstated-next";
import format from "string-template";
import { findIndex, propEq, update, append, remove, isEmpty } from "ramda";

import ENDPOINTS from "~/constants/endpoints";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import OVERVIEW_CATEGORIES from "~/constants/overviewCategories";
import AsyncService from "~/services/AsyncService";
import AppContainer from "~/containers/AppContainer";
import ErrorViewer from "~/components/common/ErrorViewer";
import { PERIODS_SHORT } from "~/constants/periods";
import { useInterval } from "~/utils/useTimeout";
import { ChartPoint } from "~/models/ChartData";

interface MinedProps {
  selectedCurrency: {
    id: number;
    set: (number) => void;
  };
  selectedOverviewCategory: {
    category: string;
    set: (string) => void;
  };
  selectedOverviewPeriod: {
    period: string;
    set: (string) => void;
  };
  totalPoolHashrate: {
    data: any;
    fetch: (filter?: any) => Promise<any>;
  };
  overviewStatistic: {
    statistic: any;
    fetch: (filter?: any) => Promise<any>;
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
    bind: (asset) => Promise<void>;
    unbind: (asset) => Promise<void>;
  };
  blockRewards: {
    data: any;
    fetch: (filter?: any) => Promise<any>;
  };
  myRewards: {
    data: any;
    fetch: (filter?: any) => Promise<any>;
  };
  hashBalance: {
    data: any;
    fetch: () => Promise<any>;
  };
}

function useMining(): MinedProps {
  let [statistic, setStatistic] = React.useState(null);
  let [totalHashrateChart, setTotalHashrateChart] = React.useState({
    chart: []
  });
  let [depositedAsset, setDeposited] = React.useState(null);
  let [withdrawnAsset, setWithdrawn] = React.useState(null);
  let [arcadeMining, setArcadeMining] = React.useState([]);
  let [miningPortal, setMiningPortal] = React.useState([]);
  let [blockRewards, setBlockRewards] = React.useState(null);
  let [myRewards, setMyRewards] = React.useState(null);
  let [hashBalance, setHashBalance] = React.useState(null);
  let [selectedCurrencyId, setSelectedCurrencyId] = React.useState(null);
  let [selectedOverviewCategory, setSelectedOverviewCategory] = React.useState(
    OVERVIEW_CATEGORIES.pools.name
  );
  let [selectedPeriod, setSelectedPeriod] = React.useState(PERIODS_SHORT.d7);

  const appContainer = AppContainer.useContainer();

  React.useEffect(() => {
    fetchBlockRewards();
    fetchMyRewards();
    fetchOverviewStatistic();
  }, [selectedCurrencyId]);

  React.useEffect(() => {
    fetchTotalPoolHashrate();
  }, [selectedOverviewCategory, selectedPeriod, selectedCurrencyId]);

  // Live update emulation //
  useInterval(() => {
    fetchBlockRewards();
    fetchMyRewards();
  }, 6e4 * 10);

  useInterval(() => {
    fetchTotalPoolHashrate();
  }, 1e4);

  useInterval(() => {
    fetchOverviewStatistic();
  }, 1e4 + 1000);

  useInterval(() => {
    fetchArcadeMining();
    fetchMiningPortal();
  }, 1e4 + 2000);

  // /Live update emulation //

  const fetchOverviewStatistic = async (): Promise<any> => {
    try {
      const filter = selectedCurrencyId
        ? { filter: { asset_id: selectedCurrencyId } }
        : null;

      const result = await AsyncService.get(ENDPOINTS.mining.statistic, filter);
      const data = result.data.body;
      setStatistic(data);

      return data;
    } catch ({ message }) {
      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error
      });
      return Error(message);
    }
  };

  const fetchTotalPoolHashrate = async (): Promise<any> => {
    try {
      const filter = {
        filter: {
          period: selectedPeriod,
          ...(selectedCurrencyId && { asset_id: selectedCurrencyId })
        }
      };
      const url = format(ENDPOINTS.mining.chart, {
        category: selectedOverviewCategory
      });

      const result = await AsyncService.get(url, filter);
      const data = result.data.body;
      setTotalHashrateChart(data);

      return data;
    } catch ({ message }) {
      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error
      });
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
      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error
      });
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
      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error
      });
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

      appContainer.notifications.addNotification({
        message: "Deposit successfully made",
        type: NOTIFICATION_TYPES.success
      });

      return data;
    } catch (err) {
      const { message } = err;

      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error,
        details: err.errors,
        Renderer: ErrorViewer
      });
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

      appContainer.notifications.addNotification({
        message: "Withdraw successfully made",
        type: NOTIFICATION_TYPES.success
      });
      return data;
    } catch (err) {
      const { message } = err;

      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error,
        details: err.errors,
        Renderer: ErrorViewer
      });
      return Error(message);
    }
  };

  const bindAssetRequest = async (asset): Promise<any> => {
    const mineEndpoint = format(ENDPOINTS.mining.bindAsset, { asset });

    try {
      const result = await AsyncService.post(mineEndpoint);
      const data = result.data.body;

      fetchMiningPortal();
      fetchArcadeMining();
      fetchOverviewStatistic();
      fetchTotalPoolHashrate();
    } catch ({ message }) {
      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error
      });
      return Error(message);
    }
  };

  const unbindAssetRequest = async (asset): Promise<any> => {
    const mineEndpoint = format(ENDPOINTS.mining.bindAsset, { asset });

    try {
      const result = await AsyncService.delete(mineEndpoint);
      const data = result.data.body;

      fetchMiningPortal();
      fetchArcadeMining();
      fetchOverviewStatistic();
      fetchTotalPoolHashrate();
    } catch ({ message }) {
      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error
      });
      return Error(message);
    }
  };

  const fetchBlockRewards = async (): Promise<any> => {
    try {
      const filter = selectedCurrencyId
        ? { filter: { asset_id: selectedCurrencyId } }
        : null;

      const result = await AsyncService.get(
        ENDPOINTS.mining.blockRewards,
        filter
      );
      const data = result.data.body;
      setBlockRewards(data);

      return data;
    } catch ({ message }) {
      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error
      });

      return Error(message);
    }
  };

  const fetchMyRewards = async (): Promise<any> => {
    try {
      const filter = selectedCurrencyId
        ? { filter: { asset_id: selectedCurrencyId } }
        : null;
      const result = await AsyncService.get(ENDPOINTS.mining.myRewards, filter);
      const data = result.data.body;
      setMyRewards(data);

      return data;
    } catch ({ message }) {
      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error
      });

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
      appContainer.notifications.addNotification({
        message,
        type: NOTIFICATION_TYPES.error
      });
      return Error(message);
    }
  };

  return {
    selectedCurrency: {
      id: selectedCurrencyId,
      set: id => setSelectedCurrencyId(id)
    },
    selectedOverviewCategory: {
      category: selectedOverviewCategory,
      set: category => setSelectedOverviewCategory(category)
    },
    selectedOverviewPeriod: {
      period: selectedPeriod,
      set: period => setSelectedPeriod(period)
    },
    totalPoolHashrate: {
      data: totalHashrateChart,
      fetch: fetchTotalPoolHashrate
    },
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
      withdraw: withdrawRequest,
      bind: bindAssetRequest,
      unbind: unbindAssetRequest
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
