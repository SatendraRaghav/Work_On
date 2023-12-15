import React, { useEffect, useState } from "react";
import {Box} from "@mui/material"

const CustomTimer = ({ value }) => {
  let {uischema , data } = value;
  const uischemaStyle = uischema?.config?.style;
  const [days, setDays] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [hour, setHours] = useState(0);
  const [interval, setInter] = useState<any>();
  
  useEffect(() => {
    
    if ((data?.startDate && data?.endDate) &&  ( new Date(data?.startDate).getTime() <= new Date(data?.endDate).getTime() ) && (new Date().getTime() >= new Date(data?.startDate).getTime()) && ( new Date().getTime() <= new Date(data?.endDate).getTime()))
    {
      let currentDate = new Date();
      const Difference_In_Time = new Date(data?.endDate).getTime() - currentDate.getTime();
      const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      setDays(Math.floor(Difference_In_Days));
      setInter(
        setInterval(() => {
          const currdate = new Date();
          setHours(currdate.getHours());
          setMin(currdate.getMinutes());
          setSec(currdate.getSeconds());
        }, 1000)
      );
    }
     else {
      clearInterval(interval);
      setDays(0);
      setHours(0);
      setMin(0);
      setSec(0);
    }
    return () => {
      clearInterval(interval);
      setDays(0);
      setHours(0);
      setMin(0);
      setSec(0);
    };
  },[data?.startDate, data?.endDate]);

  const containerStyle = {display: "flex",flexDirection: "column",backgroundColor: "rgb(15,15,15)",justifyContent: "center",alignItems: "center",height: "40vh",gap: "10px",...uischemaStyle?.container};
  const boxStyle = {backgroundColor : "rgb(51,51,51)", width: "22%",minWidth:"40px",height:"100px", padding : "10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",...uischemaStyle?.digitContainer};
  const digitStyle = {color : "rgb(0,253,199)",fontSize : "19px",fontWeight:"700",padding:"6px",...uischemaStyle?.digit};
  const digitLabelStyle = {color : "white",fontSize : "19px",fontWeight:"700",...uischemaStyle?.digitLabel};
  const containerLabelColor = {color : "white", ...uischemaStyle.containerLabelColor};

return (
  <>
        <Box component="div" sx={containerStyle}
        >
        <Box component="h1" style={containerLabelColor}>
          { new Date().getTime() >= new Date(data?.startDate).getTime() && new Date().getTime() <= new Date(data?.endDate).getTime() ? 'Contest ends in...' : (new Date().getTime() < new Date(data?.startDate).getTime()) ? 'Program Not Started' : 'Program Over' }
          </Box>
        <Box style={{display:"flex", gap: "15px",width:"80%",maxWidth:"650px",marginLeft:"auto",marginRight:"auto"}} >
           <Box style={boxStyle}> 
                <Box style={digitStyle}>{days === 0 ? 0 : days < 10 ? 0 : Math.floor(days / 10)}{days === 0 ? 0 : days % 10}</Box>
                <Box style={digitLabelStyle}>Days</Box>
            </Box>
            <Box style={boxStyle}> 
                <Box style={digitStyle}>{hour === 0
                  ? 0
                  : 24 - hour < 10
                  ? 0
                  : Math.floor((24 - hour) / 10)}{hour === 0 ? 0 : (24 - hour) % 10}</Box>
                <Box style={digitLabelStyle}>Hours</Box>
            </Box>
            <Box style={boxStyle}> 
                <Box style={digitStyle}>{min === 0
                  ? 0
                  : 60 - min < 10
                  ? 0
                  : Math.floor((60 - min) / 10)}{min === 0 ? 0 : (60 - min) % 10}</Box>
                <Box style={digitLabelStyle}>Mins</Box>
            </Box>
            <Box style={boxStyle}> 
                <Box style={digitStyle}>{sec === 0
                  ? 0
                  : 60 - sec < 10
                  ? 0
                  : Math.floor((60 - sec) / 10)}{sec === 0 ? 0 : (60 - sec) % 10}</Box>
                <Box style={digitLabelStyle}>Secs</Box>
            </Box>
        </Box>      
      </Box>
    </>
);
};

export default CustomTimer;
