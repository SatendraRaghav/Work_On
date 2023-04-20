import Button from '@mui/material/Button';
import React,{useContext, useEffect, useState} from 'react';
// import {Graph} from '@act21_products/grapho'
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { DataContext } from '../../../Context';
import { Avatar, Stack, Tooltip, Typography } from '@mui/material';
import believeImage from "../../../assets/Images/believe.gif"
import riserImage from "../../../assets/Images/riseUp.gif"
import moverImage from "../../../assets/Images/mover.gif"
export const CustomUserbar = ({Data}:any)=>{
     return(
      <Box sx={{ flexGrow: 1 ,margin:"none",position:"relative",zIndex:20,...Data.style}}>
      <AppBar position="static" 
      // color={"#363B3B"}
       sx={{...Data.style}}
       >
        <Toolbar>
          <IconButton
            size="large"
            color={"inherit"}
            sx={{paddingLeft:"5px", mr: 0.5,}}
          >
             <Avatar sx={{ bgcolor: "white",color:"black" }}>{Data.content.userName[0]}</Avatar>
          </IconButton>
          <Box>Hello, {Data.content.userName}</Box>
          <Box sx={{ flexGrow: 1 }} />
           <Box sx={{paddingBottom:"35px"}}>
            {/* <Typography variant='caption' sx={{paddingTop:"2px",marginTop:"1px"}}>Your Badges</Typography> */}
            {/* <Box sx={{height:"5px" }}></Box> */}
          <Stack direction="row" sx={{fontSize:"25px"}} spacing={{xs:1,sm:4}}>
            <Box>
              <Tooltip title="random" placement="bottom">
                <Box sx={{width:{xs:30,sm:30,md:40},height:{xs:30,sm:30,md:40}}}>
            <img src ={believeImage} style={{paddingTop:"2px"}} alt="believe" width={"100%"} height={"100%"} /><br/>
              <Typography sx={{fontSize:{xs:"8px",sm:"15px"}}} variant='caption'>Believer</Typography>
              </Box>
              </Tooltip>
            
              </Box>
            
            <Box sx={{width:{xs:30,sm:30,md:40},height:{xs:30,sm:30,md:40}}}>
            <img src ={riserImage} alt="riseUp" width={"100%"} height={"100%"} /><br/>
              <Typography sx={{fontSize:{xs:"8px",sm:"15px"}}} variant='caption'>Riser</Typography>
            </Box>
            <Box sx={{width:{xs:30,sm:30,md:40},height:{xs:30,sm:30,md:40}}}>
            <img src ={moverImage} alt="mover" width={"100%"} height={"100%"} /><br/>
              <Typography variant='caption' sx={{fontSize:{xs:"8px",sm:"15px"}}}>Mover</Typography>
            </Box>
          </Stack>
           </Box>
        </Toolbar>
      </AppBar>
    </Box>
    ) 
  }