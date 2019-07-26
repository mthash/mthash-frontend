import CurrencyType from "~/models/types/Currency";

export default interface Currency {
  block_generation_time: number;
  block_reward_amount: number;
  can_mine: number;
  cmc_id: number;
  created_at: number;
  deleted_at: number;
  hash_invested: number;
  id: number;
  last_block_id: number;
  logo_url: string;
  mineable: number;
  name: string;
  price_usd: number;
  shares: number;
  status: number;
  symbol: CurrencyType;
  total_hashrate: number;
  updated_at: number;
}
