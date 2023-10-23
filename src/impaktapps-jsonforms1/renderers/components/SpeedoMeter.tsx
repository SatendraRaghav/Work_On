import React,{useEffect, useState} from 'react'
//@ts-ignore
// import { ProgressBar } from "impaktapps-uicomponents";
import { SpeedoMeter } from '../../../impaktapps-uicomponents/lib';

const ImpaktApps_SpeedoMeter = (props:any) => {
    const { uischema,data } = props;
    const uischemaData = uischema.config;
    // const [graphData, setGraphData] = useState(uischemaData);
    // useEffect(() => {
    //     setGraphData({ main:{...uischemaData.main, data:data?data:{value:250,minValue:0,maxvalue:500}},style:{...uischemaData.style}});
    // }, [data]);
  return (
   <SpeedoMeter 
    value={{ main:{...uischemaData.main, data:data?data:{value:250,minValue:0,maxvalue:500}},style:{...uischemaData.style}}}
 />
  )
}

export default ImpaktApps_SpeedoMeter