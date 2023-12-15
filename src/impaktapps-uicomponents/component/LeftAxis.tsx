import React from 'react'
import { AxisLeft} from "@visx/axis";
import { leftAxisProps } from '../interface/interface';
const LeftAxis = ({value,yScale,parentWidth}:leftAxisProps) => {
  return (
    <AxisLeft
              numTicks={value.main?.numTicks}
              scale={yScale}
              top={0}
              label={value.main?.leftLabel}
              tickStroke={value.style?.labelStyle?.tickColor}
              strokeWidth={value.style?.labelStyle?.rightAxisWidth}
              hideTicks={value.main?.hideLeftTicks}
              labelOffset={value.style?.labelStyle?.leftLabelOffset}
              labelProps={{
                fill: value.style?.labelStyle?.labelColor,
                fontSize: value.style?.labelStyle?.fontSize,
                fontWeight: value.style?.labelStyle?.fontWeight,
                fontFamily: value.style?.labelStyle?.fontWeight,
              }}
              hideAxisLine={value.main?.hideLeftAxisLine}
              tickLabelProps={(e) => ({
                fill: value.style?.labelStyle?.tickLabelColor,
                fontSize:11,
                textAnchor: "end",
                dy: "0.33em"
              })}
            />
  )
}

export default LeftAxis