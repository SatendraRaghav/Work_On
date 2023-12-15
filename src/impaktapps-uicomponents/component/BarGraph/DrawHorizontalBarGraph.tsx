import React from "react";
import { BarStackHorizontal } from "@visx/shape";
import { SeriesPoint } from "@visx/shape/lib/types";
import { Group } from "@visx/group";
// import { AxisBottom, AxisLeft } from "@visx/axis";
import  {
  CityTemperature,
} from "@visx/mock-data/lib/mocks/cityTemperature";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
// import { timeParse, timeFormat } from "@visx/vendor/d3-time-format";
import { withTooltip, Tooltip, defaultStyles } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import BottomAxis from "../BottomAxis";
import LeftAxis from "../LeftAxis";
import { BarStackHorizontalProps, CityName, TooltipData } from "../../interface/interface";


export default withTooltip<BarStackHorizontalProps, TooltipData>(
  ({
    width=600,
    height=400,
    events = false,
    margin,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
    barValue,
  }: BarStackHorizontalProps & WithTooltipProvidedProps<TooltipData>) => {
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;
    const tooltipStyles = {
      ...defaultStyles,
      padding: "12px",
      minWidth: 60,
      backgroundColor: "rgba(0,0,0,0.9)",
      color: "white",
    };
    const data: any[] = barValue?.main?.data;
    console.log(data);
    const keys = Object.keys(data[0]).filter((y) => y !== "y") as CityName[];

    const temperatureTotals = data.reduce((allTotals, currentDate) => {
      const totalTemperature = keys.reduce((dailyTotal, k) => {
        dailyTotal += Number(currentDate[k]);
        return dailyTotal;
      }, 0);
      allTotals.push(totalTemperature);
      return allTotals;
    }, [] as number[]);

    const getDate = (d: any) => d.y;

    // scales
    const temperatureScale = scaleLinear<number>({
      domain: [0, Math.max(...temperatureTotals)],
      nice: true,
    });
    const dateScale = scaleBand<string>({
      domain: data.map(getDate),
      padding: 0.2,
    });
    const colorScale = scaleOrdinal<CityName, string>({
      domain: keys,
      range: [barValue.style.barStyle.color],
    });

    let tooltipTimeout: number;
    temperatureScale.rangeRound([0, xMax]);
    dateScale.rangeRound([yMax, 0]);

    return width < 10 ? null : (
      <div>
        <svg width={width} height={height}>
          <rect
            width={width }
            height={height}
            // width={barValue?.style?.containerStyle?.width || 600}
            // height={barValue?.style?.containerStyle?.height || 400}
            fill={barValue?.style?.containerStyle?.background || "#eaedff"}
            rx={14}
          />
          <Group top={margin.top} left={margin.left}>
            <BarStackHorizontal<CityTemperature, CityName>
              data={data}
              keys={keys}
              height={yMax}
              y={getDate}
              xScale={temperatureScale}
              yScale={dateScale}
              color={colorScale}
            >
              {(barStacks) =>
                barStacks.map((barStack) =>
                  barStack.bars.map((bar) => (
                    <rect
                      key={`barstack-horizontal-${barStack.index}-${bar.index}`}
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.color}
                      onClick={() => {
                        if (events) alert(`clicked: ${JSON.stringify(bar)}`);
                      }}
                      onMouseLeave={() => {
                        tooltipTimeout = window.setTimeout(() => {
                          hideTooltip();
                        }, 300);
                      }}
                      onMouseMove={() => {
                        if (tooltipTimeout) clearTimeout(tooltipTimeout);
                        const top = bar.y + margin.top;
                        const left = bar.x + bar.width + margin.left;
                        showTooltip({
                          tooltipData: bar,
                          tooltipTop: top,
                          tooltipLeft: left,
                        });
                      }}
                    />
                  ))
                )
              }
            </BarStackHorizontal>
            <LeftAxis value={barValue} yScale={dateScale} parentWidth={500} />
            <BottomAxis
              data={data}
              value={barValue}
              yMax={yMax}
              xScale={temperatureScale}
              parentWidth={500}
            />
          </Group>
        </svg>
        {tooltipOpen && tooltipData && (
          <Tooltip top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
            <div style={{ marginBottom: "5px" }}>
              {tooltipData.bar.data[tooltipData.key]}
            </div>
            <div style={{ color: colorScale(tooltipData.key) }}>
              <strong>{getDate(tooltipData.bar.data)}</strong>
            </div>
          </Tooltip>
        )}
      </div>
    );
  }
);
