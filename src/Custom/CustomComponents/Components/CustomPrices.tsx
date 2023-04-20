import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Stack, Typography, Box} from '@mui/material';
import firstPrice from "../../../assets/Images/first.gif"
import secondPrice from "../../../assets/Images/second.gif"
import thirdPrice from "../../../assets/Images/third.gif"

const CustomPrices = ({Data}:any) => {
  const priceHeading = {backgroundColor:"#19054A",fontWeight:"bolder",borderRadius:"10px",ml:"10px",width:"20%",p:"5px",textAlign:"center"};
  const priceStyle={color:"rgb(63, 180, 249)",fontSize:"25px",fontWeight:"bolder",textShadow:"2px 2px 5px blue",p:"5%",pb:"2px"}
  return (
   <Grid2 container  sx={{borderRadius:"18px",   backgroundColor:"#16113a",
   width:{xs:"90%",sm: "95%"},
   color:"white",margin:"auto",paddingTop:"none",
  //  backgroundImage:`url(${Grad})`,
   backgroundSize:"100% 100%"
   }}>
    <Grid2 xs={12}>
        <Typography sx={{color:"rgb(63, 180, 249)",fontSize:{xs:"20px",sm:"30px"},fontWeight:"bolder"}}>
          These Prices are Waiting For you  
        </Typography>
    </Grid2>
    <Grid2 xs={12}>
     <Stack direction={{xs:"column",sm:"row"}} >
        <Typography sx={{width:{xs:"60%",sm:"auto"},fontSize:"25px",textShadow:"1px 1px 10px black",padding:"5px 15px",borderRadius:"15px",fontWeight:"bolder",backgroundColor:"#272953"}}>Smart TV</Typography>
        
        
        <Typography sx={{padding:"4px 0 0 15px"}}>Only <span style={{color:"rgb(63, 180, 249)",textShadow:"2px 2px 10px gray",fontSize:"25px"}}>10</span> Polices Left to Get This Price</Typography>
        </Stack>
    </Grid2>
    <Grid2 xs={12} sx={{color:"white",fontSize:"20px"}}>
        Prices For Top Rankers
    </Grid2>
    <Grid2 xs={12} sm={4} md={4} sx={{display:{xs:"block",sm:"none"}}}>
      <Box sx={{borderRadius:"18px",pb:"10px",background:"#272953",color:"white",margin:"auto",textAlign:"center"}}>
        <img src={firstPrice} alt="firstMedal" width={120} height={90} />
        <Typography sx={{textShadow:"1px 1px 3px white"}}>First Rank</Typography>
        <Box sx={{textAlign:"left"}}>
        <Typography sx={priceHeading}>Price</Typography>
        <Typography sx={priceStyle}>Laptop</Typography>
        <Typography variant='caption' sx={{pl:"5%"}}>It is HP-Rizer5 Laptop</Typography>
       </Box>
      </Box>
    </Grid2>
      <Grid2 xs={12} sm={4} md={4} sx={{mt:{xs:"none",sm:"50px"}}}>
    <Box sx={{borderRadius:"18px",pb:"10px",background:"#272953",color:"white",margin:"auto",mt:"20px",textAlign:"center"}}>
        <img src={secondPrice} alt="secondMedal" width={150} height={90} />
        <Typography sx={{textShadow:"1px 1px 3px white"}}>Second Rank</Typography>
        <Box sx={{textAlign:"left"}}>
        <Typography sx={priceHeading}>Price</Typography>
        <Typography sx={priceStyle}>Mobile</Typography>
        <Typography variant='caption' sx={{pl:"5%"}}>Redmi Note 7, worth:9000/-</Typography>
       </Box>
      </Box>
    </Grid2>
    <Grid2 xs={12} sm={4} md={4} sx={{display:{xs:"none",sm:"block"}}}>
      <Box sx={{borderRadius:"18px",pb:"10px",background:"#272953",color:"white",margin:"auto",textAlign:"center"}}>
        <img src={firstPrice} alt="firstMedal" width={120} height={90} />
        <Typography sx={{textShadow:"1px 1px 3px white"}}>First Rank</Typography>
        <Box sx={{textAlign:"left"}}>
        <Typography sx={priceHeading}>Price</Typography>
        <Typography sx={priceStyle}>Laptop</Typography>
        <Typography variant="caption" sx={{pl:"5%"}}>It is HP-Rizer5 Laptop</Typography>
       </Box>
      </Box>
    </Grid2>
  
    <Grid2 xs={12} sm={4} md={4}sx={{mt:{xs:"none",sm:"60px"}}}>
    <Box sx={{borderRadius:"18px",pb:"10px",background:"#272953",color:"white",margin:"auto",textAlign:"center"}}>
        <img src={thirdPrice} alt="ThirdMedal" width={120} height={90} />
        <Typography sx={{textShadow:"1px 1px 3px white"}}>Third Rank</Typography>
        <Box sx={{textAlign:"left"}}>
        <Typography sx={priceHeading}>Price</Typography>
        <Typography sx={priceStyle}>Smart Watch</Typography>
        <Typography variant='caption' sx={{pl:"5%"}}>It is Boat new style smart watch</Typography>
       </Box>
      </Box>
    </Grid2>
   </Grid2>
  )
}

export default CustomPrices