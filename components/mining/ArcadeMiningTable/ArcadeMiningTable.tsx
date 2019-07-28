import * as React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import ArcadeMiningStatistic from "~/models/ArcadeMiningStatistic";
import ArcadeMiningValue from "./ArcadeMiningValue";
import ArcadeMiningHash from "./ArcadeMiningHash";

import Bitcoin from "../../../static/currencies/BitcoinMono.svg";
import Litecoin from "../../../static/currencies/LitecoinMono.svg";
import Ethereum from "../../../static/currencies/EthereumMono.svg";
import ZCash from "../../../static/currencies/ZCashMono.svg";

import rows from "~/_mocks_/arcadeMiningStatistic.json";
import hashStat from "~/_mocks_/arcadeMiningStatisticHash.json";
import MiningContainer from "~/containers/MiningContainer";

const CURRENCY_ICONS: { [name: string]: React.FC } = {
  BTC: Bitcoin,
  LTC: Litecoin,
  ETH: Ethereum,
  ZEC: ZCash
};

const ArcadeMiningTable: React.FC = (): JSX.Element => {
  const { arcadeMining } = MiningContainer.useContainer();

  React.useEffect(() => {
    arcadeMining.fetch();
  }, []);

  return (
    <Wrapper>
      <img src="static/mining/ArcadeMining.svg" />
      <MiningTable>
        <TableHead>
          <TableRow>
            <HeaderCell size="small"></HeaderCell>
            <HeaderCell align="center">Revenue</HeaderCell>
            <HeaderCell align="center">Hashrate</HeaderCell>
            <HeaderCell align="center">Mining</HeaderCell>
            <HeaderCell align="center">Balance</HeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            ({
              id,
              currency,
              revenue,
              hashrate,
              mining,
              balance
            }: ArcadeMiningStatistic) => {
              const CurrencyIcon = CURRENCY_ICONS[currency];
              return (
                <MiningRow key={id} hover>
                  <CurrencyIconCell component="th" scope="row">
                    <CurrencyIcon />
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
            }
          )}
        </TableBody>
      </MiningTable>
      <ArcadeMiningHash {...hashStat} />
    </Wrapper>
  );
};

export default ArcadeMiningTable;

const Wrapper = styled.section`
  width: 100%;
  margin-right: 20px;
`;

const MiningTable = styled(Table)`
  border-collapse: separate;
  border-spacing: 0 15px;
`;

const MiningRow = styled(TableRow)`
  &:hover {
    > td,
    > th {
      background-color: ${p => p.theme.palette.hightlight.blue} !important;
    }
    cursor: pointer;
  }
`;

const HeaderCell = styled(TableCell)`
  border-width: 0;
  padding-top: 0;
  padding-bottom: 0;
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
