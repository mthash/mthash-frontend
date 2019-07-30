import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

interface Props {
  caption: string | React.ReactNode;
  actions: React.ReactNode;
}

const WidgetHeader: React.FC<Props> = ({ caption, actions }): JSX.Element => {
  return (
    <>
      <Header>
        <Caption>{caption}</Caption>
        <div>{actions}</div>
      </Header>
      <Divider />
    </>
  );
};

export default WidgetHeader;

const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 20px 30px;
  justify-content: space-between;
  align-items: center;
`;

const Caption = styled.div`
  font-weight: bold;
`;
