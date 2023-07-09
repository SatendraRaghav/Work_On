import React from "react";
import DrawLineGraph from "./DrawLineGraph";
import { finalDataProvider } from "../../utils/finalDataProvider";

const LineGraph = ({ value }:any) => {
  const lineData = finalDataProvider("LineGraph", value);
  return (
    <div style={lineData?.style?.containerStyle}>
      {lineData?.main?.header && (
        <div style={lineData?.style?.headerStyle}>{lineData?.main?.header}</div>
      )}
      <DrawLineGraph value={lineData} />
    </div>
  );
};

export default LineGraph;
