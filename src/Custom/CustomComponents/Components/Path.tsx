import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import trophyImage from "../../../assets/Images/newTrophy.gif"
import runningBoyImage from "../../../assets/Images/Running.gif"
const boxDefaultStyle = {
  transition: "width 9000ms linear",
  width: "1%",
  textAlign: "center",
  height: 84,
  overflow: "hidden",
  position: "absolute",
  right: 5,
  borderRadius: "15px",
  background: "#272953",
  // background: "rgb(63, 180, 249)",
};
const boxTransitionStyle: any = {
  entering: { width: "40%" },
  entered: { width: "40%" },
};
const percent = {
  border:"1px solid white",
  borderBottom:"none",
  height:20,
  width:"10%",
  lineHeight:2,
  textAlign:"center",
  fontSize:"10px"
}
const Path = () => {
  useEffect(() => {
    setInProp(true);
  }, []);
  const [inProp, setInProp] = useState(false);
  return (
    <Grid2
      container
      xs={11}
      justifyContent={"center"}
      sx={{
        borderRadius: "18px",
        // background: "#272953",
        // background: "rgb(63, 180, 249)",
        color: "white",
        height:120,
        fontWeight:"bolder",
        margin: "auto",
        paddingTop: "none",
        position: "relative",
      }}
    >
      <Box sx={{  background: "#16113a",width:"100%",borderBottom:"4px solid red",}}>
      <Stack direction={"row"}>
        <Box sx={percent}>95</Box>
         <Box sx={percent}>85</Box>
         <Box sx={percent}>75</Box>
         <Box sx={percent}>65</Box>
         <Box sx={percent}>55</Box>
         <Box sx={percent}>45</Box>
         <Box sx={percent}>35</Box>
         <Box sx={percent}>25</Box>
         <Box sx={percent}>15</Box>
         <Box sx={percent}>5</Box>
         </Stack>
      <Box sx={{ position: "absolute", left:{xs:-20,sm: -40},bottom:20,width:{xs:50,sm:70},height:{xs:70,sm:80}}}>
        <img
          src={trophyImage}
          alt="TrophyImage"
          width={"100%"}
          height={"100%"}
          style={{ position: "absolute", left: "-8%", bottom: "-10px" }}
        />
      </Box>
      <Transition in={inProp} timeout={5000}>
        {(state) => (
          <>
            <Box
              sx={{
                ...boxDefaultStyle,
                ...boxTransitionStyle[state],
              }}
            >
               <Box
              sx={{
                position:"absolute",
                left:-20,
                zIndex:10
              }}
            >
              <img
                src={runningBoyImage}
                alt="boyImage"
                width={80}
                height={70}
                style={{ marginBottom: "-15px" }}
              />
            </Box>
              <Typography sx={{ height: 20 }}/>
            </Box>
          </>
        )}
      </Transition>
      <Transition in={inProp} timeout={5000}>
        {(state) => (
          <>
          <Box sx={{  background: "red",width:"100%",bottom:0}}>
            <Box
              sx={{
                ...boxDefaultStyle,
                ...boxTransitionStyle[state],
                height:20,
                bottom:0,
                background: "rgb(63, 180, 249)",
              }}
            >
              <Typography
                component={"div"}
                sx={{ fontSize: "14px", fontWeight: "bolder" }}
              >
                Only 10 policy left to complete your target.
              </Typography>
            </Box>
            </Box>
          </>
        )}
      </Transition>
    
        </Box>
       
    </Grid2>
  );
};

export default Path;