import * as React from "react";
import Grid from "@material-ui/core/Grid";

import { withAuthSync } from "~/utils/auth";
import { MiningLayout } from "~/components/layouts";
import {
  OverviewStatistic,
  TotalPoolHashrateChart,
  ArcadeMiningTable,
  RewardsTable,
  MiningPortal
} from "~/components/mining";

import blockRewards from "~/_mocks_/blockRewars.json";
import myRewards from "~/_mocks_/myRewards.json";

const Mining: React.FC = (): JSX.Element => {
  return (
    <MiningLayout>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <OverviewStatistic />
        </Grid>
        <Grid item xs={12}>
          <TotalPoolHashrateChart />
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
          <ArcadeMiningTable />
          <MiningPortal />
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
          <RewardsTable
            picture="static/mining/BlockRewards.svg"
            columns={[
              {
                name: "Age",
                dataKey: "age"
              },
              {
                name: "Coin",
                dataKey: "coin"
              },
              {
                name: "Height",
                dataKey: "height"
              },
              {
                name: "Reward",
                dataKey: "reward"
              },
              {
                name: "Tx Fee",
                dataKey: "txFee"
              },
              {
                name: "Block Hash",
                dataKey: "blockHash"
              }
            ]}
            data={blockRewards}
          />
          <RewardsTable
            picture="static/mining/MyRewards.svg"
            columns={[
              {
                name: "Age",
                dataKey: "age"
              },
              {
                name: "Coin",
                dataKey: "coin"
              },
              {
                name: "% Block Reward",
                dataKey: "blockReward"
              },
              {
                name: "Reward",
                dataKey: "reward"
              },
              {
                name: "Fees",
                dataKey: "fees"
              },
              {
                name: "Earnings",
                dataKey: "earnings"
              }
            ]}
            data={myRewards}
          />
        </Grid>
      </Grid>
    </MiningLayout>
  );
};

export default withAuthSync(Mining);
