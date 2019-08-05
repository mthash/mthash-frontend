import * as React from "react";
import { createContainer } from "unstated-next";
import cookie from "js-cookie";
import jwt_decode from "jwt-decode";

import User from "~/models/User";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import NotificationType from "~/models/types/NotificationType";

interface AddNotificationArgs {
  message: string;
  type: NotificationType;
  details?: any;
  Renderer?: any;
}

interface AppProps {
  user: User;
  notifications: {
    notification: any;
    addNotification: (AddNotificationArgs) => void;
  };
}

function useApp(): AppProps {
  const token = cookie.get("token");

  let [user, setUser] = React.useState(
    token ? jwt_decode(token) : { name: "" }
  );
  let [notification, setNotification] = React.useState({});

  const addNotification = (notificationProps: AddNotificationArgs): void => {
    setNotification(notificationProps);
  };

  return {
    user,
    notifications: {
      notification,
      addNotification
    }
  };
}

const AppContainer = createContainer(useApp);

export default AppContainer;
