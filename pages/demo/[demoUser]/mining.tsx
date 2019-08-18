import * as React from "react";
import { useRouter } from "next/router";

import { withAuthSync } from "~/utils/auth";
import { MiningLayout } from "~/components/layouts";

import MiningContainer from "~/containers/MiningContainer";
import { MiningDashboard } from "~/components/mining";

const Mining: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { demoUser } = router.query;

  return (
    <MiningLayout namespace={`/demo/${demoUser}`} isDemo>
      <MiningContainer.Provider>
        <MiningDashboard />
      </MiningContainer.Provider>
    </MiningLayout>
  );
};

export default withAuthSync(Mining);
