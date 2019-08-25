import * as React from "react";
import styled from "styled-components";

interface Props {
  value: string | number;
  unit: string;
}

const MiningValueUnit: React.FC<Props> = ({ value, unit }) => {
  return (
    <>
      <Value title={value && value.toString()}>{value}</Value>
      <Unit>{unit}</Unit>
    </>
  );
};

export default MiningValueUnit;

const Unit = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-size: 12px;
  color: ${p => p.theme.palette.text.secondary};
`;

const Value = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
`;
