import React from "react";
import DrawBarGraph from "./DrawBarGraph";
import { ParentSize } from "@visx/responsive";
import { finalDataProvider } from "../../utils/finalDataProvider";

const BarGraph = ({ value }:any) => {
  const barData:any = finalDataProvider("BarGraph",value)
  let GraphRender = (
    <ParentSize>
      {(parent) => (
        <DrawBarGraph
          parentWidth={parent.width}
          parentHeight={barData?.style?.containerStyle?.height}
          margin= {{ top: barData?.style?.labelStyle?.margin?.top||10, right: barData?.style?.labelStyle?.margin?.right||10,bottom:  barData?.style?.labelStyle?.margin?.bottom||20 ,left: barData?.style?.labelStyle?.margin?.left||60 }}
          value={barData}
          parentRef={parent.ref}
          resizeParent={parent.resize}
        />
      )}
    </ParentSize>
  );

  return <div style={{...barData?.style?.containerStyle}}>
    {barData?.main?.header && <div style={{ fontWeight: 500,
      textAlign: "left",
      fontFamily: "inherit",
      marginBottom:"20px",
      padding: "15px 0 1px 20px",
      fontSize: "18px",
      color: "#121926",...barData?.style?.headerStyle}}>{barData?.main?.header}</div> }
    {GraphRender}
  </div>;
};
export default BarGraph;