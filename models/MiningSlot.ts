import { ChartPoint } from "./ChartData";
import Currency from "./types/Currency";
import Trend from "./types/Trend";

export default interface MiningSlot {
  id: number;
  currency: Currency;
  algorithm: string;
  value: string;
  unit: string;
  shift: number;
  miningValue: string;
  chartData: {
    id: string | number;
    trend: Trend;
    data: ChartPoint[];
  };
}
