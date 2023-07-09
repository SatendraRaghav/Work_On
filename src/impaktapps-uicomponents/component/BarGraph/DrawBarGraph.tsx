import React from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { defaultStyles,useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import ToolTip from "../ToolTip";
import BottomAxis from "../BottomAxis";
import LeftAxis from "../LeftAxis";

const DrawBarGraph = ({
  value,
  parentWidth,
  parentHeight,
margin
}: any) => {
  const data:any[] = value?.main?.data;
  const arr =
    value.main?.xAxisValue && value.main?.yAxisValue
      ? [value.cosntent.xAxisValue, value.main?.yAxisValue]
      : Object.keys(data[0]);
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  }: any = useTooltip();
  const { containerRef } = useTooltipInPortal({
    detectBounds: true,
    scroll: true,
  });
  const handleMouse = (event: any, datum: any) => {
    showTooltip({
      tooltipLeft: event.clientX,
      tooltipTop: event.clientY,
      tooltipData: [datum[arr[0]], datum[arr[1]]],
    });
  };
  const xMax:number = parentWidth - margin.left - margin.right;;
  const yMax:number = parentHeight - margin.top - margin.bottom;
  const x = (d: any) => d[arr[0]];
  const y = (d: any) => +d[arr[1]];
  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    padding: 0.4,
  });
  const tempValue = data.reduce((total: any, curValue: any) => {
    return total + curValue[arr[1]];
  }, 0);
  let averageValue = tempValue / data.length;
  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))],
  });
  function compose(scale: any, accessor: any) {
    return (data: any) => scale(accessor(data));
  }
  const xPoint = compose(xScale, x);

  const yPoint = compose(yScale, y);
  return (
    <>
      <svg ref={containerRef} width={parentWidth} height={parentHeight}>
        <Group
          left={value.style?.labelStyle?.leftLabelMargin}
          top={value.style?.labelStyle?.topLabelMargin}
        >
          {value.main?.axisLeft && (
            <LeftAxis value={value} yScale={yScale} parentWidth={parentWidth} />
          )}
          {data.map((d: any) => {
            const barHeight = yMax - yPoint(d);
            const fillBarColor =
              averageValue / 2 > d[arr[1]]
                ? value.style?.barStyle?.lowValueColor
                : averageValue < d[arr[1]]
                ? value.style?.barStyle?.highValueColor
                : value.style?.barStyle?.mediumValueColor;
            return (
              <>
                <Bar
                  key={`bar-${barHeight}`}
                  x={xPoint(d)}
                  y={yMax - barHeight}
                  radius={value.style?.barStyle?.barRadius || 0}
                  height={barHeight}
                  width={xScale.bandwidth()}
                  fill={fillBarColor}
                  onMouseOver={(e) => handleMouse(e, d)}
                  onMouseOut={hideTooltip}
                />
              </>
            );
          })}
          {value.main?.axisBottom && (
            <BottomAxis
              data={data}
              value={value}
              yMax={yMax}
              xScale={xScale}
              parentWidth={parentWidth}
            />
          )}
        </Group>
      </svg>
      {tooltipOpen && (
        <ToolTip
          style={{...value?.style}}
          top={tooltipTop}
          left={tooltipLeft}
          tooltipData={tooltipData}
        />
      )}
    </>
  );
};

export default DrawBarGraph;
