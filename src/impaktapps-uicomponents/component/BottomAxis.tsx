import React from 'react'
import { AxisBottom } from "@visx/axis";
import { bottomAxisProps } from '../interface/interface';
import "../Style/style.css"
const BottomAxis = ({data,yMax,value,xScale,parentWidth,left}:bottomAxisProps) => {
  
  return (
    <>
    {/* <BrowserView> */}
    <AxisBottom
    numTicks={data?.length}
    top={yMax}
    left={left}
    labelClassName='axisBottom'
    tickClassName='axisBottom'
    axisClassName='axisBottom'
    // className="axisBottom"
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
      display:innerWidth<600?"none":"inline-block",
      fill: value.style?.labelStyle?.tickLabelColor,
      fontSize: value.style?.labelStyle?.tickFontSize ||11,
      textAnchor: "middle",
    })}
  />
  {/* </BrowserView> */}
  {/* <MobileView>
  <AxisBottom
    numTicks={data?.length}
    top={yMax}
    left={left}
    hideTicks={true||value.main?.hideTicks}
  
    hideAxisLine={true||value.main?.hideBottomAxisLine}
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
      display:"none",
      fill: value.style?.labelStyle?.tickLabelColor,
      fontSize: value.style?.labelStyle?.tickFontSize ||11,
      textAnchor: "middle",
    })}
  />
  </MobileView> */}
  </>
  )
}
export default BottomAxis