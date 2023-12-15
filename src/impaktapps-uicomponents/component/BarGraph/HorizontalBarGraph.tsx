import React from "react";
import { finalDataProvider } from "../../utils/finalDataProvider";
import DrawHorizontalBarGraph from "./DrawHorizontalBarGraph";
import { ParentSize } from "@visx/responsive";

const HorizontalBarGraph = ({ value,theme }:any) => {
  const barData:any = finalDataProvider("HorizontalBarGraph",value,theme)

  let GraphRender = (
    <ParentSize>
      {(parent:any) => (
        <DrawHorizontalBarGraph
          width={parent.width}
          height={parseInt(barData?.style?.containerStyle?.height||400)}
          margin= {{ top: barData?.style?.labelStyle?.margin?.top||10, right: barData?.style?.labelStyle?.margin?.right||10,bottom:  barData?.style?.labelStyle?.margin?.bottom||20 ,left: barData?.style?.labelStyle?.margin?.left||60 }}
          barValue={barData}
        />
      )}
    </ParentSize>
  );
  return <div style={barData.style.containerStyle}>
    {barData.main?.header && <div style={barData.style.headerStyle}>{barData?.main?.header}</div> }
    {GraphRender}
  </div>;
};
export default HorizontalBarGraph;