import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import Anjali from "../../../assets/Images/anjali.png"
import Raghav from "../../../assets/Images/ragha2.jpg"
import Winner from "../../../assets/Images/winner2.gif"


const defaultStyle = {
  transition: "width 9000ms linear",
  height: "150px",
  textAlign: "center",
  width: { xs: "100%", sm: "50%" },
  overflow: "hidden",
  borderRadius: "15px",
  marginRight: 0,
};
// const transitionStyle:any = {
//   appear: {  height:"70px" },
//   // appear: {  height:"70px" },
// } background:"#272953"
// const transitionStyle2:any = {
//   entering: {  height:"100px" },
//   entered: {  height:"100px" },
// }

const PreviousWinner = ({ Data }: any) => {
  const [checked, setChecked] = React.useState(false);
  const icon = (
    <Box sx={{position:"relative",height:{xs:140,sm:160}}}>
   <Stack direction="row" alignItems={"baseline"} sx={{background:"inherit"}}>
  
    <Box component="div" sx={{  height:{xs:70,sm:100},background:"#272953", width: { xs: "100%", sm: "100%" },
  overflow: "hidden",
  borderRadius: "15px 0 0 0"}}>
    </Box>
    <Box component="div" sx={{  height:{xs:105,sm:140},background:"#272953", width: { xs: "100%", sm: "100%" },
  overflow: "hidden",
  borderRadius: "15px 15px 0 0"}}>
      
    </Box>
    <Box component="div" sx={{  height:{xs:50,sm:80},background:"#272953", width: { xs: "100%", sm: "100%" },
  overflow: "hidden",
  borderRadius: "0 15px 0 0"}}>
    </Box>
   </Stack>
     <Box sx={{width:"100%", textAlign:"center",position:"absolute",top:{xs:-90,sm:-65}}}>
            <img src={Winner} width={"100%" } style={{maxWidth:700}} height={300} alt="winner" />
            </Box>
   </Box>
  );
  return (
      <Grid2 container
      xs={12}
      sm={8}
      onMouseOver={() => setChecked(true)} 
       sx={{margin:"auto",position:"relative",height:400}}
       justifyContent={'center'}
       alignItems="flex-end"
       >
       <Grid2 xs={4} sx={{ height:{xs:50,sm:100,md:140}}}>
     
       <Avatar
            alt="Satendra_Ragha"
            src={Raghav}
            sx={{
              border:{xs:"2px solid #F0B213",sm:"6px solid #F0B213",md:"10px solid #F0B213"} ,
              width:{sx:100,sm:100,md:120},
              height:{sx:100,sm:100,md:120},
              margin:"auto"
            }}
          />
          <Typography sx={{textAlign:"center",color:"white"}}>Aman Gupta</Typography>
          {/* <Typography sx={{textAlign:"center",color:"white"}}>Aman Gupta</Typography> */}
       </Grid2>
       <Grid2 xs={4}  sx={{height:{xs:80,sm:130,md:180}}}>
       <Avatar
            alt="Satendra_Raghav"
            src={Anjali}
            sx={{
              border:{xs:"2px solid #F0B213",sm:"6px solid #F0B213",md:"10px solid #F0B213"} ,
              width:{sx:100,sm:100,md:120},
              height:{sx:100,sm:100,md:120},
              margin:"auto"
            }}
          />
            <Typography sx={{textAlign:"center",color:"white"}}>Satendra Raghav</Typography>
       </Grid2>
       <Grid2 xs={4}  sx={{height:{xs:30,sm:80,md:110}}}>
       <Avatar
            alt="Satendra_Raghav"
            src={"/Images/ragha2.jpg"}
            sx={{
              border:{xs:"2px solid #F0B213",sm:"6px solid #F0B213",md:"10px solid #F0B213"} ,
              width:{sx:100,sm:100,md:120},
              height:{sx:100,sm:100,md:120},
              margin:"auto"
            }}
          />
          <Typography sx={{textAlign:"center",color:"white"}}>Vikas</Typography>
       </Grid2>
       <Grid2 xs={12} >
        
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            {icon}
          </Slide>
        </Grid2>
      </Grid2>
  );
};

export default PreviousWinner;
