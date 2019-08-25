import * as React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Person from "@material-ui/icons/Person";

interface Props {
  name: string;
  identifier: string;
  onClick: (identifier: string) => void;
}

const DemoUserSlot: React.FC<Props> = ({
  name,
  identifier,
  onClick
}): JSX.Element => {
  const handleClick = () => {
    onClick(identifier);
  };

  return (
    <DemoUserButton variant="outlined" onClick={handleClick}>
      <UserIcon />
      {name}
    </DemoUserButton>
  );
};

export default DemoUserSlot;

const DemoUserButton = styled(Button)`
  padding: 20px;
  height: 100%;
  width: 100%;
  min-height: 112px;
  color: ${p => p.theme.palette.text.secondary};
  border: 1px solid ${p => p.theme.palette.text.third};
`;

const UserIcon = styled(Person)`
  font-size: 50px;
  margin-right: 10px;
`;
