import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Paper from "~/components/common/Paper";
import DialogContent from "@material-ui/core/DialogContent";

type MaxWidth = "xs" | "sm" | "md" | "lg" | "xl" | false;

interface Props {
  open: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  maxWidth?: MaxWidth;
  onClose: () => void;
}

interface DialogTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle: React.FC<DialogTitleProps> = ({ onClose, children }) => {
  return (
    <MuiDialogTitle>
      <TitleWrapper>
        {children}
        {onClose ? (
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </TitleWrapper>
    </MuiDialogTitle>
  );
};

const Dialog: React.FC<Props> = ({
  open,
  maxWidth,
  title,
  children,
  className,
  onClose
}): JSX.Element => {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      className={className}
      maxWidth={maxWidth}
    >
      <DialogTitle onClose={onClose}>{title}</DialogTitle>
      <MuiDialogContent>{children}</MuiDialogContent>
    </MuiDialog>
  );
};

export default Dialog;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
