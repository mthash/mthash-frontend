import * as React from "react";
import styled from "styled-components";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import CurrencyIcon from "~/components/common/CurrencyIcon";
import ArcadeMiningValue from "./ArcadeMiningValue";

interface Props {
  id: any;
  currency: any;
  revenue: any;
  hashrate: any;
  mining: any;
  balance: any;
}

const ArcadeMiningTableRow: React.FC<Props> = ({
  id,
  currency,
  revenue,
  hashrate,
  mining,
  balance
}): JSX.Element => {
  // const CurrencyIcon = CURRENCY_ICONS[currency];
  return (
    <MiningRow key={id} hover>
      <CurrencyIconCell component="th" scope="row">
        <CurrencyIcon currency={currency} monochrome />
      </CurrencyIconCell>
      <MiningCell align="center">
        <ArcadeMiningValue {...revenue} />
      </MiningCell>
      <MiningCell align="center">
        <ArcadeMiningValue {...hashrate} />
      </MiningCell>
      <MiningCell align="center">
        <ArcadeMiningValue {...mining} />
      </MiningCell>
      <MiningCell align="center">
        <ArcadeMiningValue {...balance} />
      </MiningCell>
    </MiningRow>
  );
};

export default ArcadeMiningTableRow;

const MiningRow = styled(TableRow)`
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
`;

const CurrencyIconCell = styled(MiningCell)`
  padding: 0 5px 0 30px;
  color: ${p => p.theme.palette.background.control};

  svg {
    height: 24px;
  }
`;
