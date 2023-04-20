import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack, Typography } from "@mui/material";

const CustomTimer = ({ Data }: any) => {
  const [date, setDate] = useState(0);
  // const [month, setMonth] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [hour, setHours] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      const d = new Date();
      setDate(d.getDate());
      // setMonth(d.getMonth() + 1);
      setHours(d.getHours());
      setMin(d.getMinutes());
      setSec(d.getSeconds());
    }, 1000);
  });
  const box = {
    background: "black",
    color: "red",
    textShadow:"2px 2px 5px red",
    fontSize: {xs:"50px",sm:"55px"},
    boxShadow:"1px 1px 2px black",
    padding:{xs:"4px 2px",sm: "10px 5px"},
  };
  const typo = {
    textAlign: "center",
    fontSize: {xs:"8px",sm:"12px"},
    color: "whitesmoke",
    width: {xs:"70%",sm:"100%"}
  };
  return (
    <>
      <Grid2 container spacing={1}  sx={{position:"relative",borderRadius:"18px",margin:"auto",bgcolor:"#272953",padding:{xs:"20px 10px",sm:"40px 20px"}}}>
       <Box sx={{position:"absolute",top:"43%",border:"1px solid #272953",width:"90%"}}></Box>
        <Grid2 xs={3}>
          <Stack spacing={1}>
            <Stack spacing={{xs:0,sm:1}} direction={"row"}>
              <Box sx={box}>{(30 - date)<10?0:Math.floor((30 - date)/10)}</Box>
              <Box sx={box}>{(30-date)%10}</Box>
              <Box sx={{color:"white",fontSize:"40px",paddingTop:"20%"}}>:</Box>
            </Stack>
            <Box sx={{ width: "100px" }}>
              <Typography sx={typo}>Days</Typography>
            </Box>
          </Stack>
        </Grid2>
        <Grid2 xs={3}>
          <Stack spacing={1}>
            <Stack spacing={{xs:0,sm:1}} direction={"row"}>
              <Box sx={box}> {(24 - hour)<10?0:Math.floor((24 - hour)/10)}</Box>
              <Box sx={box}> {(24 - hour)%10}</Box>
              <Box sx={{color:"white",fontSize:"40px",paddingTop:"20%"}}>:</Box>
            </Stack>
            <Box sx={{ width: "100px" }}>
              <Typography sx={typo}>Hours</Typography>
            </Box>
           
          </Stack>
        </Grid2>
        <Grid2 xs={3}>
          <Stack spacing={1}>
            <Stack spacing={{xs:0,sm:1}} direction={"row"}>
            <Box sx={box}> {(60 - min )<10?0:Math.floor((60 - min)/10)}</Box>
              <Box sx={box}> {(60 - min)%10}</Box>
              <Box sx={{color:"white",fontSize:"40px",paddingTop:"20%"}}>:</Box>
            </Stack>
            <Box sx={{ width: "100px" }}>
              <Typography sx={typo}>Minutes</Typography>
            </Box>
          </Stack>
        </Grid2>
        <Grid2 xs={3}>
          <Stack spacing={1}>
            <Stack spacing={{xs:0,sm:1}} direction={"row"}>
            <Box sx={box}> {(60 - sec )<10?0:Math.floor((60 - sec)/10)}</Box>
              <Box sx={box}> {(60 - sec)%10}</Box>
            </Stack>
            <Box sx={{ width: "100px" }}>
              <Typography sx={typo}>Seconds</Typography>
            </Box>
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
};

export default CustomTimer;

