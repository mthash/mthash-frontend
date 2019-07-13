import * as React from "react";
import { default as MuiLink } from "@material-ui/core/Link";

import ROUTES from "~/constants/routes";

const RedirectButtons: React.FC = (): React.JSX => {
  return (
    <div>
      <MuiLink href={ROUTES.auth.login}>Already has an account?</MuiLink>
    </div>
  );
};

export default RedirectButtons;
