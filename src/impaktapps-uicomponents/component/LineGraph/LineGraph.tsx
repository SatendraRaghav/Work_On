import React from "react";
import DrawLineGraph from "./DrawLineGraph";
import { finalDataProvider } from "../../utils/finalDataProvider";
import { ParentSize } from "@visx/responsive";

const LineGraph = ({ value,theme }:any) => {
  const lineData = finalDataProvider("LineGraph", value,theme);
  let LineRender = (
    <ParentSize>
      {(parent) => (
        <DrawLineGraph
          parentWidth={parent.width}
          parentHeight={parseInt(lineData.style.containerStyle.height)}
          //@ts-ignore
          parentRef={parent.ref}
          resizeParent={parent.resize}
          value={lineData}
        />
      )}
    </ParentSize>
  );
  return (
    <div style={{...lineData?.style?.containerStyle}}>
      {lineData?.main?.header && (
        <div style={lineData?.style?.headerStyle}>{lineData?.main?.header}</div>
      )}
      {LineRender}
      {/* <DrawLineGraph value={lineData} /> */}
    </div>
  );
};

export default LineGraph;
