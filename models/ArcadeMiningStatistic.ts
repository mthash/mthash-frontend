export interface ArcadeMiningItem {
  value: string | number;
  unit: string;
  shift: number;
}

export default interface ArcadeMiningStatistic {
  id: number;
  currency: string;
  revenue: ArcadeMiningItem;
  hashrate: ArcadeMiningItem;
  mining: ArcadeMiningItem;
  balance: ArcadeMiningItem;
}
