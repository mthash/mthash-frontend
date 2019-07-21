import * as React from "react";
import styled from "styled-components";
// import Input from "@material-ui/core/Input";

import { TextField } from "~/components/common/TextField";

import Hash from "../../../static/currencies/HashMono.svg";

interface Props {
  miningValue: string;
}

const MiningHashInput: React.FC<Props> = ({ miningValue }): JSX.Element => {
  const [inputValue, setInputValue] = React.useState(miningValue);

  const handleOnChangeValue = event => {
    setInputValue(event.target.value);
  };

  return (
    <Wrapper>
      <HashInput
        value={inputValue}
        onChange={handleOnChangeValue}
        variant="filled"
      />
      <HashIcon />
    </Wrapper>
  );
};

export default MiningHashInput;

const Wrapper = styled.div`
  display: flex;
`;

const HashInput = styled(TextField)`
  background-color: ${p => p.theme.palette.background.control2};
  font-weight: lighter;

  input {
    padding: 12px 12px 10px;
  }
`;

const HashIcon = styled(Hash)`
  width: 27px;
  margin-left: 10px;
  color: ${p => p.theme.palette.text.secondary};
`;
