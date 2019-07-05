import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

interface Props {
  caption: string;
  actions: React.ReactNode;
}

const WidgetHeader: React.FC<Props> = ({ caption, actions }): JSX.Element => {
  return (
    <>
      <Header>
        {caption}
        {actions}
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
