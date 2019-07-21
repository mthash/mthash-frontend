import * as React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";

interface ColumnDefinition {
  name: string;
  dataKey: string;
}

type DataDefinition = { [key: string]: string | number };

interface Props {
  picture: string;
  columns: ColumnDefinition[];
  data: DataDefinition[];
  onShowAll?: () => {};
}

const RewardsTable: React.FC<Props> = ({
  picture,
  data,
  columns,
  onShowAll
}): JSX.Element => {
  return (
    <Wrapper>
      <Header>
        <img src={picture} />
        <ShowAllLink onClick={onShowAll}>Show all</ShowAllLink>
      </Header>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(
              ({ name }): JSX.Element => (
                <RewardCell key={name} align="right">
                  {name}
                </RewardCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(
            (row): JSX.Element => (
              <RewardsRow key={row.id} hover>
                {columns.map(
                  ({ dataKey }): JSX.Element => (
                    <RewardCell key={dataKey} align="right">
                      {row[dataKey]}
                    </RewardCell>
                  )
                )}
              </RewardsRow>
            )
          )}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default RewardsTable;

const Wrapper = styled.section`
  width: 100%;
`;

const RewardsRow = styled(TableRow)`
  background-color: ${p => p.theme.palette.background.paperDarkest};

  &:nth-of-type(2n + 1) {
    background-color: ${p => p.theme.palette.background.darkBlue};
  }

  &:first-child td:first-child {
    border-top-left-radius: 10px;
  }
  &:first-child td:last-child {
    border-top-right-radius: 10px;
  }
  &:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }
  &:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }

  &:hover {
    td {
      background-color: ${p => p.theme.palette.background.button};
    }
  }
`;

const RewardCell = styled(TableCell)`
  border-width: 0;
`;

const Header = styled.head`
  display: flex;
  align-items: flex-end;
`;

const ShowAllLink = styled(Link)`
  color: ${p => p.theme.palette.text.secondary};
  cursor: pointer;
  margin: 0 0 14px 10px;
`;
