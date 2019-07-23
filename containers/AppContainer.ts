import * as React from "react";
import { createContainer } from "unstated-next";
import cookie from "js-cookie";
import jwt_decode from "jwt-decode";

import User from "~/models/User";

interface AppProps {
  user: User;
}

function useApp(): AppProps {
  const token = cookie.get("token");

  let [user, setUser] = React.useState(
    token ? jwt_decode(token) : { name: "" }
  );

  return {
    user
  };
}

const AppContainer = createContainer(useApp);

export default AppContainer;
