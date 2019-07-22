import * as React from "react";
import { createContainer } from "unstated-next";

import ENDPOINTS from "~/constants/endpoints";
import AsyncService from "~/services/AsyncService";

function useMining() {
  let [statistic, setStatistic] = React.useState(null);

  return {
    overviewStatistic: {
      statistic,
      fetch: async () => {
        const result = await AsyncService.get(ENDPOINTS.mining.statistic);
        setStatistic(result.data.body);
      }
    }
  };
}

const MiningContainer = createContainer(useMining);

export default MiningContainer;
