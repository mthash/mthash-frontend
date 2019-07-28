import * as React from "react";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Currency from "~/models/Currency";

interface Props {
  currencies: Currency[];
  selected?: Currency;
  onChange?: (Currency) => void;
  className?: string;
}

const SimpleCurrenciesSelector: React.FC<Props> = ({
  selected,
  onChange,
  currencies,
  className
}): JSX.Element => {
  return (
    <Select
      value={selected}
      onChange={onChange}
      fullWidth
      className={className}
    >
      {currencies &&
        currencies.map(
          (currency: Currency): JSX.Element => {
            return (
              <CurrencyMenuItem key={currency.id} value={currency as any}>
                {currency.name}
              </CurrencyMenuItem>
            );
          }
        )}
    </Select>
  );
};

export default SimpleCurrenciesSelector;

const CurrencyMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 15px;
`;
