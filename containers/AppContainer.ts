import * as React from "react";
import { createContainer } from "unstated-next";
import cookie from "js-cookie";
import jwtDecode from "jwt-decode";

import User from "~/models/User";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import NotificationType from "~/models/types/NotificationType";
import { getToken } from "~/utils/auth";

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

  // // TODO: hack to read user's credentials. Probably there is better way to do it.
  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log(readUser());
  //     setUser(readUser());
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  const addNotification = (notificationProps: AddNotificationArgs): void => {
    setNotification(notificationProps);
  };

  return {
    user: {
      data: user,
      refresh: () => {
        console.log(readUser());
        setUser(readUser());
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
