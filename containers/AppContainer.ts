import * as React from "react";
import { createContainer } from "unstated-next";
import cookie from "js-cookie";
import jwtDecode from "jwt-decode";

import User from "~/models/User";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import AsyncService from "~/services/AsyncService";
import NotificationType from "~/models/types/NotificationType";
import { getToken } from "~/utils/auth";
import ENDPOINTS from "~/constants/endpoints";

interface AddNotificationArgs {
  message: string;
  type: NotificationType;
  details?: any;
  Renderer?: any;
}

interface AppProps {
  user: {
    data: User;
    refresh: () => void;
  };
  demoUsers: {
    data: any[];
    fetch: () => void;
  };
  notifications: {
    notification: any;
    addNotification: (AddNotificationArgs) => void;
  };
}

function readUser() {
  const token: string = getToken();
  return token ? jwtDecode(token) : { name: "" };
}

function useApp(): AppProps {
  let [user, setUser] = React.useState(readUser());
  let [notification, setNotification] = React.useState({});
  let [demoUsers, setDemoUsers] = React.useState([]);

  const addNotification = (notificationProps: AddNotificationArgs): void => {
    setNotification(notificationProps);
  };

  return {
    user: {
      data: user,
      refresh: () => {
        setUser(readUser());
      }
    },
    demoUsers: {
      data: demoUsers,
      fetch: async () => {
        try {
          const result = await AsyncService.get(ENDPOINTS.demo.users);
          const data = result.data.body;
          setDemoUsers(data);
        } catch ({ message }) {
          addNotification({
            message,
            type: NOTIFICATION_TYPES.error as NotificationType
          });
          return Error(message);
        }
      }
    },
    notifications: {
      notification,
      addNotification
    }
  };
}

const AppContainer = createContainer(useApp);

export default AppContainer;
