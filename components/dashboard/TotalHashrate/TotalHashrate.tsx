import * as React from "react";
import styled from "styled-components";

import TotalHashrateChart from "~/components/dashboard/TotalHashrateChart";

import totalHashrateMock from "~/_mocks_/totalHashrate.json";
import totalHashrateStatisticMock from "~/_mocks_/totalHashrateStatistic.json";
import totalHashrateMock2 from "~/_mocks_/totalHashrate2.json";
import totalHashrateStatisticMock2 from "~/_mocks_/totalHashrateStatistic2.json";
import TotalHashrateTabs from "./TotalHashrateTabs";

const TABS = {
  mining: {
    id: 11,
    caption: "Mining"
  },
  exchange: {
    id: 22,
    caption: "Exchange"
  }
};

const TotalHashrate: React.FC = (): JSX.Element => {
  const miningTab = TABS.mining;
  const exchangeTab = TABS.exchange;
  const [selectedTab, setSeletedTab] = React.useState(miningTab.id);

  const handleSelectedTab = (event: React.ChangeEvent<{}>, newId: number) => {
    setSeletedTab(newId);
  };

  return (
    <>
      <TotalHashrateTabs
        tabs={[miningTab, exchangeTab]}
        selected={selectedTab}
        onChange={handleSelectedTab}
      />
      {selectedTab === miningTab.id && (
        <TotalHashrateChart
          chartData={totalHashrateMock}
          statistic={totalHashrateStatisticMock}
          chartColors={["#AAFFA9", "#B2FEFA"]}
        />
      )}
      {selectedTab === exchangeTab.id && (
        <TotalHashrateChart
          chartData={totalHashrateMock2}
          statistic={totalHashrateStatisticMock2}
          chartColors={["#F8B500", "#EF32D9"]}
        />
      )}
    </>
  );
};

export default TotalHashrate;
