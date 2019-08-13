import * as React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import Currency from "~/models/types/Currency";
import ExchangeArrows from "../../../static/ExchangeArrows.svg";

interface Props {
  currency: Currency;
  algorithm: string;
  onClose: () => void;
}

const MiningSlotHeader: React.FC<Props> = ({
  currency,
  algorithm,
  onClose
}): JSX.Element => {
  return (
    <Header>
      <Item>{currency}</Item>
      <ExchangeIcon />
      <Item>{algorithm}</Item>
      <CloseButton aria-label="close" onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </Header>
  );
};

export default MiningSlotHeader;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Item = styled.span`
  display: inline-block;
  color: ${p => p.theme.palette.text.secondary};
  font-weight: bold;
`;

const ExchangeIcon = styled(ExchangeArrows)`
  width: 10px;
  margin: 10px;
  color: ${p => p.theme.palette.background.button};
`;

const CloseButton = styled(IconButton)`
  margin-left: auto;
`;
