import * as React from "react";
import styled from "styled-components";
import Paper from "~/components/common/Paper";

import TotalPoolHeader from "./TotalPoolHeader";
import MiningContainer from "~/containers/MiningContainer";
import TotalPoolHashrateChart from "./TotalPoolHashrateChart";
import { PERIODS_SHORT } from "~/constants/periods";

const CHART_PRECISION_BY_PERIOD = {
  [PERIODS_SHORT.h1]: {
    xFormat: "time:%I %M",
    precision: "minute",
    axisBottom: {
      format: "%I:%M %p",
      tickValues: "every 30 minutes"
    }
  },
  [PERIODS_SHORT.h3]: {
    xFormat: "time:%I %M",
    precision: "hour",
    axisBottom: {
      format: "%I:%M %p",
      tickValues: "every 1 hour"
    }
  },
  [PERIODS_SHORT.d1]: {
    xFormat: "time:%I %M",
    precision: "hour",
    axisBottom: {
      format: "%I:%M %p",
      tickValues: "every 1 hour"
    }
  },
  [PERIODS_SHORT.d7]: {
    xFormat: "time:%I %M",
    precision: "hour",
    axisBottom: {
      format: "%d/%m %I:%M %p",
      tickValues: "every 6 hour"
    }
  },
  [PERIODS_SHORT.m1]: {
    xFormat: "time:%d %m",
    precision: "day",
    axisBottom: {
      format: "%d/%m",
      tickValues: "every 12 hours"
    }
  },
  [PERIODS_SHORT.all]: {
    xFormat: "time:%d %m",
    precision: "day",
    axisBottom: {
      format: "%d/%m",
      tickValues: "every 1 day"
    }
  }
};

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
      <TotalPoolHashrateChart
        data={totalPoolHashrate.chart}
        {...CHART_PRECISION_BY_PERIOD[selectedOverviewPeriod.period]}
      />
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
