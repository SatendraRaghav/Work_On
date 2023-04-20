import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import { useRef } from "react";




const CustomProgressBar = ({ Data }: any) => {
  const workDonePercentage = (600 / 1000) * 100;
  let workSatement = `Your ${workDonePercentage}% work done.`;
  const transitionStyles: any = {
    entering: { width: `${workDonePercentage}%` },
    entered: { width: `${workDonePercentage}%` },
  };
  const defaultStyle = {
    ...Data.style.barStyle
  };
  useEffect(() => {
    setInProp(true);
  }, []);
  const [inProp, setInProp] = useState(false);
  return (
    <Box sx={{ width: "100%", height: "20px", backgroundColor: "#272953", ...Data.style.barHolderStyle }}>
      <Transition in={inProp} timeout={2000}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
           <div style={{lineHeight:`${Data.style.barHolderStyle.height||"20px"}`}}> {workSatement}</div>
          </div>
        )}
      </Transition>
    </Box>
  );
};

export default CustomProgressBar;
