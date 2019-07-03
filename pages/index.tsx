import * as React from "react";
import Link from "next/link";
import MuiLink from "@material-ui/core/Link";

import { withAuthSync, logout } from "~/utils/auth";
import { DashboardLayout } from "~/components/layouts";

const Home: React.FC = (): JSX.Element => {
  return (
    <DashboardLayout>
      <div>MtHash Dashboard</div>
      <Link href="/login">
        <a>Sign in</a>
      </Link>
      <MuiLink onClick={() => logout()}>Logout</MuiLink>
    </DashboardLayout>
  );
};

export default withAuthSync(Home);
