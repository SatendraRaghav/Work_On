import React from "react";
import { LegendOrdinal, LegendItem, LegendLabel } from "@visx/legend";
import { scaleOrdinal } from "@visx/scale";
export function Legend({ value ,colorRange,dataKeyArray}: any) {
  const legendGlyphSize = value?.main?.legend?.colorRectWidth || 15;
  const ordinalColorScale = scaleOrdinal({
    domain:dataKeyArray||value?.main?.tooltipDataKey,
    range: colorRange|| value?.style?.pieStyle?.colorRange,
  
  });
  return (
    <div className="legend" style={{paddingLeft:"40px",paddingRight:"40px",...value?.style?.legendStyle?.legend}}>
      <div className="title" style={value?.style?.legendStyle?.legendTitle}>
        {value?.main?.legend?.legendTitle}
      </div>
      <LegendOrdinal
        scale={ordinalColorScale}
        labelFormat={(label: any) => `${label.toUpperCase()}`}
      >
        {(labels) => (
          <div
            style={{
              display: "flex",
              flexDirection: value?.main?.legend?.direction || "row",
            }}
          >
            {labels.map((label: any, i: number) => (
              <LegendItem
                key={`legend-quantile-${i}`}
                margin="0 5px"
                onClick={(events) => {
               
                }}
              >
                <svg width={legendGlyphSize} height={legendGlyphSize}>
                  <rect
                    fill={label.value}
                    width={legendGlyphSize}
                    height={legendGlyphSize}
                  />
                </svg>
                <LegendLabel
                  align={`${value?.main?.legend?.align || "left"}`}
                  margin="0 0 0 4px"
                >
                  {label.text}
                </LegendLabel>
              </LegendItem>
            ))}
          </div>
        )}
      </LegendOrdinal>
    </div>
  );
}
export default Legend;
