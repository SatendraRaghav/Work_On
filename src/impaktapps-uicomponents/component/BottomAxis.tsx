import React from 'react'
import { AxisBottom } from "@visx/axis";
import { bottomAxisProps } from '../interface/interface';
const BottomAxis = ({data,yMax,value,xScale,parentWidth}:bottomAxisProps) => {
  
  return (
    <AxisBottom
    numTicks={data.length}
    top={yMax}
    hideTicks={value.main?.hideTicks}
    hideAxisLine={value.main?.hideBottomAxisLine}
    strokeWidth={value.style?.labelStyle?.bottomAxisWidth}
    scale={xScale}
    stroke={value.style?.labelStyle?.tickColor}
    labelOffset={value.style?.labelStyle?.bottomLabelOffset}
    label={value.main?.bottomLabel}
    labelProps={{
      fill: value.style?.labelStyle?.labelColor,
      fontSize: value.style?.labelStyle?.fontSize,
      fontWeight: value.style?.labelStyle?.fontWeight,
      fontFamily: value.style?.labelStyle?.fontWeight,
    }}
    tickStroke={value.style?.labelStyle?.tickColor}
    tickLabelProps={() => ({
      fill: value.style?.labelStyle?.tickLabelColor,
      fontSize: value.style?.labelStyle?.tickFontSize ||11,
      textAnchor: "middle",
    })}
  />
  )
}
export default BottomAxis