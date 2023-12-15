import React from "react";
import { Group } from "@visx/group";
import { BarGroup } from "@visx/shape";
import { BarStack } from "@visx/shape";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import LeftAxis from "../LeftAxis";
import { useTooltipInPortal,defaultStyles } from "@visx/tooltip";
import BottomAxis from "../BottomAxis";
import { BarGroupProps } from "../../interface/interface";
import { useTooltip } from "@visx/tooltip";
import ToolTip from "../ToolTip";
import Legend from "../Legend";

type barValuesType = any;
const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: "rgba(0,0,0,0.9)",
  color: "white"
};
const defaultMargin = { top: 20, right: 0, bottom: 40, left:40  };
export default function DrawBarGraph({
  width,
  height,
  events = false,
  margin = defaultMargin,
  value
}: BarGroupProps) {
    const data:any[] = value.main?.data;
const keys = Object.keys(data[0]).filter((d) => d !== "label") as barValuesType[];

// accessors
const getDate = (d: any) => d.label;
const temperatureTotals = data.reduce((allTotals, currentDate) => {
  const totalTemperature = keys.reduce((dailyTotal, k) => {
    dailyTotal += Number(currentDate[k]);
    return dailyTotal;
  }, 0);
  allTotals.push(totalTemperature);
  return allTotals;
}, [] as number[]);
// scales
const dateScale = scaleBand<string>({
  domain: data.map(getDate),
  padding: 0.2
});
const cityScale = scaleBand<string>({
  domain: keys,
  padding: 0.1
});
const tempScale = scaleLinear<number>({
  domain:value?.main?.type === "StackBarGraph"?
  [0,Math.max(...temperatureTotals)]:
  [
    0,
    Math.max(...data.map((d:any) => Math.max(...keys.map((key) => Number(d[key])))))
  ]
  ,
  nice:true

});
const colorScale = scaleOrdinal<string, string>({
  domain: keys,
  range: [value.style?.barStyle?.color?.firstBarColor||"#aeeef8" ,
  value.style?.barStyle?.color?.secondBarColor||"#e5fd3d" , 
  value.style?.barStyle?.color?.thirdBarColor||"#9caff6" ]
});
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom - 0;

  // update scale output dimensions
  dateScale.rangeRound([0, xMax]);
  cityScale.rangeRound([0, dateScale.bandwidth()]);
  tempScale.range([yMax, 0]);
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  }: any = useTooltip();
  const handleMouse = (event: any, datum: any) => {
    console.log(datum)
    showTooltip({
      tooltipLeft: event.clientX,
      tooltipTop: event.clientY,
      tooltipData:[datum.key,datum.value,datum.color],
    
    });
  };
  const {TooltipInPortal,  containerRef} = useTooltipInPortal({
    detectBounds: true,
    scroll: true,
  });
  const stackhHandleMouse = (event: any, datum: any) => {
    showTooltip({
      tooltipLeft: datum.x+(datum.width/2),
      tooltipTop: datum.y+(datum.height/2),
      tooltipData:{label:datum.bar.data.label,key:datum.key,value:datum.bar.data[datum.key],color:datum.color}
    
    });
  };
  return width < 10 ? null : (
    <div style={{  }}>
      
    <svg ref={containerRef} width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={value.style.containerStyle.background||"#612efb"}
        rx={14}
      />    
      <Group top={margin.top} left={margin.left}>
      <LeftAxis value={value} yScale={tempScale} parentWidth={width} />
      {
      value?.main?.type === "StackBarGraph"?
      <BarStack<any, any>
            data={data}
            keys={keys}
            x={getDate}
            xScale={dateScale}
            yScale={tempScale}
            color={colorScale}
          >
            {(barStacks) =>
              barStacks.map((barStack) =>
                barStack.bars.map((bar) => (
                  <rect
                    key={`bar-stack-${barStack.index}-${bar.index}`}
                    x={bar.x}
                    y={bar.y}
                    height={bar.height}
                    width={bar.width}
                    fill={bar.color}
                    onClick={() => {
                      if (events) alert(`clicked: ${JSON.stringify(bar)}`);
                    }}
                    onMouseOver={(e) => stackhHandleMouse(e, bar)}
                   onMouseOut={hideTooltip}
                
                  />
                )),
              )
            }
          </BarStack> :
        <BarGroup
          data={data}
          keys={keys}
          height={yMax}
          x0={getDate}
          x0Scale={dateScale}
          x1Scale={cityScale}
          yScale={tempScale}
          color={colorScale}
        >
          {(barGroups) =>
            barGroups.map((barGroup) => (
              <Group
                key={`bar-group-${barGroup.index}-${barGroup.x0}`}
                left={barGroup.x0}
              >
                {barGroup.bars.map((bar) => (
                  <rect
                    key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={bar.color}
                    rx={4}
                    onMouseOver={(e) => handleMouse(e, bar)}
                    onMouseOut={hideTooltip}
                    onClick={() => {
                      if (!events) return;
                      const { key, value } = bar;
                      alert(JSON.stringify({ key, value }));
                    }}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroup>
}
      </Group>
   <BottomAxis 
   yMax={yMax + margin.top}
   value={value}
   left={margin.left}
   xScale={dateScale}
   parentWidth={width}
   />

    </svg>
    {value?.main?.legendAvailable && keys.length >1 &&
        <Legend
        dataKeyArray={keys}
        colorRange={[value.style?.barStyle?.color?.firstBarColor||"#aeeef8" ,
        value.style?.barStyle?.color?.secondBarColor||"#e5fd3d" , 
        value.style?.barStyle?.color?.thirdBarColor||"#9caff6" ]}
         value={value}
        />
     } 
    {  
     value?.main?.type === "StackBarGraph"?
      tooltipOpen && tooltipData && (
        <TooltipInPortal
        top={tooltipTop}
        left={tooltipLeft}
        style={tooltipStyles}
      >
        <div style={{ color:tooltipData.color,marginBottom:"10px",width:"100%",padding:"2px 1px",borderBottom:"1px solid gray" }}>
          <strong>{tooltipData.label}</strong>
        </div>
        <div style={{padding:"1px 1px 5px 5px"}}>{tooltipData.key}</div>
        <div style={{padding:"1px 1px 5px 5px"}}>
          <small>{tooltipData.value}</small>
        </div>
      </TooltipInPortal>
      ):
    tooltipOpen &&
        <ToolTip
          style={{...value?.style,tooltipbackground:tooltipData[2]}}
          top={tooltipTop}
          left={tooltipLeft}
          tooltipData={tooltipData}
        />
        }
  </div>
  );
}
