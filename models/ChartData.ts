export interface ChartPoint {
  x: string;
  y: number;
}

export default interface ChartData {
  id: string | number;
  data: ChartPoint[];
}
