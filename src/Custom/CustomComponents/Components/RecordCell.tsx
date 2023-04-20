import React from 'react'
import { Box,Stack, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import sparkImage from "../../../assets/Images/spark.gif"
import catWithBoardImage from "../../../assets/Images/catWithBoard.gif"
import increaseImage from "../../../assets/Images/increase2.gif"



const RecordCell = () => {
  return (
      <Grid2 xs={12} sm={12} justifyContent={"center"} container sx={{borderRadius:"18px",
      background:"#272953",
      height:{xs:450,sm:350},
      color:"white",margin:"auto",paddingTop:"none"}}>
        {/* <Grid2 xs={6} sx={{display:"flex",alignItems:"baseline",justifyContent:"start",color:"black",textAligh:"center"}}>
          <Box sx={{fontSize:"55px",color:"white",width:150,textAlign:"center"}}>
            26
          </Box>
        </Grid2>
        <Grid2 xs={6}>
          
          you are doing good from last 5 days
          </Grid2>
      <Grid2 xs={6}>
      <img src={rank} alt="rank" width={150}></img>
      </Grid2> */}
      {/* <Box>
        <img src={spark} alt="spark" width={200} height={30} />
      </Box> */}
      <Grid2 xs={12} sm={8} sx={{position:"relative"}}>
      <Box sx={{fontSize:"55px",color:"rgb(63, 180, 249)",fontWeight:"bolder",textShadow:"2px 2px 5px blue",width:150,textAlign:"center",position:"absolute",top:125,left:50}}>
    
            26<br/>
          <Box sx={{fontSize:"10px",textShadow:"none"}}>My Rank</Box>  
          <img src={sparkImage} alt="spark" width={"100%"} height={30} />
          </Box>
        <Box >
          <img src={catWithBoardImage} alt="board" width={300} height={300} />
         </Box>
      </Grid2>
      <Grid2 container xs={12} sm={4} sx={{}}>
        <Grid2 sx={{height:200}}></Grid2>
        <Grid2>
       
          {/* <Typography sx={{fontWeight:"bolder",fontSize:"15px",marginBottom:"10px",color:"rgb(63, 180, 249)"}}>Today Vs Tommorow</Typography>
          <Box component={"div"}>
          <img src={congrats1} alt="" height={100} width={100}></img>
          </Box> */}
          
           <Box component={"div"}>
          <img src={increaseImage} alt="" height={60} width={150}></img>
          </Box>
           <Typography variant='caption' sx={{fontSize:"10px",fontWeight:"bolder",position:"relative",zIndex:4}}>Rank Improve by <span style={{color:"rgb(63, 180, 249)",fontSize:"25px",padding:"5px 10px",background:"white",borderRadius:"2px"}}>5</span></Typography>
     
        </Grid2>
        
      </Grid2>
      
      {/* <Grid2 xs={12} sm={6}>
        <Stack direction={"row"}>
          <Box  sx={{width:"70%"}}>
          you are doing good from last 5 days<br/>
          you are doing good from last 5 days<br/>
          We are glad to tell u that you are osm<br/>
          Updating new version
          
          </Box>
          <Box sx={{width:"30%"}}>
          <img src={weldone} alt="rank" width={70} height={"100%"}></img>
          </Box>
          </Stack>
          </Grid2> */}
      </Grid2>
  )
}

export default RecordCell




// import React, { useState } from 'react'
// import { Box, Card, Typography } from '@mui/material';
// import {Graph} from '@act21_products/grapho'
// import Unstable_Grid2 from '@mui/material/Unstable_Grid2';

  
// const RecordCell = ({Data}:any) => {
//     const [target,setTarget] = useState(100);
//     const [achieve,setAchieve] = useState(60);
//     const [spendDay,setSpentDay] = useState(20)
    
//     // const value = {
//     //   type: "Piegraph",
//     //   data:[{x:"Achieve",y:achieve},{x:"Remaining",y:target-achieve}],
//     //   content: {
//     //     header: "Your Target Detail",
//     //     bottomLabel: "Name of Employe",
//     //     leftLabel: "Value",
//     //     legendAvailable:false,
//     //     tooltipDataKey: ["MAMA New Project","Second","Third"],
//     //      axisLeft:true,
//     //      axisBottom:true
//     //   },
//     //   legend:{
//     //       labelColor:"green",
//     //       legendTitle:"Our Assests",
//     //       direction:"row",
//     //       align:"left"
//     //     },
//     //   style: {
//     //     containerStyle: {
//     //       background: "",
//     //        width: "100%", height: "400",
//     //       borderRadius: "20px", 
//     //       padding: "10px 0 2px 0",
//     //     },
//     //     headerStyle: { textAlign: "center", padding: "5px 0 1px 0",marginBottom:"-70px" },
//     //     tooltipStyle:{width:"80px",paddingLeft:"4px"},
//     //     labelStyle: {
//     //       labelColor: "white",
//     //     labelOffset:-80,
//     //     leftLabelMargin:-70,
//     //     topLabelMargin:-40
//     //     },
//     //     pieStyle: {
//     //       colorRange: ["#0FD354",
//     //         "#FC5C6A",
//     //         "rgba(25,200,205,0.6)"],
//     //       outerRadius: 90,
//     //       innerRadius: 30,
//     //       cornerRadius: 0,
//     //       padAngle: 0.00,
//     //     }
//     //   }
//     // }
//     const value  = {
//       type: "Bargraph",
//       data: [{x:"Achieve",y:achieve},{x:"Target",y:target},{x:"Remaining",y:target-achieve}],
//       content: {
//         header: " ",
//         bottomLabel: " ",
//         leftLabel: " ",
//         tooltipDataKey: ["MAMA New Project","second line"],
//         axisLeft: true,
//         axisBottom: true,
//         hideTicks:false,

//         hideLeftAxisLine:false,
//         hideBottomAxisLine:false,
//         bottomAxisWidth:"10px",
//       },
//       style: {
//         containerStyle: {
//           background: "",
//           width: "100%",
//           height: "300",
//           borderRadius: "20px",
//           padding: "10px 0 2px 0",
        
//         },
//         headerStyle: { textAlign: "center", padding: "5px 0 1px 0",marginBottom:"10px" },
//         tooltipstyle:{},
//         labelStyle: {
//             leftLabelMargin: "30",
//             topLabelMargin: "-40",
//           labelColor: "white",
//           labelOffset: 0,
//           tickColor:"black",
//           tickFontSize:"1.2vw",
//           rightAxisWidth:"",
//           fontSize:"20px"
//         },
//         barStyle: {
//           mediumValueColor: "rgb(63, 180, 249)",
//           highValueColor: "#FC5C6A",
//           lowValueColor: "red",
//         }
//       }
//     }
    
//   return (
//     <Unstable_Grid2 
//     justifyContent={'space-around'}
//     container
    
//     sx={{
//     backgroundColor:"#272953",
//     borderRadius:"20px",
//     // boxShadow:"2px 2px 5px gray",
//     color:"white",
//     padding:"2px 10px 5px 10px",
//     height:370,
//     ...Data.style.containerStyle}} >
//     <Unstable_Grid2 xs={5} sm={3} >
//     <Typography sx={{fontSize:"15px",fontWeight:"bolder",...Data.style.header}} >{Data.content.header}</Typography>
//     <Box sx={{margin:"20px auto 30px auto"}}>
//     <Typography sx={{fontSize:"40px",fontWeight:"bolder",...Data.style.target}} >{target}</Typography>
//     <Typography sx={{fontSize:"10px",fontWeight:"bolder",marginTop:"-5px",...Data.content.defineTarget}} >{Data.content.defineTarget}</Typography>
//     </Box>
//     <Box sx={{margin:"15px auto 30px auto"}}>
//     <Typography sx={{fontSize:"38px",fontWeight:"bolder",...Data.style.achieve}} >{achieve}</Typography>
//     <Typography sx={{fontSize:"10px",fontWeight:"bolder",marginTop:"-5px",...Data.style.defineAchieve}} >{Data.content.defineAchieve}</Typography>
//     </Box>
//     <Typography sx={{fontSize:"15px",fontWeight:"bolder",...Data.content.defineSpeed}}>{Data.content.defineSpeed} - {Math.round(achieve/spendDay)}/day</Typography>
//     </Unstable_Grid2>
//     <Unstable_Grid2 xs={7} sm={9}> 
//       <Graph value={JSON.stringify(value)}></Graph>
//     </Unstable_Grid2>
//     </Unstable_Grid2>
//   )
// }

// export default RecordCell
