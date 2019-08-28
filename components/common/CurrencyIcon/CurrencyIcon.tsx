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
import ZCash from "../../../static/currencies/ZCash.svg";

import HashMono from "../../../static/currencies/HashMono.svg";
import BitcoinMono from "../../../static/currencies/BitcoinMono.svg";
import LitecoinMono from "../../../static/currencies/LitecoinMono.svg";
import BitcoinCashMono from "../../../static/currencies/BitcoinCashMono.svg";
import EthereumMono from "../../../static/currencies/EthereumMono.svg";
import MoneroMono from "../../../static/currencies/MoneroMono.svg";
import CardanoMono from "../../../static/currencies/CardanoMono.svg";
import TronMono from "../../../static/currencies/TronMono.svg";
import DashMono from "../../../static/currencies/DashMono.svg";
import EthereumClassicMono from "../../../static/currencies/EthereumClassicMono.svg";
import ZCashMono from "../../../static/currencies/ZCashMono.svg";

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
  ETC: EthereumClassic,
  ZEC: ZCash
};

const CURRENCY_ICONS_MONO: { [name: string]: React.FC<IconProps> } = {
  HASH: HashMono,
  BTC: BitcoinMono,
  LTC: LitecoinMono,
  BCH: BitcoinCashMono,
  ETH: EthereumMono,
  XMR: MoneroMono,
  ADA: CardanoMono,
  TRX: TronMono,
  DASH: DashMono,
  ZEC: ZCashMono
};

interface Props {
  currency: Currency;
  monochrome?: boolean;
  className?: string;
}

const CurrencyIcon: React.FC<Props> = ({
  currency,
  monochrome,
  className
}): JSX.Element => {
  if (CURRENCY_ICONS.hasOwnProperty(currency)) {
    const Icon = monochrome
      ? CURRENCY_ICONS_MONO[currency]
      : CURRENCY_ICONS[currency];
    return <Icon className={className} />;
  }

  return null;
};

export default CurrencyIcon;
