import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/Context";
import { inputProps } from "../interface/inputfieldProps";

const AnimatedLabel = ({ uischema, path }: inputProps) => {
  const uischemaData = uischema?.config?.main;
  const [inter, setInter] = useState<any>();
  const [label, setLabel] = useState(uischemaData.prvLabel);
  const { theme } = useContext(DataContext);
//   useEffect(()=>{
//     setLabel(uischemaData.prvLabel)
//   },[uischemaData.prvLabel])
  useEffect(() => {
    label === uischemaData.label && clearInterval(inter);
    () => {
      return clearInterval(inter);
    };
  }, [label]);
  useEffect(()=>{
    setInter(
        setInterval(() => {
            // uischemaData.increase?
            // setLabel((pre:number) => pre +1):
            setLabel((pre:number) => pre -1);
        }, 250))
  },[])
  return (
    <div>
      <Typography
        sx={{
          ...theme?.BoxStyle,
          ...uischema?.config?.style,
        }}
        variant={uischemaData?.variant}
      >
        {label}
      </Typography>
    </div>
  );
};

export default AnimatedLabel;
