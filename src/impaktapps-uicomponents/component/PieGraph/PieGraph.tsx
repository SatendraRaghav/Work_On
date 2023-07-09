import React from "react";
import DrawPieGraph from "./DrawPieGraph";
import { ParentSize } from "@visx/responsive";
import { finalDataProvider } from "../../utils/finalDataProvider";

const PieGraph = ({ value }: any) => {
  const pieData: any = finalDataProvider("PieGraph", value);
  let PieRender = (
    <ParentSize>
      {(parent) => (
        <DrawPieGraph
          parentWidth={parent.width}
          parentHeight={parseInt(pieData.style.containerStyle.height)}
          //@ts-ignore
          parentRef={parent.ref}
          resizeParent={parent.resize}
          value={pieData}
        />
      )}
    </ParentSize>
  );
  return (
    <div style={pieData.style.containerStyle}>
      {pieData?.main?.header && <div style={pieData.style.headerStyle}>{pieData?.main?.header}</div>}
      {PieRender}
    </div>
  );
};

export default PieGraph;
