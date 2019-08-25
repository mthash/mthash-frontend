import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface Props {
  open: boolean;
  title: string;
  text: string;
  onClose: () => void;
  onConfirm: () => void;
}

const Confirm: React.FC<Props> = ({
  open,
  title,
  text,
  onClose,
  onConfirm
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="responsive-dialog-title"
  >
    <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{text}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onConfirm}>Yes</Button>
      <Button onClick={onClose} color="primary" autoFocus>
        No
      </Button>
    </DialogActions>
  </Dialog>
);

export default Confirm;
