import * as React from "react";
import Grid from "@material-ui/core/Grid";

import { withAuthSync } from "~/utils/auth";
import { MiningLayout } from "~/components/layouts";
import { OverviewStatistic, TotalPoolHashrate } from "~/components/mining";

const Mining: React.FC = (): JSX.Element => {
  return (
    <MiningLayout>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <OverviewStatistic />
        </Grid>
        <Grid item xs={12}>
          <TotalPoolHashrate />
        </Grid>
      </Grid>
    </MiningLayout>
  );
};

export default withAuthSync(Mining);
