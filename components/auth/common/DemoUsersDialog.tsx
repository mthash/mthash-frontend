import * as React from "react";
import styled from "styled-components";
import { isEmpty } from "ramda";
import { Grid } from "@material-ui/core";
import Router from "next/router";

import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import AppContainer from "~/containers/AppContainer";
import Dialog from "~/components/common/Dialog";
import { DemoUser } from "~/models/DemoUser";
import DemoUserSlot from "./DemoUserSlot";
import DemoUserSlotNew from "./DemoUserSlotNew";

const DEMO_USER_CHOOSE = "Choose a demo user";
const ERRORS = {
  emptyIdentifier: "Identifier must not be empty",
  userAlreadyExists: "This user already exists"
};

interface Props {
  open: boolean;
  onClose: () => void;
  users: DemoUser[];
}

function redirectToDemoUser(identifier: string) {
  Router.push(`/demo/${identifier}`);
}

const DemoUsersDialog: React.FC<Props> = ({
  users,
  open,
  onClose
}): JSX.Element => {
  const { notifications } = AppContainer.useContainer();

  const handleCreate = (identifier: string) => {
    if (identifier === "") {
      notifications.addNotification({
        type: NOTIFICATION_TYPES.error,
        message: ERRORS.emptyIdentifier
      });

      return;
    }

    const userTags = users.map(({ tag }) => tag);

    if (userTags.includes(identifier)) {
      notifications.addNotification({
        type: NOTIFICATION_TYPES.error,
        message: ERRORS.userAlreadyExists
      });

      return;
    }

    redirectToDemoUser(identifier);
  };

  const handleLoginExistingUser = (identifier: string) => {
    redirectToDemoUser(identifier);
  };

  return (
    <Dialog open={open} onClose={onClose} title={DEMO_USER_CHOOSE}>
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item lg={4} md={6} sm={12}>
            <DemoUserSlotNew onCreate={handleCreate} />
          </Grid>

          {!isEmpty(users) &&
            users.map(({ id, tag, name }) => (
              <Grid item lg={4} md={6} sm={12} key={id}>
                <DemoUserSlot
                  key={id}
                  identifier={tag}
                  name={name}
                  onClick={handleLoginExistingUser}
                />
              </Grid>
            ))}
        </Grid>
      </Wrapper>
    </Dialog>
  );
};

export default DemoUsersDialog;

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
