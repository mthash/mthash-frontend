import * as React from "react";

import { MiningLayout } from "~/components/layouts";

import MiningContainer from "~/containers/MiningContainer";
import { MiningDashboard } from "~/components/mining";

const MiningDemo: React.FC = (): JSX.Element => {
  return (
    <MiningLayout demo>
      <MiningContainer.Provider>
        <MiningDashboard />
      </MiningContainer.Provider>
    </MiningLayout>
  );
};

export default MiningDemo;
