import * as React from "react";
import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";

interface Props {
  onChange?: (string) => string;
  selected?: string;
}

const FILTERS = ["1H", "3H", "1D", "7D", "1M", "All"];

const TotalPoolHeaderFilter: React.FC<Props> = ({
  onChange,
  selected = "7D"
}): JSX.Element => {
  const handleChange = (filter: string) => {
    onChange && onChange(filter);
  };

  return (
    <div>
      {FILTERS.map(
        (filter: string): JSX.Element => (
          <FilterButton
            onClick={handleChange.bind(null, filter)}
            selected={filter === selected}
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
