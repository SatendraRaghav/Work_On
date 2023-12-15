export interface leftAxisProps {
    value: any
    yScale: any
    parentWidth: number
}
export interface bottomAxisProps {
   left?:number, data?: any[], yMax: number, value: any, xScale: any, parentWidth: number
}

export interface tooltipProps {
    style:any,
    top:any,left:any,tooltipData:any
}
export type BarGroupProps = {
    width: number;
    height: number;
    margin?: { top: number; right: number; bottom: number; left: number };
    events?: boolean;
    value:any
  };
export  type CityName = "v1" | "v2" | "v3";
export type TooltipData = {
    bar: any;
    key: CityName;
    index: number;
    height: number;
    width: number;
    x: number;
    y: number;
    color: string;
  };
  
  export type BarStackHorizontalProps = {
    width?: number;
    height?: number;
    margin: { top: number; right: number; bottom: number; left: number };
    events?: boolean;
    barValue: any;
  };