import * as React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import MiningContainer from "~/containers/MiningContainer";
import AppContext from "~/containers/AppContext";
import {
  OverviewStatistic,
  TotalPoolHashrate,
  ArcadeMiningTable,
  RewardsTable,
  MiningPortal
} from "~/components/mining";

const MiningDashboard: React.FC = (): JSX.Element => {
  const { blockRewards, myRewards } = MiningContainer.useContainer();

  React.useEffect(() => {
    blockRewards.fetch();
    myRewards.fetch();
  }, []);

  return (
    <Wrapper>
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
          xs={12}
          lg={6}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          container
          item
        >
          <MiningPortal />
        </Grid>
        <Grid
          xs={12}
          lg={6}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          container
          item
        >
          <ArcadeMiningTable />
          {/* <img src="static/LogoGradient.svg" /> */}
        </Grid>

        <Grid xs={12} md={6} direction="column" container item>
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
        <Grid xs={12} md={6} direction="column" container item>
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
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default MiningDashboard;

const Wrapper = styled.div`
  margin: 0 20px 20px;

  @media screen and (max-width: ${p => p.theme.breakpoints.values.md}px) {
    margin: 0 5px;
  }

  @media screen and (max-width: ${p => p.theme.breakpoints.values.sm}px) {
    margin: 0px;
  }
`;
Wrapper;
