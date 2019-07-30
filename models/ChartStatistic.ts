import Trend from "~/models/types/Trend";

export default interface ChartStatistic {
  value: string | number;
  caption: string;
  trend?: Trend;
}
