import * as React from "react";
import styled from "styled-components";
// import Input from "@material-ui/core/Input";

import TextField from "~/components/common/TextField";

import Hash from "../../../static/currencies/HashMono.svg";

interface Props {
  amount: string;
  onChange: (any) => void;
}

const MiningHashInput: React.FC<Props> = ({
  amount,
  onChange
}): JSX.Element => {
  return (
    <Wrapper>
      <HashInput
        value={amount}
        onChange={onChange}
        variant="filled"
        type="number"
        placeholder="Amount"
        inputProps={{
          step: 0.0001,
          min: 0
        }}
        fullWidth
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
