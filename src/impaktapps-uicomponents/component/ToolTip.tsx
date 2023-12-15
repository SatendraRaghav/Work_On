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
     key={Math.random()}
      top={top} left={left}
      >
      <div
        style={{
        minWidth:60,
          textAlign:"center",
          background:"black",
          padding:"10px",
         boxShadow:"2px 2px 5px black",
          color:"#6c5efb",
          backgroundColor:"black",
          ...style?.tooltipStyle,
          margin:"-20px",
        }}
      >
        <div style={{padding:"4px 10px",color:style?.tooltipbackground||"white",borderRadius:"5px",fontWeight:700}}>
        {tooltipData[0]}
        </div>
       
      
      <div style={{padding:"4px 10px",borderRadius:"5px",marginTop:"10px",fontWeight:700}}>
        {tooltipData[1]}
      </div>
      </div>
    </TooltipInPortal>
  );
};

export default ToolTip;
