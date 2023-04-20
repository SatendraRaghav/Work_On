import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import thoughtImage from "../../../assets/Images/thought.gif"
import quotesStartImage from "../../../assets/Images/quotes1.gif"
import quotesEndImage from "../../../assets/Images/quotesDown.gif"

const Thought = () => {
  return (
    <Box  sx={{borderRadius:"18px",
    background:"#272953",
    color:"white",margin:"auto",padding:"20px 10px"}}>
     <Typography component={"div"} sx={{color:"#3FB4F9",fontWeight:"bolder",marginLeft:"15px"}}>Today Thought</Typography>
    <Stack direction={"row"} sx={{height:130}} spacing={2}>
    <img src={thoughtImage} alt="bulb_image" width={120} height={120} />
    <Box sx={{flexGrow:1}}></Box>
    <Box sx={{height:120,display:"flex",alignItems:"center",position:"relative"}}>
  <Box sx={{display:{xs:"none",sm:"inline"}}}>
      <img src={quotesStartImage} alt="quoteSign" style={{position:"absolute",top:0,left:0}} width={40} height={40} ></img>
      <img src={quotesEndImage} alt="quoteSign" style={{position:"absolute",bottom:5,right:5}} width={40} height={40} ></img>
      </Box>
       <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}><Typography sx={{fontWeight:"bolder",width:{xs:"100%",sm:"70%"}}}>Dreams are nothing without plans,work hard for your goal.</Typography></Box>
       </Box>
    </Stack> 
    </Box>
)
}
export default Thought