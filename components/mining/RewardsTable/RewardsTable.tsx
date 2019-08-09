import * as React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";
import { isEmpty } from "ramda";
import { Tooltip } from "@material-ui/core";

interface Options {
  withTooltip?: boolean;
}

interface ColumnDefinition {
  name: string;
  dataKey: string;
  options?: Options;
}

type DataDefinition = { [key: string]: string | number };

interface Props {
  picture: string;
  columns: ColumnDefinition[];
  data?: DataDefinition[];
  onShowAll?: () => {};
}

interface RewardCellProps {
  value: string | number;
  options?: Options;
}

const RewardCell: React.FC<RewardCellProps> = ({
  value,
  options = {}
}): JSX.Element => {
  const { withTooltip } = options;
  const content = (() => {
    if (withTooltip) {
      return (
        <Tooltip title={value} placement="top-start">
          <TooltipContent>{value}</TooltipContent>
        </Tooltip>
      );
    } else {
      return value;
    }
  })();

  return <RewardsTableCell align="right">{content}</RewardsTableCell>;
};

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
      <RewardTable>
        <TableHead>
          <TableRow>
            {columns.map(
              ({ name }): JSX.Element => (
                <RewardsTableCell key={name} align="right">
                  {name}
                </RewardsTableCell>
              )
            )}
          </TableRow>
        </TableHead>
        {data && !isEmpty(data) && (
          <TableBody>
            {data.map(
              (row): JSX.Element => (
                <RewardsTableRow key={row.id} hover>
                  {columns.map(
                    ({ dataKey, options }): JSX.Element => (
                      <RewardCell
                        key={dataKey}
                        value={row[dataKey]}
                        options={options}
                      />
                    )
                  )}
                </RewardsTableRow>
              )
            )}
          </TableBody>
        )}
      </RewardTable>
    </Wrapper>
  );
};

export default RewardsTable;

const Wrapper = styled.section`
  width: 100%;
`;

const RewardTable = styled(Table)`
  table-layout: fixed;
`;

const RewardsTableRow = styled(TableRow)`
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

const RewardsTableCell = styled(TableCell)`
  border-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: ${p => p.theme.breakpoints.values.md}px) {
    font-size: 12px;
    padding: 12px 6px;
  }
  @media screen and (max-width: ${p => p.theme.breakpoints.values.sm}px) {
    font-size: 10px;
    padding: 12px 4px;
  }
  @media screen and (max-width: ${p => p.theme.breakpoints.values.xs}px) {
    font-size: 10px;
    padding: 12px 2px;
  }
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

const TooltipContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;
