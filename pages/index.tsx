import * as React from "react";
import Grid from "@material-ui/core/Grid";

import { withAuthSync } from "~/utils/auth";
import { DashboardLayout } from "~/components/layouts";
import Balance from "~/components/dashboard/Balance";
import DashboardContainer from "~/containers/DashboardContainer";
import TotalHashrate from "~/components/dashboard/TotalHashrate";
import MiningPowerChart from "~/components/dashboard/MiningPowerChart";
import MiningIncomeChart from "~/components/dashboard/MiningIncomeChart";
import DiversityChart from "~/components/dashboard/DiversityChart";
import MiningPayoutChart from "~/components/dashboard/MiningPayoutChart";
import WeeklyActivity from "~/components/dashboard/WeeklyActivity";
import WeeklyActivityChart from "~/components/dashboard/WeeklyActivity";

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <DashboardLayout>
      <DashboardContainer.Provider>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TotalHashrate />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={6}>
            <MiningPowerChart />
          </Grid>
          <Grid item xs={6}>
            <Balance />
          </Grid>
          <Grid item xs={6}>
            <MiningIncomeChart />
          </Grid>
          <Grid item xs={6}>
            <DiversityChart />
          </Grid>
          <Grid item xs={6}>
            <MiningPayoutChart />
          </Grid>
          <Grid item xs={6}>
            <WeeklyActivityChart />
          </Grid>
        </Grid>
      </DashboardContainer.Provider>
    </DashboardLayout>
  );
};

export default withAuthSync(Dashboard);
