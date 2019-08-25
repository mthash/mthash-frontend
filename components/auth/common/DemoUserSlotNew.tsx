import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import PersonAdd from "@material-ui/icons/PersonAdd";

import DemoUseCreate from "./DemoUserCreate";

const NEW_DEMO_USER_CAPTION = "New user";

interface Props {
  onCreate: (identifier: string) => void;
}

const DemoUserSlotNew: React.FC<Props> = ({ onCreate }): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AddUserButton variant="outlined" onClick={handleOpenPopup}>
        <NewUserIcon />
        {NEW_DEMO_USER_CAPTION}
      </AddUserButton>
      <DemoUseCreate
        anchorEl={anchorEl}
        onClose={handleClose}
        onCreate={onCreate}
      />
    </>
  );
};

export default DemoUserSlotNew;

const AddUserButton = styled(Button)`
  padding: 20px;
  width: 100%;
  height: 100%;
  min-height: 112px;
  color: ${p => p.theme.palette.text.secondary};
  border: 1px dashed ${p => p.theme.palette.text.secondary};
`;

const NewUserIcon = styled(PersonAdd)`
  font-size: 50px;
  margin-right: 10px;
`;
