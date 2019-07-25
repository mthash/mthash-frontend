import * as React from "react";
import styled from "styled-components";

import Dialog from "~/components/common/Dialog";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ADD_CURRENCY_DIALOG = "Add currency";

const MiningAddCurrencyDialog: React.FC<Props> = ({
  open,
  onClose
}): JSX.Element => {
  return (
    <Dialog open={open} onClose={onClose} title={ADD_CURRENCY_DIALOG}>
      <>Here I will add money</>
    </Dialog>
  );
};

export default MiningAddCurrencyDialog;
