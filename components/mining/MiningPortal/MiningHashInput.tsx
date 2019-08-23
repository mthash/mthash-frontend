import * as React from "react";
import styled from "styled-components";
// import Input from "@material-ui/core/Input";

import TextField from "~/components/common/TextField";

import Hash from "../../../static/currencies/HashMono.svg";
import Link from "@material-ui/core/Link";
import { CircularProgress } from "@material-ui/core";
import useDebounce from "~/utils/useDebounce";

const MAX_CAPTION = "MAX";
const DEFAULT_PREDICTION = "0 Mh/s";

interface Props {
  amount: string;
  onChange: (any) => void;
}

const MiningHashInput: React.FC<Props> = ({
  amount,
  onChange
}): JSX.Element => {
  const [maxLoading, setMaxLoading] = React.useState(false);
  const [predictionLoading, setPredictionLoading] = React.useState(false);
  const [prediction, setPrediction] = React.useState(DEFAULT_PREDICTION);

  const handleClickMax = () => {
    setMaxLoading(true);
  };

  const handleChange = event => {
    setPredictionLoading(true);
    onChange(event);

    useDebounce(() => {
      setPredictionLoading(false);
    }, 2000);
  };

  return (
    <>
      <InputWrapper>
        {maxLoading && (
          <LoaderWrapper>
            <CircularProgress />
          </LoaderWrapper>
        )}
        <HashInput
          value={amount}
          onChange={handleChange}
          variant="filled"
          type="number"
          placeholder="Amount"
          inputProps={{
            step: 0.0001,
            min: 0
          }}
          InputProps={{
            startAdornment: (
              <MaxButton onClick={handleClickMax}>{MAX_CAPTION}</MaxButton>
            )
          }}
          fullWidth
        />
        <HashIcon />
      </InputWrapper>
      <Prediction>
        {predictionLoading && (
          <LoaderWrapper>
            <CircularProgress size={15} />
          </LoaderWrapper>
        )}
        <span>{prediction}</span>
      </Prediction>
    </>
  );
};

export default MiningHashInput;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

const HashInput = styled(TextField)`
  background-color: ${p => p.theme.palette.background.control2};
  font-weight: lighter;

  input {
    padding: 12px 12px 10px;
    text-align: right;
  }
`;

const HashIcon = styled(Hash)`
  width: 27px;
  margin-left: 10px;
  color: ${p => p.theme.palette.text.secondary};
`;

const MaxButton = styled(Link)`
  font-size: 9px;
  cursor: pointer;
  color: ${p => p.theme.palette.text.primary};
`;

const LoaderWrapper = styled.div`
  background-color: ${p => p.theme.palette.background.paper};
  opacity: 0.8;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 2;
`;

const Prediction = styled.div`
  position: relative;
  font-size: 11px;
  padding-top: 8px;
  text-align: right;
`;
