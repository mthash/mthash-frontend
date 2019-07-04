import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";

interface Props {
  name: string;
}

const User: React.FC<Props> = ({ name }): JSX.Element => {
  return (
    <UserButton>
      <UserName>{name}</UserName>
      <AccountCircle />
    </UserButton>
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

export default User;
