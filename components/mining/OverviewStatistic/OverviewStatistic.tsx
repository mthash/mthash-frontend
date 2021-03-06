import * as React from "react";
import styled, { css } from "styled-components";

import MiningStatistic from "../../../static/mining/MiningStatistic.svg";

import MiningContainer from "~/containers/MiningContainer";
import OverviewStatisticList from "./OverviewStatisticList";

const OverviewStatistic: React.FC = (): JSX.Element => {
  const { selectedOverviewCategory } = MiningContainer.useContainer();
  const mining = MiningContainer.useContainer();
  const overviewStatistic = mining.overviewStatistic.statistic;

  React.useEffect(() => {
    mining.overviewStatistic.fetch();
  }, []);

  const handleSelect = id => {
    selectedOverviewCategory.set(id);
  };

  return (
    <Wrapper>
      <StatisticLogo />
      <OverviewStatisticList
        onSelect={handleSelect}
        selected={selectedOverviewCategory.category}
        overviewStatistic={overviewStatistic}
      />
    </Wrapper>
  );
};

export default OverviewStatistic;

const Wrapper = styled.div`
  margin: 0 100px;

  @media screen and (max-width: 1210px) {
    margin: 0px;
  }
`;

const StatisticLogo = styled(MiningStatistic)`
  margin: 20px 0;
`;
