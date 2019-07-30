import * as React from "react";
import Grid from "@material-ui/core/Grid";

import MiningContainer from "~/containers/MiningContainer";
import AppContext from "~/containers/AppContext";
import {
  OverviewStatistic,
  TotalPoolHashrateChart,
  ArcadeMiningTable,
  RewardsTable,
  MiningPortal
} from "~/components/mining";

import blockRewardsMock from "~/_mocks_/blockRewars.json";
import myRewardsMock from "~/_mocks_/myRewards.json";

const MiningDashboard: React.FC = (): JSX.Element => {
  const { blockRewards, myRewards } = MiningContainer.useContainer();

  React.useEffect(() => {
    blockRewards.fetch();
    myRewards.fetch();
  }, []);

  return (
    <>
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
                dataKey: "fee"
              },
              {
                name: "Block Hash",
                dataKey: "hash",
                options: {
                  withTooltip: true
                }
              }
            ]}
            data={blockRewards.data}
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
                dataKey: "percent_reward"
              },
              {
                name: "Reward",
                dataKey: "amount_reward"
              },
              {
                name: "Fees",
                dataKey: "fee"
              },
              {
                name: "Earnings",
                dataKey: "earnings"
              }
            ]}
            data={myRewards.data}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MiningDashboard;
