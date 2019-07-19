import * as React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";

function createData(
  name: number,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(12, 159, 6.0, 24, 4.0),
  createData(3, 237, 9.0, 37, 4.3),
  createData(5, 262, 16.0, 24, 6.0),
  createData(56, 305, 3.7, 67, 4.3),
  createData(109, 356, 16.0, 49, 3.9)
];

interface Props {
  picture: string;
  onShowAll?: () => {};
}

const RewardsTable: React.FC<Props> = ({ picture, onShowAll }): JSX.Element => {
  return (
    <section>
      <Header>
        <img src={picture} />
        <ShowAllLink>Show all</ShowAllLink>
      </Header>
      <Table>
        <TableHead>
          <TableRow>
            <RewardCell>Age</RewardCell>
            <RewardCell align="right">Coin</RewardCell>
            <RewardCell align="right">Height</RewardCell>
            <RewardCell align="right">Reward</RewardCell>
            <RewardCell align="right">Tx Fee</RewardCell>
            <RewardCell align="right">Block Hash</RewardCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <RewardsRow key={row.name} hover>
              <RewardCell component="th" scope="row">
                {row.name}
              </RewardCell>
              <RewardCell align="right">{row.calories}</RewardCell>
              <RewardCell align="right">{row.fat}</RewardCell>
              <RewardCell align="right">{row.carbs}</RewardCell>
              <RewardCell align="right">{row.protein}</RewardCell>
              <RewardCell align="right">{}</RewardCell>
            </RewardsRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default RewardsTable;

const RewardsRow = styled(TableRow)`
  &:nth-of-type(2n + 1) {
    background-color: ${p => p.theme.palette.background.darkBlue};
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
