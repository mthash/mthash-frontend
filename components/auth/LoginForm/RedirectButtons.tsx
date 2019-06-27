import * as React from "react";
import Link from "next/link";
import { default as MuiLink } from "@material-ui/core/Link";

const RedirectButtons: React.FC = (): React.JSX => {
  return (
    <div>
      <MuiLink href="/signup">
        <a>Don't have an account?</a>
      </MuiLink>
    </div>
  );
};

export default RedirectButtons;
