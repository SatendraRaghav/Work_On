import React from "react";
import { Group } from "@visx/group";
import { scaleOrdinal } from "@visx/scale";
import { Pie } from "@visx/shape";
import { Text } from "@visx/text";
import { useTooltip } from "@visx/tooltip";
import Legend from "../Legend";
import ToolTip from "../ToolTip";

const DrawPieGraph = ({ value, parentWidth, parentHeight }: any) => {
  const letters = value?.main?.data;
  const arr =
    value?.main?.xAxisValue && value?.main?.yAxisValue
      ? [value?.main?.xAxisValue, value?.main?.yAxisValue]
      : Object.keys(letters[0]);
  const frequency = (d: any) => d[arr[1]];
  const getLetterFrequencyColor = scaleOrdinal({
    domain: letters.map((l:[any]) => l[arr[0]]),
    range: value?.style?.pieStyle?.colorRange,
  });

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  }: any = useTooltip();
  const handleMouse = (event: any, datum: any) => {
    showTooltip({
      tooltipLeft: event.clientX,
      tooltipTop: event.clientY,
      tooltipData: [datum[arr[0]], datum[arr[1]]],
    });
  };

  const innerWidth = parentWidth - 40;
  const innerHeight = parentHeight - 40;
  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;
  const left = centerX + 20;
  const top = centerY + 20;
  const pieSortValues = (a: number, b: number) => a - b;
  return (
    <>
      {value?.main?.legendAvailable && (
        <Legend
          value={value}
        />
      )}
      <svg
        width={parentWidth}
        height={parentHeight}
        className="pieGraphContainer"
      >
        <Group top={top} left={left}>
          <Pie
            data={letters}
            pieSortValues={pieSortValues}
            pieValue={frequency}
            outerRadius={value?.style?.pieStyle?.outerRadius}
            innerRadius={value?.style?.pieStyle?.innerRadius}
            cornerRadius={value?.style?.pieStyle?.cornerRadius}
            padAngle={value?.style?.pieStyle?.padAngle}
          >
            {(pie) => {
              return pie.arcs.map((arc, index) => {
                const letter = value?.style?.pieStyle?.showPieLabel?arc.data[arr[0]]:arc.data[arr[1]];
                const [centriodX, centriodY] = pie.path.centroid(arc);
                const arcPath = pie.path(arc);
                const arcFill: any = getLetterFrequencyColor(letter);
                return (
                  <g
                    key={`arc-${letter}-${index}`}
                    onMouseOut={hideTooltip}
                    onMouseOver={(e) => handleMouse(e, arc.data)}
                    className="pieTooltipHolder"
                  >
                   
                    <path
                     //@ts-ignore
                    d={arcPath} fill={arcFill} />
                    <Text
                      x={centriodX}
                      y={centriodY}
                      dy={"0.33em"}
                      fontSize={14}
                      fill={ value?.style?.pieStyle?.pieLabelColor||"white"}
                      textAnchor={"middle"}
                      pointerEvents={"none"}
                    >
                      {letter}
                    </Text>
                  </g>
                );
              });
            }}
          </Pie>
        </Group>
      </svg>
      {tooltipOpen && (
        <ToolTip
          style={value?.style}
          top={tooltipTop}
          left={tooltipLeft}
          tooltipData={tooltipData}
        />
      )}
    </>
  );
};
export default DrawPieGraph;
