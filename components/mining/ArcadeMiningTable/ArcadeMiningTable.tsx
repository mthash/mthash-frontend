import * as React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import ArcadeMiningStatistic from "~/models/ArcadeMiningStatistic";
import ArcadeMiningHash from "./ArcadeMiningHash";

import rows from "~/_mocks_/arcadeMiningStatistic.json";
import hashStat from "~/_mocks_/arcadeMiningStatisticHash.json";
import MiningContainer from "~/containers/MiningContainer";
import ArcadeMiningTableRow from "./ArcadeMiningTableRow";

const ArcadeMiningTable: React.FC = (): JSX.Element => {
  const { arcadeMining } = MiningContainer.useContainer();
  const data = arcadeMining.data;

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
          {data &&
            data.map((row: ArcadeMiningStatistic) => (
              <ArcadeMiningTableRow {...row} />
            ))}
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

const HeaderCell = styled(TableCell)`
  border-width: 0;
  padding-top: 0;
  padding-bottom: 0;
`;
