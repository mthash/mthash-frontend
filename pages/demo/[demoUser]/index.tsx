import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import format from "string-template";

import ENDPOINTS from "~/constants/endpoints";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
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
import AppContainer from "~/containers/AppContainer";
import { AsyncService } from "~/services";
import { setToken } from "~/utils/auth";

const DemoDashboard: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { demoUser } = router.query;
  const { user, notifications } = AppContainer.useContainer();
  const [authorized, setAuthorized] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const authEndpoint = format(ENDPOINTS.demo.login, {
          identifier: demoUser
        });
        const result = await AsyncService.post(authEndpoint);
        const token = result.data.body;
        setToken(token);
        user.refresh();
        setAuthorized(true);
      } catch ({ message }) {
        notifications.addNotification({
          message,
          type: NOTIFICATION_TYPES.error
        });
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout namespace={`/demo/${demoUser}`} isDemo>
      {authorized && (
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
      )}
    </DashboardLayout>
  );
};

export default DemoDashboard;
