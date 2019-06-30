import * as React from "react";

import { AuthLayout } from "~/components/layouts";
import SignupForm from "~/components/auth/SignupForm";

const Registration: React.FC = (): JSX.Element => (
  <AuthLayout title="Signup">
    <SignupForm />
  </AuthLayout>
);

export default Registration;
