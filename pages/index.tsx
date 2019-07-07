import * as React from "react";
import Grid from "@material-ui/core/Grid";

import { withAuthSync } from "~/utils/auth";
import { DashboardLayout } from "~/components/layouts";
import TotalHashrate from "~/components/dashboard/TotalHashrate";
import Balance from "~/components/dashboard/Balance";
import DashboardContainer from "~/containers/DashboardContainer";

const Home: React.FC = (): JSX.Element => {
  return (
    <DashboardLayout>
      <DashboardContainer.Provider>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TotalHashrate />
          </Grid>
          <Grid item xs={12}>
            <Balance />
          </Grid>
        </Grid>
      </DashboardContainer.Provider>
    </DashboardLayout>
  );
};

export default withAuthSync(Home);
