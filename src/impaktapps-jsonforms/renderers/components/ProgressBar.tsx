import React,{useEffect, useState} from 'react'
//@ts-ignore
// import { ProgressBar } from "impaktapps-uicomponents";
import { ProgressBar } from '../../../impaktapps-uicomponents/lib';

const ImpaktApps_ProgressBar = (props:any) => {
    const { uischema,data } = props;
    const uischemaData = uischema.config;
    const [graphData, setGraphData] = useState({ main:{...uischemaData.main, data: {total:0,achieved:0,bottomLabel_3_value:0}}});
    useEffect(() => {
        setGraphData({ main:{...uischemaData.main, data:data?data:{total:0,achieved:0,bottomLabel_3_value:0}}});
    }, [data]);
  return (
   <ProgressBar 
    value={graphData}
    // value={{ main:{heading:"jjjjj",bottomLabel_3:"Remaining", data: {total:500,achieved:300,bottomLabel_3_value:200}}}}
 />
  )
}

export default ImpaktApps_ProgressBar
