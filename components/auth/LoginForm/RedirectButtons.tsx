import * as React from "react";
import { default as MuiLink } from "@material-ui/core/Link";

import ROUTES from "~/constants/routes";

const RedirectButtons: React.FC = (): JSX.Element => {
  return (
    <div>
      <MuiLink href={ROUTES.auth.signup}>Don't have an account?</MuiLink>
    </div>
  );
};

export default RedirectButtons;
