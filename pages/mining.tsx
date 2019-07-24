import * as React from "react";

import { withAuthSync } from "~/utils/auth";
import { MiningLayout } from "~/components/layouts";

import MiningContainer from "~/containers/MiningContainer";
import { MiningDashboard } from "~/components/mining";

const Mining: React.FC = (): JSX.Element => {
  return (
    <MiningLayout>
      <MiningContainer.Provider>
        <MiningDashboard />
      </MiningContainer.Provider>
    </MiningLayout>
  );
};

export default withAuthSync(Mining);
