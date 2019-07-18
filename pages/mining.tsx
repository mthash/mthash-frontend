import * as React from "react";
import Grid from "@material-ui/core/Grid";

import { withAuthSync } from "~/utils/auth";
import { MiningLayout } from "~/components/layouts";
import {
  OverviewStatistic,
  TotalPoolHashrate,
  RewardsTable
} from "~/components/mining";

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
      <Grid container spacing={5}>
        <Grid
          xs={7}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          container
          item
        >
          <img src="static/ArcadeMining.svg" />
          <img src="static/MiningPortal.svg" />
          <img src="static/LogoGradient.svg" />
        </Grid>
        <Grid
          xs={5}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          container
          item
        >
          <RewardsTable picture="static/BlockRewards.svg" />
          <RewardsTable picture="static/MyRewards.svg" />
        </Grid>
      </Grid>
    </MiningLayout>
  );
};

export default withAuthSync(Mining);
