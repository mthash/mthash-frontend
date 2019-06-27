import * as React from "react";
import Link from "next/link";

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
