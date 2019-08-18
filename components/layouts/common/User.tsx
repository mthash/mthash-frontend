import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { logout } from "~/utils/auth";
import IUser from "~/models/User";
import Confirm from "~/components/common/Confirm";

const WIPE_DATA = {
  title: "Wipe user data",
  text: "Reset all user's data?"
};

const USER_ACTIONS = {
  logout: "Logout",
  wipe: "Wipe data"
};

interface Props {
  user?: IUser;
  isDemo?: boolean;
}

const User: React.FC<Props> = ({ user, isDemo }): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [wipeConfirmShow, setWipeConfirmShown] = React.useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleShowWipeConfirm = () => setWipeConfirmShown(true);
  const handleCloseConfirm = () => setWipeConfirmShown(false);
  const handleWipeData = () => {};

  return (
    <>
      <UserButton onClick={handleClick} aria-haspopup="true">
        <UserName>{user.name}</UserName>
        <AccountCircle />
      </UserButton>

      <UserMenu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
      >
        <MenuItem onClick={handleLogout}>{USER_ACTIONS.logout}</MenuItem>
        {/* TODO: uncomment when will implemented on the backend {isDemo && (
          <MenuItem onClick={handleShowWipeConfirm}>
            {USER_ACTIONS.wipe}
          </MenuItem>
        )} */}
      </UserMenu>

      <Confirm
        onConfirm={handleWipeData}
        onClose={handleCloseConfirm}
        open={wipeConfirmShow}
        title={WIPE_DATA.title}
        text={WIPE_DATA.text}
      />
    </>
  );
};

const UserButton = styled(Button)`
  text-transform: capitalize;
  color: ${p => p.theme.palette.text.secondary};

  svg {
    width: 50px;
    height: 50px;
  }
`;

const UserName = styled.span`
  margin: 0 10px;
`;

const UserMenu = styled(Menu)`
  .MuiMenu-list {
    display: flex;
    flex-direction: column;
    min-width: 160px;
  }
`;

export default User;
