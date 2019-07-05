import * as React from "react";

import { withAuthSync, logout } from "~/utils/auth";
import { DashboardLayout } from "~/components/layouts";
import TotalHashrate from "~/components/dashboard/TotalHashrate";
import Balance from "~/components/dashboard/Balance";

const Home: React.FC = (): JSX.Element => {
  return (
    <DashboardLayout>
      <TotalHashrate />
      <Balance />
    </DashboardLayout>
  );
};

export default withAuthSync(Home);
