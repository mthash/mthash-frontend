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

const CurrenciesSelector: React.FC<Props> = ({
  selected,
  onChange,
  currencies
}): JSX.Element => {
  return (
    <Select
      value={selected}
      onChange={onChange}
      input={<TextField name="currency" variant="filled" fullWidth />}
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

const CurrencyMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
