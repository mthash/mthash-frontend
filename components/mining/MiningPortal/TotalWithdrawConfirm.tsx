import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const TotalWithdrawConfirm: React.FC<Props> = ({
  open,
  onClose,
  onConfirm
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Close position</DialogTitle>
      <DialogContent>
        <DialogContentText>Stop all mining of this coin?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm}>Yes</Button>
        <Button onClick={onClose} color="primary" autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TotalWithdrawConfirm;
