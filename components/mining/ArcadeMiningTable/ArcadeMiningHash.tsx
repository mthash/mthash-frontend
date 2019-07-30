import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import ArcadeMinigValue from "./ArcadeMiningValue";

import Hash from "../../../static/currencies/HashMono.svg";
import MiningContainer from "~/containers/MiningContainer";

interface Props {
  value: number | string;
  unit: string;
  shift: number;
}

const ArcadeMiningHash: React.FC<Props> = (props): JSX.Element => {
  const { hashBalance } = MiningContainer.useContainer();

  React.useEffect(() => {
    hashBalance.fetch();
  }, []);

  return (
    <HashButton>
      <HashIcon />
      <ArcadeMinigValue {...props} value={hashBalance.data} />
    </HashButton>
  );
};

export default ArcadeMiningHash;

const HashButton = styled(Button)`
  padding: 8px 30px;
  float: right;

  background: linear-gradient(
    ${p => p.theme.palette.background.default},
    ${p => p.theme.palette.background.button}
  );

  &:hover {
    background: ${p => p.theme.palette.background.button};
  }
`;

const HashIcon = styled(Hash)`
  width: 23px;
  margin-right: 30px;
  color: ${p => p.theme.palette.background.control};
`;
