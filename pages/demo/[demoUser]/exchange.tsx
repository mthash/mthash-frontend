import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";

import { withAuthSync } from "~/utils/auth";
import { ExchangeLayout } from "~/components/layouts";

const Exchange: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { demoUser } = router.query;

  return (
    <ExchangeLayout namespace={`/demo/${demoUser}`}>exchange</ExchangeLayout>
  );
};

export default withAuthSync(Exchange);
