import * as React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import ArcadeMiningStatistic from "~/models/ArcadeMiningStatistic";
import ArcadeMiningValue from "./ArcadeMiningValue";

const rows = [
  {
    id: 1,
    currency: "BTC",
    revenue: {
      value: "0.0078",
      unit: "/hr",
      shift: 12.5
    },
    hashrate: {
      value: "120.0011",
      unit: "Th/s",
      shift: 12.5
    },
    mining: {
      value: "171.1042",
      unit: "HASH",
      shift: 12.5
    },
    balance: {
      value: "12.7143",
      unit: "BTC",
      shift: 12.5
    }
  },
  {
    id: 2,
    currency: "ETH",
    revenue: {
      value: "0.2394",
      unit: "/hr",
      shift: -5.23
    },
    hashrate: {
      value: "352.3712",
      unit: "Mh/s",
      shift: -5.23
    },
    mining: {
      value: "165.0234",
      unit: "HASH",
      shift: -5.23
    },
    balance: {
      value: "85.2401",
      unit: "ETH",
      shift: -5.23
    }
  },
  {
    id: 3,
    currency: "LTC",
    revenue: {
      value: "0.3264",
      unit: "/hr",
      shift: 39.68
    },
    hashrate: {
      value: "251.9171",
      unit: "Mh/s",
      shift: 39.68
    },
    mining: {
      value: "172.2034",
      unit: "HASH",
      shift: 39.68
    },
    balance: {
      value: "57.8311",
      unit: "LTC",
      shift: 39.68
    }
  },
  {
    id: 4,
    currency: "ZEC",
    revenue: {
      value: "3.3384",
      unit: "/hr",
      shift: 39.68
    },
    hashrate: {
      value: "1,221.5227",
      unit: "Sol/s",
      shift: 39.68
    },
    mining: {
      value: "147.3374",
      unit: "HASH",
      shift: 39.68
    },
    balance: {
      value: "278.3778",
      unit: "ZEC",
      shift: 39.68
    }
  }
];

const ArcadeMiningTable: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <img src="static/mining/ArcadeMining.svg" />
      <MiningTable>
        <TableHead>
          <TableRow>
            <HeaderCell size="small"></HeaderCell>
            <HeaderCell align="right">Revenue</HeaderCell>
            <HeaderCell align="right">hashrate</HeaderCell>
            <HeaderCell align="right">Mining</HeaderCell>
            <HeaderCell align="right">Balance</HeaderCell>
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
            }: ArcadeMiningStatistic) => (
              <MiningRow key={id} hover>
                <MiningCell component="th" scope="row" size="small">
                  {currency}
                </MiningCell>
                <MiningCell align="right">
                  <ArcadeMiningValue {...revenue} />
                </MiningCell>
                <MiningCell align="right">
                  <ArcadeMiningValue {...hashrate} />
                </MiningCell>
                <MiningCell align="right">
                  <ArcadeMiningValue {...mining} />
                </MiningCell>
                <MiningCell align="right">
                  <ArcadeMiningValue {...balance} />
                </MiningCell>
              </MiningRow>
            )
          )}
        </TableBody>
      </MiningTable>
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
    background-color: ${p => p.theme.palette.hightlight.blue} !important;
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
