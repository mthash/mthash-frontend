import * as React from "react";

import { MiningLayout } from "~/components/layouts";

import ENDPOINTS from "~/constants/endpoints";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import MiningContainer from "~/containers/MiningContainer";
import { MiningDashboard } from "~/components/mining";
import { AsyncService } from "~/services";
import { setToken } from "~/utils/auth";
import AppContainer from "~/containers/AppContainer";

const MiningDemo: React.FC = (): JSX.Element => {
  const { user, notifications } = AppContainer.useContainer();
  const [authorized, setAuthorized] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await AsyncService.post(ENDPOINTS.auth.demo);
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
    <MiningLayout hasNavigation={false}>
      {authorized && (
        <MiningContainer.Provider>
          <MiningDashboard />
        </MiningContainer.Provider>
      )}
    </MiningLayout>
  );
};

export default MiningDemo;
