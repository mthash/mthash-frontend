import * as React from "react";

import { withAuthSync, logout } from "~/utils/auth";
import { DashboardLayout } from "~/components/layouts";
import TotalHashrate from "~/components/charts/TotalHashrate";

const Home: React.FC = (): JSX.Element => {
  return (
    <DashboardLayout>
      <TotalHashrate />
    </DashboardLayout>
  );
};

export default withAuthSync(Home);
