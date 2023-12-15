import React from "react";
import DrawBarGraph from "./DrawBarGraph";
import { ParentSize } from "@visx/responsive";
import { finalDataProvider } from "../../utils/finalDataProvider";

const BarGraph = ({ value,theme}:any) => {
  const barData:any = finalDataProvider(value?.main?.type,value,theme)
  let GraphRender = (
    <ParentSize>
      {(parent) => (
        <DrawBarGraph
          width={parent.width||400}
          height={barData?.style?.containerStyle?.height|400}
          margin= {{ top: barData?.style?.labelStyle?.margin?.top||10, right: barData?.style?.labelStyle?.margin?.right||10,bottom:  barData?.style?.labelStyle?.margin?.bottom||20 ,left: barData?.style?.labelStyle?.margin?.left||60 }}
          value={barData}
        />
      )}
    </ParentSize>
  );

  return <div style={barData?.style?.containerStyle}>
    {barData?.main?.header && <div style={{ fontWeight: 500,...barData?.style?.headerStyle}}>{barData?.main?.header}</div> }
    {GraphRender}
  </div>;
};
export default BarGraph;