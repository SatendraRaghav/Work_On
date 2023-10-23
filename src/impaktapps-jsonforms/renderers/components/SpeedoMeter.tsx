import React,{useEffect, useState} from 'react'
//@ts-ignore
import { SpeedoMeter } from "impaktapps-design";
import { useTheme } from '@mui/material';

const ImpaktApps_SpeedoMeter = (props:any) => {
    const { uischema,data } = props;
    const uischemaData = uischema.config;
    const theme = useTheme()
  return (
   <SpeedoMeter 
   theme={theme}
   value={{ main:{...uischemaData.main, data:data?data:{value:250,minValue:0,maxvalue:500}},style:{...uischemaData.style}}}
 />
  )
}

export default ImpaktApps_SpeedoMeter