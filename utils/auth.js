import * as React from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";

import ROUTES from "~/constants/routes";
import AppContainer from "~/containers/AppContainer";

const STUB_JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkVsa2luIiwibG9naW4iOiJlYWtodW5kemFkZUBnbWFpbC5jb20iLCJjcmVhdGVkX2F0IjoxNTYxNjUwNDQyLCJzdGF0dXMiOjEsImlhdCI6MTU2MjQyMzg2NiwiZXhwIjoxNTkzOTU5ODY2LCJmb3JfdGVzdGluZyI6dHJ1ZSwic2lnIjoiYTNmOGNmMjM3NTNlOTY3ODY2NWNlOGQwNDgwMGNlYjRkNDRkNzA3YyJ9.Oif53b0PWSg2PzEz2rmdYUm26-pId27Rh8PAqg_k4bY";

export const setToken = token => {
  cookie.set("token", token, { expires: 1 });
};

export const getToken = () => {
  return cookie.get("token");
};

export const login = ({ token }) => {
  // TODO: Stub implementation, change in for real token when the app will be in real development for production
  setToken(STUB_JWT);
  Router.push(ROUTES.dashboard);
};

export const logout = () => {
  cookie.remove("token");
  // to support logging out from all windows
  window.localStorage.setItem("logout", Date.now());
  Router.push(ROUTES.auth.login);
};

// Gets the display name of a JSX component for dev tools
const getDisplayName = Component =>
  Component.displayName || Component.name || "Component";

export const withAuthSync = WrappedComponent =>
  class extends React.Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const token = auth(ctx);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    constructor(props) {
      super(props);

      this.syncLogout = this.syncLogout.bind(this);
    }

    componentDidMount() {
      window.addEventListener("storage", this.syncLogout);
    }

    componentWillUnmount() {
      window.removeEventListener("storage", this.syncLogout);
      window.localStorage.removeItem("logout");
    }

    syncLogout(event) {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        Router.push(ROUTES.auth.login);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export const auth = ctx => {
  const { token } = nextCookie(ctx);

  /*
   * This happens on server only, ctx.req is available means it's being
   * rendered on server. If we are on server and token is not available,
   * means user is not logged in.
   */
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
    return;
  }

  // We already checked for server. This should only happen on client.
  if (!token) {
    Router.push(ROUTES.auth.login);
  }

  return token;
};
