import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack, Typography } from "@mui/material";
import { inputProps } from "../interface/inputfieldProps";
import { withJsonFormsControlProps } from "@jsonforms/react";

const RunnerProgressBar = ({
  data,
  uischema,
  path,
  schema,
  renderers,
  handleChange,
}: inputProps) => {
  const uischemaData = uischema?.config?.main;
  const [progress,setProgrss] = useState(0)
  useEffect(()=>{
 setProgrss((data?.achieve*100)/data?.total)
  },[data?.total,data?.achieve])
  return (
    <Grid2
      container
      xs={uischema?.config?.layout || 11}
      rowSpacing={uischema.config?.main?.rowSpacing || 2}
      columnSpacing={uischema.config?.main?.columnSpacingSpacing || 2}
      gap={uischema.config?.main?.gap}
      spacing={uischema.config?.main?.spacing || 2}
      justifyContent="space-around"
      sx={{
        paddingBottom: uischema.config?.main?.label ? "10px" : "auto",
        width: "100%",
        height: "120px",
        position: "relative",
        border: "1px solid black",
        background: "#fff",
        // background:"#333333",
        borderRadius: "10px",
        color: "white",
        margin: "auto",
        ...uischema?.config?.style?.wrapperStyle,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "10px",
          top: "0",
          width: "2px",
          zIndex: 10,
          height: "10px",
          background: "green",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          left: "10px",
          top: "0",
          width: "2px",
          zIndex: 10,
          height: "10px",
          background: "green",
        }}
      ></Box>
      <Box
        sx={{
          position:"absolute",
       
          width:"10px",
          textAlign:"center",
          fontSize:"8px",
          zIndex:2,
       
          left:"7px",
          top:"12px",
     
          height:"10px",
          color:"black",
          // background:"green",
        }}
      >0%

      </Box>
      <Box
        sx={{

          position:"absolute",
          left:"10%",
          top:0,
          width:"2px",
          zIndex:10,
          height:"10px",
          background:"green",
         
        }}
      >
      
      </Box>
       <Box
        sx={{
      
          position:"absolute",
          left:"calc(10% - 3px)",
          top:"12px",
          width:"10px",
          textAlign:"center",
          fontSize:"8px",
          zIndex:2,  
          color:"black",
        }}
      >
        10%
      </Box>
       <Box
        sx={{
          position:"absolute",
          left:"20%",
          top:0,
          width:"2px",
          zIndex:10,
          height:"10px",
          background:"green", 
        }}
      ></Box>
       <Box
        sx={{
          position:"absolute",
            left:"calc(20% - 3px)",
            top:"12px",
            width:"10px",
            textAlign:"center",
            fontSize:"8px",
            zIndex:2,
            color:"black",
        }}
      >
        20%
      </Box>
      <Box sx={{
         position:"absolute",
         left:"30%",
         top:0,
         width:"2px",
         zIndex:10,
         height:"10px",
         background:"green",
      }}>

      </Box>
      <Box sx={{
          position:"absolute",
          left:"calc(30% - 3px)",
          top:"12px",
          width:"10px",
          textAlign:"center",
          fontSize:"8px",
          zIndex:2,
          color:"black",
      }}>
     30%
      </Box>
      <Box sx={{
            position:"absolute",
            left:"40%",
            top:0,
            width:"2px",
            zIndex:10,
            height:"10px",
            background:"green",
      }}>
     
      </Box>
      <Box sx={{
            position:"absolute",
            left:"calc(40% - 3px)",
            top:"12px",
            width:"10px",
            textAlign:"center",
            fontSize:"8px",
            zIndex:2, 
            color:"black",
        }}>
       40%
        </Box>
        <Box sx={{
             position:"absolute",
             left:"50%",
             top:0,
             width:"2px",
             zIndex:10,
             height:"10px",
             background:"green",
        }}>
       
        </Box>
        <Box sx={{
           position:"absolute",
           left:"calc(50% - 3px)",
           top:"12px",
           width:"10px",
           textAlign:"center",
           fontSize:"8px",
           zIndex:2,  
           color:"black",
        }}>
       50%
        </Box>
        <Box sx={{
           position:"absolute",
           left:"60%",
           top:0,
           width:"2px",
           zIndex:10,
           height:"10px",
           background:"green",
        }}>
       
        </Box>
        <Box sx={{
             position:"absolute",
             left:"calc(60% - 3px)",
             top:"12px",
             width:"10px",
             textAlign:"center",
             fontSize:"8px",
             zIndex:2,
             color:"black",
        }}>
         60%
        </Box>
        <Box sx={{
           position:"absolute",
           left:"70%",
           top:0,
           width:"2px",
           zIndex:10,
           height:"10px",
           background:"green",
        }}>
       
        </Box>
        <Box sx={{
            position:"absolute",
            left:"calc(70% - 3px)",
            top:"12px",
            width:"10px",
            textAlign:"center",
            fontSize:"8px",
            zIndex:2,
            color:"black",
        }}>
       70%
        </Box>
        <Box sx={{
             position:"absolute",
             left:"80%",
             top:0,
             width:"2px",
             zIndex:10,
             height:"10px",
             background:"green",
        }}>
       
        </Box>
        <Box sx={{
           position:"absolute",
           left:"calc(80% - 3px)",
           top:"12px",
           width:"10px",
           textAlign:"center",
           fontSize:"8px",
           zIndex:2, 
           color:"black", 
        }}>
       80%
        </Box>
        <Box sx={{
          position:"absolute",
          left:"90%",
          top:0,
          width:"2px",
          zIndex:10,
          height:"10px",
          background:"green",
        }}>
       
        </Box>
        <Box sx={{
              position:"absolute",
              left:"calc(90% - 3px)",
              top:"12px",
              width:"10px",
              textAlign:"center",
              fontSize:"8px",
              zIndex:2,  
              color:"black",
        }}>
       90%
        </Box>
        <Box sx={{
          position:"absolute",
          left:"calc(100% - 10px)",
          top:0,
          width:"2px",
          zIndex:10,
          height:"10px",
          background:"green",
        }}>
       
        </Box>
        <Box sx={{
           position:"absolute",
           left:"calc(100% - 22px)",
           top:"12px",
           width:"20px",
           textAlign:"center",
           fontSize:"8px",
           zIndex:2,
           color:"black",
        }}>
       100%
        </Box>
        <Box sx={{ 
           position:"absolute",
           left:0,
           textAlign:"center",
           borderRadius:"20px 20px 0 0",
           display:"flex",
           top:"25px",
           
           width:"80px",
           height:"100px",
           background:"transparent",
           fontWeight:"bolder",
           color:"white",
           '@keyframes rotateRunnerAnimation': {
             from: {
               left: 0,
             },
             to: {
               left: `calc(${progress}% - 40px)`,
             },
         },
          animation: 'rotateRunnerAnimation 10s linear 1s 1 forwards',
           alignItems:"center",
           justifyContent:"center"
        }}>
        <img
          src={"https://media1.giphy.com/media/JTOaN2A7IVwoGKIQ11/giphy.gif?cid=ecf05e47oxseox7hagztx1974svhjicmd09zlj0au9zewn8v&ep=v1_stickers_search&rid=giphy.gif&ct=s"}
          alt="Image Not Found"
          style={{
            fontFamily: "inherit",
      width: "100%",
      margin: "auto",
      fontWeight: "500",
      fontSize: "20px",
      background: "inherit",
          }}
        />
        </Box>
        <Box sx={{ 
             position:"absolute",
             left:0,
             textAlign:"center",
             borderRadius:"0 10px 10px 10px",
             top:"calc(100% - 15px)",
             display:"flex",
             zIndex:3,
             overflow:"hidden",
           //  lineHeight:"15px",
             fontSize:"10px",
            
             width:"1px",
             height:"15px",
             background:"green",
             fontWeight:900,
             textShadow:"2px 2px 5px gray",
             color:"white",
             '@keyframes widthAnimation': {
               from: {
                   width: 0,
               },
               to: {
                   width: `${progress}%`,
               },
           },
            animation: 'widthAnimation 10s linear 1s 1 forwards',
             alignItems:"center",
             justifyContent:"center"
        }}>
         20 policy completed
        </Box>
        <Box sx={{ 
              position:"absolute",
              left:0,
              textAlign:"center",
              borderRadius:"0 0 10px 10px",
              display:"flex",
              overflow:"hidden",
              fontSize:"8px",
            
              top:"calc(100% - 15px)",
              width:"100%",
              height:"15px",
              background:"#D9FFE2",
              fontWeight:"bolder",
              color:"white",
        }}>
      
        </Box>
        <Box sx={{ 
             position:"absolute",
             right:"-20px",
             textAlign:"center",
             borderRadius:"0 0 10px 10px",
             display:"flex",
             overFlow:"hidden",
             fontSize:"8px",
             bottom:"15px",
             width:"40px",
             height:"60px",
             '@keyframes trophyAnimation': {
             0: {
               transform: 'rotate(0deg)',
             },
           "50%": {
               transform: 'rotate(20deg)',
             },
           "100%":{
             transform: 'rotate(-20deg)',
           },
         },
          animation: 'trophyAnimation 3s  infinite alternate',
        }}>
        <img
          src={"https://tse2.mm.bing.net/th?id=OIP.4mtQjTlFWqEt6ze9dSB2DwHaLi&pid=Api&P=0&h=180"}
          alt="Image Not Found"
          style={{
            textAlign:"center",
            borderRadius:"0 0 10px 10px",
            display:"flex",
            // overFlow:"hidden",
            fontSize:"8px",
          
            bottom:"15px",
            width:"40px",
            height:"60px",
            // height:"15px",
            background:"#D9FFE2",
            fontWeight:"bolder",
            color:"white",
          }}
        />
        </Box>
    </Grid2>
  );
};
export default withJsonFormsControlProps(RunnerProgressBar);
