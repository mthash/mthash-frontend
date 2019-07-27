import * as React from "react";

import Currency from "~/models/types/Currency";

import Hash from "../../../static/currencies/Hash.svg";
import Bitcoin from "../../../static/currencies/Bitcoin.svg";
import Litecoin from "../../../static/currencies/Litecoin.svg";
import BitcoinCash from "../../../static/currencies/BitcoinCash.svg";
import Ethereum from "../../../static/currencies/Ethereum.svg";
import Monero from "../../../static/currencies/Monero.svg";
import Cardano from "../../../static/currencies/Cardano.svg";
import Tron from "../../../static/currencies/Tron.svg";
import Dash from "../../../static/currencies/Dash.svg";
import EthereumClassic from "../../../static/currencies/EthereumClassic.svg";

interface IconProps {
  className?: string;
}

const CURRENCY_ICONS: { [name: string]: React.FC<IconProps> } = {
  HASH: Hash,
  BTC: Bitcoin,
  LTC: Litecoin,
  BCH: BitcoinCash,
  ETH: Ethereum,
  XMR: Monero,
  ADA: Cardano,
  TRX: Tron,
  DASH: Dash,
  ETC: EthereumClassic
};

interface Props {
  currency: Currency;
  className?: string;
}

const CurrencyIcon: React.FC<Props> = ({
  currency,
  className
}): JSX.Element => {
  if (CURRENCY_ICONS.hasOwnProperty(currency)) {
    const Icon = CURRENCY_ICONS[currency];
    return <Icon className={className} />;
  }

  return null;
};

export default CurrencyIcon;
