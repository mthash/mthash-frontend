import * as React from "react";
import Grid from "@material-ui/core/Grid";

import { withAuthSync } from "~/utils/auth";
import { DashboardLayout } from "~/components/layouts";
import { TotalHashrateChart, Balance } from "~/components/dashboard";
import DashboardContainer from "~/containers/DashboardContainer";

import totalHashrateMock from "~/_mocks_/totalHashrate.json";
import totalHashrateStatisticMock from "~/_mocks_/totalHashrateStatistic.json";
import totalHashrateMock2 from "~/_mocks_/totalHashrate2.json";
import totalHashrateStatisticMock2 from "~/_mocks_/totalHashrateStatistic2.json";

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <DashboardLayout>
      <DashboardContainer.Provider>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TotalHashrateChart
              chartData={totalHashrateMock}
              statistic={totalHashrateStatisticMock}
              chartColors={["#AAFFA9", "#B2FEFA"]}
            />
          </Grid>
          <Grid item xs={12}>
            <TotalHashrateChart
              chartData={totalHashrateMock2}
              statistic={totalHashrateStatisticMock2}
              chartColors={["#F8B500", "#EF32D9"]}
            />
          </Grid>
          <Grid item xs={12}>
            <Balance />
          </Grid>
        </Grid>
      </DashboardContainer.Provider>
    </DashboardLayout>
  );
};

export default withAuthSync(Dashboard);
