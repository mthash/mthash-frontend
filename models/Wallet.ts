import Currency from "~/models/types/Currency";

export default interface Wallet {
  id: number;
  user_id: number;
  address: string;
  asset_id: number;
  balance: string;
  balanceUSD: string;
  currency: Currency;
  name: string;
  private_key: string;
  public_key: string;
  status: number;
  share: number;
  updated_at: null;
  created_at: number;
  deleted_at: number;
}
