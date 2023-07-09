import React from "react";
import { useTooltipInPortal } from "@visx/tooltip";
import { tooltipProps } from "../interface/interface";
const ToolTip = ({ style, top, left, tooltipData }: tooltipProps) => {
  const { TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    scroll: true,
  });
  return (
    <TooltipInPortal 
     key={Math.random()} top={top} left={left}>
      <div
        style={{
          width: "70px",
          // paddingleft: "10px",
          height: "50px",
          textAlign:"center",
          background:"black",
         boxShadow:"2px 2px 5px black",
          color:"#6c5efb",
          padding:"5px",
          ...style?.tooltipStyle,
        }}
      >
        <div style={{paddingBottom:"2px",color:"white"}}>
        {tooltipData[0]}
        </div>
       
      
      <div style={{marginTop:"10px"}}>
        {tooltipData[1]}
      </div>
      </div>
    </TooltipInPortal>
  );
};

export default ToolTip;
