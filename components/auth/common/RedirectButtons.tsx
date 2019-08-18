import * as React from "react";
import { default as MuiLink } from "@material-ui/core/Link";
import styled from "styled-components";
import { isEmpty } from "ramda";

import AppContainer from "~/containers/AppContainer";
import DemoUsersDialog from "./DemoUsersDialog";

interface CustomLink {
  link: string;
  caption: string;
}

interface Props {
  customLinks?: CustomLink[];
}

const RedirectButtons: React.FC<Props> = ({ customLinks }): JSX.Element => {
  const [demoDialogShown, setDemoDialogShown] = React.useState(false);
  const { demoUsers } = AppContainer.useContainer();

  React.useEffect(() => {
    demoUsers.fetch();
  }, []);

  const handleOpenDemoDialog = () => setDemoDialogShown(true);
  const handleCloseDemoDialog = () => setDemoDialogShown(false);

  return (
    <Wrapper>
      {customLinks &&
        !isEmpty(customLinks) &&
        customLinks.map(({ link, caption }) => (
          <Link key={link} href={link}>
            {caption}
          </Link>
        ))}
      <Link onClick={handleOpenDemoDialog}>Try without registration</Link>
      <DemoUsersDialog
        open={demoDialogShown}
        onClose={handleCloseDemoDialog}
        users={demoUsers.data}
      />
    </Wrapper>
  );
};

export default RedirectButtons;

const Wrapper = styled.div`
  display: flex;
  line-height: 2;
  flex-direction: column;
`;

const Link = styled(MuiLink)`
  cursor: pointer;
`;
