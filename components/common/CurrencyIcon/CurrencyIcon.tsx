import * as React from "react";

import Bitcoin from "../../../static/currencies/Bitcoin.svg"; // "~/static/currencies/Bitcoin.svg";
import Litecoin from "../../../static/currencies/Litecoin.svg";
import BitcoinCash from "../../../static/currencies/BitcoinCash.svg";
import Ethereum from "../../../static/currencies/Ethereum.svg";
import Monero from "../../../static/currencies/Monero.svg";
import Currency from "~/models/types/Currency";

const CURRENCY_ICONS: { [name: string]: React.FC } = {
  BTC: Bitcoin,
  LTC: Litecoin,
  BCH: BitcoinCash,
  ETH: Ethereum,
  XMR: Monero
};

interface Props {
  currency: Currency;
}

const CurrencyIcon: React.FC<Props> = ({ currency }): JSX.Element => {
  if (CURRENCY_ICONS.hasOwnProperty(currency)) {
    const Icon = CURRENCY_ICONS[currency];
    return <Icon />;
  }

  return null;
};

export default CurrencyIcon;
