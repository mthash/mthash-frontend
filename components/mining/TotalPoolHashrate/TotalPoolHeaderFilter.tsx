import * as React from "react";
import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import MiningContainer from "~/containers/MiningContainer";
import { PERIODS_SHORT } from "~/constants/periods";

const TotalPoolHeaderFilter: React.FC = (): JSX.Element => {
  const { selectedOverviewPeriod } = MiningContainer.useContainer();

  const handleChange = (filter: string) => {
    selectedOverviewPeriod.set(filter);
  };

  return (
    <div>
      {Object.values(PERIODS_SHORT).map(
        (filter: string): JSX.Element => (
          <FilterButton
            onClick={handleChange.bind(null, filter)}
            selected={filter === selectedOverviewPeriod.period}
          >
            {filter}
          </FilterButton>
        )
      )}
    </div>
  );
};

export default TotalPoolHeaderFilter;

interface FilterButtonProps {
  selected: boolean;
  theme: any;
}

const FilterButton = styled(Button)<FilterButtonProps>`
  padding: 2px;
  min-width: 40px;
  font-size: 12px;
  text-transform: unset;
  color: color: ${p => p.theme.palette.background.control};

  ${p => {
    if (p.selected) {
      return css`
        color: ${p => p.theme.palette.text.primary};
        background-color: ${p => p.theme.palette.background.control};
      `;
    }
  }}
`;
