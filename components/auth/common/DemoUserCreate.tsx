import * as React from "react";
import styled from "styled-components";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import TextField from "~/components/common/TextField";

const CREATE_CAPTION = "Create a new user";
const ACTIONS = {
  create: "Create",
  cancel: "Cancel"
};

interface Props {
  anchorEl: null | HTMLElement;
  onClose: () => void;
  onCreate: (itenditifer: string) => void;
}

const DemoUserCreate: React.FC<Props> = ({
  anchorEl,
  onClose,
  onCreate
}): JSX.Element => {
  const [uniqueSequence, setUniqueSequence] = React.useState(
    Date.now().toString()
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUniqueSequence(event.currentTarget.value);
  };

  const handleCreateClick = () => {
    onCreate(uniqueSequence);
  };

  return (
    <Popover anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      <Wrapper>
        <Typography variant="h6">{CREATE_CAPTION}</Typography>

        <TextField
          id="unique identifier"
          label="unique identifier"
          margin="normal"
          variant="filled"
          type="text"
          onChange={handleChange}
          value={uniqueSequence}
          fullWidth
        />

        <ActionsWrapper>
          <Button color="primary" onClick={handleCreateClick}>
            {ACTIONS.create}
          </Button>
          <Button onClick={onClose}>{ACTIONS.cancel}</Button>
        </ActionsWrapper>
      </Wrapper>
    </Popover>
  );
};

export default DemoUserCreate;

const Wrapper = styled.div`
  padding: 20px;
`;

const ActionsWrapper = styled.div`
  margin-top: 20px;
`;
