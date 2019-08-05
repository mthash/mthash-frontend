import * as React from "react";
import styled from "styled-components";
import Paper from "~/components/common/Paper";

import data from "~/_mocks_/totalPoolHashrate.json";
import TotalPoolHeader from "./TotalPoolHeader";
import MiningContainer from "~/containers/MiningContainer";
import TotalPoolHashrateChart from "./TotalPoolHashrateChart";

const TotalPoolHashrate: React.FC = (): JSX.Element => {
  const {
    selectedOverviewPeriod,
    totalPoolHashrate
  } = MiningContainer.useContainer();

  React.useEffect(() => {
    totalPoolHashrate.fetch();
  }, []);

  return (
    <Wrapper>
      <TotalPoolHeader />
      <TotalPoolHashrateChart data={data} />
    </Wrapper>
  );
};

export default TotalPoolHashrate;

const Wrapper = styled(Paper)`
  width: 100%;
  height: 55vh;
  background-color: ${p => p.theme.palette.background.paperDarkest};
  padding: 20px;
  margin: 30px 0;
`;
