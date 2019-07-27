export interface OverviewStatisticWithUnit {
  value: number;
  unit: string;
}

export default interface OverviewMiningStatistic {
  pools: number;
  algorithms: number;
  tokens: number;
  daily_revenue: OverviewStatisticWithUnit;
  power: OverviewStatisticWithUnit;
}
