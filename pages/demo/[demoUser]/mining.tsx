import * as React from "react";
import { useRouter } from "next/router";
import format from "string-template";

import ENDPOINTS from "~/constants/endpoints";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import { setToken } from "~/utils/auth";
import { MiningLayout } from "~/components/layouts";

import MiningContainer from "~/containers/MiningContainer";
import { MiningDashboard } from "~/components/mining";
import AppContainer from "~/containers/AppContainer";
import AsyncService from "~/services/AsyncService";

const Mining: React.FC = (): JSX.Element => {
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
    <MiningLayout namespace={`/demo/${demoUser}`}>
      {authorized && (
        <MiningContainer.Provider>
          <MiningDashboard />
        </MiningContainer.Provider>
      )}
    </MiningLayout>
  );
};

export default Mining;
