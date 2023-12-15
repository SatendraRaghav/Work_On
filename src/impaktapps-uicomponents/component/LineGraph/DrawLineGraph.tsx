import React from "react";
import {
  AnimatedAxis,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  AnimatedGrid
} from "@visx/xychart";
import Legend from "../Legend";
const DrawGraph = ({ value,parentWidth, parentHeight }:any) => {
  const data = value?.main?.data;
  const arr = (value.main.xAxisValue && value.main.yAxisValue) ? [value.main.xAxisValue,value.main.yAxisValue] : Object.keys(data[0][0]);
  const accessors = { xAccessor: (d:any) => d[arr[0]], yAccessor: (d:any) => d[arr[1]] };


  return (
    <div>
    {value.main.legendAvailable && 
    <Legend  value={value}
    colorRange={value?.style?.lineStyle?.colorRange}/>
    }
    <XYChart width={parentWidth} height={parentHeight} xScale={{ type: "band" }} yScale={{ type: "linear" }}>
      <AnimatedAxis orientation="left" hideAxisLine={value.main.hideLeftAxisLine}
       label={value.main.leftLabel}
       left={value.style?.labelStyle?.leftLabelMargin||70} 
       labelOffset={value.style?.labelStyle?.leftLabelOffset||32} 
      //  fill={value.style?.labelStyle?.labelColor}
       labelProps={{
        fill: value.style?.labelStyle?.labelColor,
        fontSize:value.style?.labelStyle?.fontSize
      }}
      tickLabelProps={(e) => ({
        fill: value.style?.labelStyle?.labelColor})}
       />
      <AnimatedAxis orientation="bottom" hideAxisLine={value.main.hideBottomAxisLine} 
      label={value.main.bottomLabel}
      labelProps={{
        fill: value.style?.labelStyle?.labelColor,
        fontSize:value.style?.labelStyle?.fontSize
      }}
      tickLabelProps={(e) => ({
        fill: value.style?.labelStyle?.labelColor})}
        labelOffset={value.style?.labelStyle?.bottomLabelOffset||32}
      // fill={value.style?.labelStyle?.labelColor}
       />
      <AnimatedGrid
       columns={value.main.grid} 
       numTicks={value.main.numHidden?0:value.main?.data[0].length-1} />
      {
        value.main?.data.map((elem:any, i:number) => {
          return (
            <AnimatedLineSeries
              dataKey={value.main.tooltipDataKey[i]}
              data={elem}
            fill={value.style?.lineStyle?.lineAreaColor}
            fillOpacity={value.style?.lineStyle?.lineAreaOpacity}
            
            floodColor={"green"}
            floodOpacity={1}
              stroke={value.style?.lineStyle?.colorRange[i]}
              {...accessors}
            />)
        })
      }
      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair  
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }:any) => (
             //@ts-ignore
           <div>
         
            <div style={{
              color:colorScale(tooltipData.nearestDatum.key) }}>
              {tooltipData?.nearestDatum?.key}
            </div>
            {accessors.xAccessor(tooltipData?.nearestDatum?.datum)}
            {accessors.yAccessor(tooltipData?.nearestDatum?.datum)}
          </div>
        )}
      />
    </XYChart></div>
  );
};

export default DrawGraph;
