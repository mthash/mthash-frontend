import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { logout } from "~/utils/auth";
import IUser from "~/models/User";
import AdminDialog from "./AdminDialog";

const USER_ACTIONS = {
  logout: "Logout",
  admin: "Admin"
};

interface Props {
  user?: IUser;
}

const User: React.FC<Props> = ({ user }): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [adminDialogShown, setAdminDialogShown] = React.useState<boolean>(
    false
  );

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

  const handleShowDialogAdmin = () => {
    setAdminDialogShown(true);
  };

  const handleAdmingDialogClose = () => {
    setAdminDialogShown(false);
  };

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
        {user.is_admin && (
          <MenuItem onClick={handleShowDialogAdmin}>
            {USER_ACTIONS.admin}
          </MenuItem>
        )}
      </UserMenu>
      {adminDialogShown && (
        <AdminDialog
          open={adminDialogShown}
          onClose={handleAdmingDialogClose}
        />
      )}
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
