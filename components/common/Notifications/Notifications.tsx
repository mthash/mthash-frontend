import * as React from "react";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent, {
  SnackbarContentProps
} from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import AppContainer from "~/containers/AppContainer";
import NotificationType from "~/models/types/NotificationType";

// interface Props {
//   notification: any;
// }

const Notifications: React.FC = () => {
  const {
    notifications: { notification }
  } = AppContainer.useContainer();
  const [open, setOpen] = React.useState(Boolean(notification.content));
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (!open) {
      setOpen(Boolean(notification.content));
    }
  }, [notification]);

  console.log(notification.content + " from notifications", open);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={4000}
      onClose={handleClose}
      open={open}
    >
      <NotificationContent
        message={notification.content}
        type={notification.type}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      ></NotificationContent>
    </Snackbar>
  );
};

export default Notifications;

interface NotificationContentProps extends SnackbarContentProps {
  type: NotificationType;
}

const NotificationContent = styled(SnackbarContent)<NotificationContentProps>`
  background-color: ${p => p.theme.palette[p.type].main};
`;
