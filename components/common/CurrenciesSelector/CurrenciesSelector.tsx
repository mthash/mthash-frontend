import * as React from "react";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import TextField from "~/components/common/TextField";
import Currency from "~/models/Currency";

import CurrencyItem from "./CurrencyItem";

interface Props {
  selected: Currency;
  currencies: Currency[];
  onChange: (Currency) => void;
}

const SelectedCurrency = props => {
  return <SelectedItem {...props} />;
};

const CurrenciesSelector: React.FC<Props> = ({
  selected,
  onChange,
  currencies
}): JSX.Element => {
  return (
    <Select
      value={selected}
      onChange={onChange}
      input={<SelectorInput name="currency" variant="filled" fullWidth />}
      variant="standard"
      fullWidth
      renderValue={SelectedCurrency}
    >
      {currencies &&
        currencies.map(
          (currency: Currency): JSX.Element => {
            return (
              <CurrencyMenuItem key={currency.id} value={currency as any}>
                <CurrencyItem {...currency} />
              </CurrencyMenuItem>
            );
          }
        )}
    </Select>
  );
};

export default CurrenciesSelector;

const SelectedItem = styled(CurrencyItem)`
  padding: 0;
`;

const CurrencyMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SelectorInput = styled(TextField)`
  padding: 0;

  .MuiSelect-select {
    display: flex;
    padding: 12px;
    min-height: 33px;
  }
`;
