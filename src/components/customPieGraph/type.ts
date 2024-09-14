export interface GraphInputType {
  subject: string;
  faults: number;
  maxFaults: number;
  fill: string;
}
export interface ChartDataType {
  chartData: GraphInputType[];
}
