import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack, Typography } from "@mui/material";

const CustomTimer = ({ data }: any) => {
  const [date, setDate] = useState(1);
  const [days, setDays] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [hour, setHours] = useState(0);
  const [interval, setInter] = useState<any>();
  useEffect(() => {
    console.log( new Date(data.endDate).getTime() )
    console.log( new Date(data.startDate).getTime() )
    console.log( new Date().getTime() )
    if (
      new Date(data.startDate).getTime() <
        new Date().getTime() &&
      new Date(data.startDate).getTime() <
        new Date(data.endDate).getTime()
    ) {
      const d = new Date();
      const Difference_In_Time = new Date(data.endDate).getTime() - d.getTime();
      const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      console.log(Difference_In_Days)
      setDate(Math.floor(Difference_In_Days));
      setInter(
        setInterval(() => {
          const d = new Date();
          setHours(d.getHours());
          setMin(d.getMinutes());
          setSec(d.getSeconds());
        }, 1000)
      );
      return () => {
        clearInterval(interval);
      };
    } else {
      setDate(0);
      setHours(0);
      setMin(0);
      setSec(0);
    }

  },[data]);
  const box = {
    background: "black",
    color: "red",
    textShadow: "2px 2px 5px red",
    fontSize: { xs: "50px", sm: "55px" },
    boxShadow: "1px 1px 2px black",
    padding: { xs: "4px 2px", sm: "10px 5px" },
  };
  const typo = {
    textAlign: "center",
    fontSize: { xs: "8px", sm: "12px" },
    color: "whitesmoke",
    width: { xs: "70%", sm: "100%" },
  };

  return (
    <Box sx={{position:"relative"}}>
      <Grid2
        container
        spacing={1}
        sx={{
          position: "relative",
          borderRadius: "18px",
          margin: "auto",
          bgcolor: "#272953",
          padding: { xs: "20px 10px", sm: "40px 20px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "43%",
            border: "1px solid #272953",
            width: "90%",
          }}
        ></Box>
        <Grid2 xs={3}>
          <Stack spacing={1}>
            <Stack spacing={{ xs: 0, sm: 1 }} direction={"row"}>
              <Box sx={box}>
                {date === 0 ? 0 : date < 10 ? 0 : Math.floor(date / 10)}
              </Box>
              <Box sx={box}>{date === 0 ? 0 : date % 10}</Box>
              <Box sx={{ color: "white", fontSize: "40px", paddingTop: "20%" }}>
                :
              </Box>
            </Stack>
            <Box sx={{ width: "100px" }}>
              <Typography sx={typo}>Days</Typography>
            </Box>
          </Stack>
        </Grid2>
        <Grid2 xs={3}>
          <Stack spacing={1}>
            <Stack spacing={{ xs: 0, sm: 1 }} direction={"row"}>
              <Box sx={box}>
                {" "}
                {hour === 0
                  ? 0
                  : 24 - hour < 10
                  ? 0
                  : Math.floor((24 - hour) / 10)}
              </Box>
              <Box sx={box}> {hour === 0 ? 0 : (24 - hour) % 10}</Box>
              <Box sx={{ color: "white", fontSize: "40px", paddingTop: "20%" }}>
                :
              </Box>
            </Stack>
            <Box sx={{ width: "100px" }}>
              <Typography sx={typo}>Hours</Typography>
            </Box>
          </Stack>
        </Grid2>
        <Grid2 xs={3}>
          <Stack spacing={1}>
            <Stack spacing={{ xs: 0, sm: 1 }} direction={"row"}>
              <Box sx={box}>
                {" "}
                {min === 0
                  ? 0
                  : 60 - min < 10
                  ? 0
                  : Math.floor((60 - min) / 10)}
              </Box>
              <Box sx={box}> {min === 0 ? 0 : (60 - min) % 10}</Box>
              <Box sx={{ color: "white", fontSize: "40px", paddingTop: "20%" }}>
                :
              </Box>
            </Stack>
            <Box sx={{ width: "100px" }}>
              <Typography sx={typo}>Minutes</Typography>
            </Box>
          </Stack>
        </Grid2>
        <Grid2 xs={3}>
          <Stack spacing={1}>
            <Stack spacing={{ xs: 0, sm: 1 }} direction={"row"}>
              <Box sx={box}>
                {" "}
                {sec === 0
                  ? 0
                  : 60 - sec < 10
                  ? 0
                  : Math.floor((60 - sec) / 10)}
              </Box>
              <Box sx={box}> {sec === 0 ? 0 : (60 - sec) % 10}</Box>
            </Stack>
            <Box sx={{ width: "100px" }}>
              <Typography sx={typo}>Seconds</Typography>
            </Box>
          </Stack>
        </Grid2>
      </Grid2>
      <Box sx={{ textAlign: "center",width:"100%",color:"gray",position:"absolute",bottom:"10px",fontWeight:300 }}>
        {new Date(data.startDate).getTime() <
          new Date().getTime()?"Program is not started.": 
        
          new Date(data.endDate).getTime()< new Date().getTime()
          ? "Program Over"
          : "Program is Running"}
      </Box>
    </Box>
  );
};

export default CustomTimer;
