import * as React from "react";
import Link from "next/link";

import { Layout } from "~/components/Layout";

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <div>MtHash Dashboard</div>
      <Link href="/login">
        <a>Sign in</a>
      </Link>
    </div>
  );
};

export default Home;
