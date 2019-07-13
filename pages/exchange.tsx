import * as React from "react";
import Grid from "@material-ui/core/Grid";

import { withAuthSync } from "~/utils/auth";
import { ExchangeLayout } from "~/components/layouts";

const Exchange: React.FC = (): JSX.Element => {
  return <ExchangeLayout>exchange</ExchangeLayout>;
};

export default withAuthSync(Exchange);
