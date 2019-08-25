import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import Confirm from "~/components/common/Confirm";
import { AsyncService } from "~/services";
import ENDPOINTS from "~/constants/endpoints";

const WIPE_DATA = {
  title: "Wipe data",
  text: "Reset all data?"
};

const AdminReset: React.FC = (): JSX.Element => {
  const [wipeConfirmShown, setWipeConfirmShown] = React.useState<boolean>(
    false
  );

  const handleWipeConfirmShow = () => {
    setWipeConfirmShown(true);
  };

  const handleCloseConfirm = () => {
    setWipeConfirmShown(false);
  };

  const handleWipeData = () => {
    AsyncService.get(ENDPOINTS.admin.wipe);
  };

  return (
    <>
      <WipeButton
        onClick={handleWipeConfirmShow}
        variant="contained"
        color="primary"
      >
        {WIPE_DATA.title}
      </WipeButton>
      <Confirm
        onConfirm={handleWipeData}
        onClose={handleCloseConfirm}
        open={wipeConfirmShown}
        title={WIPE_DATA.title}
        text={WIPE_DATA.text}
      />
    </>
  );
};

export default AdminReset;

const WipeButton = styled(Button)`
  width: 100%;
  padding: 20px;
  margin: 20px auto;
`;
