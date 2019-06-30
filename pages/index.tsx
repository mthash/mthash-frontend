import * as React from "react";
import Link from "next/link";
import MuiLink from "@material-ui/core/Link";

import { withAuthSync, logout } from "~/utils/auth";

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <div>MtHash Dashboard</div>
      <Link href="/login">
        <a>Sign in</a>
      </Link>
      <MuiLink onClick={() => logout()}>Logout</MuiLink>
    </div>
  );
};

export default withAuthSync(Home);
