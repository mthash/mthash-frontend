import * as React from "react";

import { AuthLayout } from "~/components/layouts";
import LoginForm from "~/components/auth/LoginForm";

const Login: React.FC = (): JSX.Element => (
  <AuthLayout title="Login">
    <LoginForm />
  </AuthLayout>
);

export default Login;
