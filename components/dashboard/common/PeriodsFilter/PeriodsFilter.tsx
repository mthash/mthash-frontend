import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import { PERIODS } from "~/constants/periods";

interface Period {
  name: string;
  caption: string;
}

const PeriodsFilter: React.FC = (): JSX.Element => {
  return (
    <>
      {PERIODS.map(
        ({ name, caption }: Period): JSX.Element => (
          <PeriodButton key={name}>{caption}</PeriodButton>
        )
      )}
    </>
  );
};

export default PeriodsFilter;

const PeriodButton = styled(Button)`
  font-size: 13px;
  background-color: ${p => p.theme.palette.background.default};
  margin-left: 5px;
`;
