import * as React from "react";
import styled, { css } from "styled-components";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import CurrencyIcon from "~/components/common/CurrencyIcon";
import ArcadeMiningValue from "./ArcadeMiningValue";
import ArcadeMiningHashrateValue from "./ArcadeMiningHashrateValue";

interface Props {
  id: any;
  currency: any;
  revenue: any;
  hashrate: any;
  mining: any;
  balance: any;
  selected: boolean;
  onClick: (number) => void;
}

const ArcadeMiningTableRow: React.FC<Props> = ({
  id,
  currency,
  revenue,
  hashrate,
  mining,
  balance,
  selected,
  onClick
}): JSX.Element => (
  <MiningRow key={id} hover onClick={() => onClick(id)} selected={selected}>
    <CurrencyIconCell component="th" scope="row">
      <CurrencyIcon currency={currency} monochrome />
    </CurrencyIconCell>
    <MiningCell align="center">
      <ArcadeMiningValue {...revenue} currency={currency} />
    </MiningCell>
    <MiningCell align="center">
      <ArcadeMiningHashrateValue {...hashrate} />
    </MiningCell>
    <MiningCell align="center">
      <ArcadeMiningValue {...mining} currency={currency} />
    </MiningCell>
    <MiningCell align="center">
      <ArcadeMiningValue {...balance} currency={currency} />
    </MiningCell>
  </MiningRow>
);

export default ArcadeMiningTableRow;

interface MiningRowProps {
  selected: boolean;
  theme: any;
}

const MiningRow = styled(TableRow)<MiningRowProps>`
  > td,
  > th {
    ${p =>
      p.selected &&
      css`
        background-color: ${p.theme.palette.hightlight.blue} !important;

        span,
        svg {
          color: ${p.theme.palette.text.primary} !important;
        }
      `}

  &:hover {
    > td,
    > th {
      background-color: ${p => p.theme.palette.hightlight.blue} !important;
    }
    cursor: pointer;
  }
`;

const MiningCell = styled(TableCell)`
  border-top: solid 1px ${p => p.theme.palette.background.darkBlue};
  border-bottom: solid 1px ${p => p.theme.palette.background.darkBlue};
  overflow: hidden;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-left: solid 1px ${p => p.theme.palette.background.darkBlue};
  }
  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-right: solid 1px ${p => p.theme.palette.background.darkBlue};
  }

  @media screen and (max-width: ${p => p.theme.breakpoints.values.sm}px) {
    padding: 5px;
  }
`;

const CurrencyIconCell = styled(MiningCell)`
  padding: 0 5px 0 30px;
  color: ${p => p.theme.palette.background.control};

  svg {
    height: 24px;
  }
`;
