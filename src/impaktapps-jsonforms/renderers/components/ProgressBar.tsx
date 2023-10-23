import React,{useEffect, useState} from 'react'
//@ts-ignore
import { ProgressBar } from "impaktapps-design";
import { useTheme } from '@mui/material';


const ImpaktApps_ProgressBar = (props:any) => {
    const { uischema,data } = props;
    const uischemaData = uischema.config;
    const [graphData, setGraphData] = useState({ main:{...uischemaData.main, data: {total:0,achieved:0,bottomLabel_3_value:0}}});
    useEffect(() => {
        setGraphData({ main:{...uischemaData.main, data:data?data:{total:0,achieved:0,bottomLabel_3_value:0}}});
    }, [data]);
    const theme = useTheme()
  return (
   <ProgressBar 
   theme={theme}
    value={graphData}
 />
  )
}

export default ImpaktApps_ProgressBar
