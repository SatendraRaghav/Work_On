import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Transition } from "react-transition-group";
import React, {  useState } from "react";
import mustTryImage from "../../../assets/Images/mustTry.gif"

const defaultStyle = {
  // ...Data.style.barStyle'
  transition: "width 9000ms linear",
  background: "#16113a",
  textAlign: "center",
  color: "white",
  padding: "2px 10px",

  // color:"rgb(63, 180, 249)",
  width: "60%",
  borderRadius: "10px",
};
const transitionStyle: any = {
  entering: { width: "90%" },
  entered: { width: "90%" },
};
const Recommend = ({ Data }: any) => {
  const [inProp, setInProp] = useState(false);
  // useEffect(() => {
  //      setInProp(true)
  //   },[inProp]);

  return (
    <Grid2
    container
      spacing={1}
      onMouseOver={() => setTimeout(()=>setInProp(!inProp),500) }
      sx={{
        borderRadius: "18px",
        height: { xs: 450, sm: 350 },
        background: "#272953",
        color: "white",
        margin: "auto",
        paddingTop: "none",
        position: "relative",
      }}
    >
      {/* <Typography sx={{fontSize:"25px",fontWeight:"bolder"}}>Recommendations</Typography> */}
      {/* <Grid2 xs={11} sm={9} sx={{marginTop:"-40px"}}>
      <Box
        component={"div"}
       
      >
        <img src={RecommendImg} alt="recommend" height={100} width={"100%"} />
      
      </Box>
      </Grid2> */}
      {/* <Box component={"div"} sx={{ height: 30 }}></Box> */}
      <Grid2 xs={6}>
        <Box sx={{fontSize:"30px",fontWeight:"bolder",color:"rgb(63, 180, 249)",backgroundColor:"inherit",padding:"1px 20px",textShadow:"2px 2px 5px blue",borderRadius:"18px 0 0 18px"}}>Recommends</Box>
      </Grid2>
      <Grid2 xs={12}>
        <Transition in={inProp} timeout={10000}>
          {(state) => (
            <Typography
              sx={{
                ...defaultStyle,
                ...transitionStyle[state],
              }}
            >
              You should make daily target.
            </Typography>
            // <Box sx={height:10}></Box>
            // </>
          )}
        </Transition>
      </Grid2>
      
      <Grid2 xs={12}>
        <Transition in={inProp} timeout={10000}>
          {(state) => (
            <Typography
              sx={{
                ...defaultStyle,
                float: "right",
                ...transitionStyle[state],
              }}
            >
              Great start can help you to achieve monthly target
            </Typography>
          )}
        </Transition>
      </Grid2>
      <Grid2 xs={12} sx={{  }}>
        <Transition in={inProp} timeout={10000}>
          {(state) => (
            <Typography
              sx={{
                ...defaultStyle,
                float: "left",
                ...transitionStyle[state],
              }}
            >
              See the approach of top rankers.
            </Typography>
          )}
        </Transition>
      </Grid2>
      <Grid2 xs={11} sm={8} sx={{}}>
        <Transition in={inProp} timeout={10000}>
          {(state) => (
            <Typography
              sx={{
                ...defaultStyle,
                ...transitionStyle[state],
              }}
            >
              You should make daily target.
            </Typography>
          )}
        </Transition>
      </Grid2>
      <Grid2 sx={{textAlign:"right"}} xs={11} sm={4}>
        <img src={mustTryImage} alt={"mustTry"} width={70} height={70} />
      </Grid2>
    </Grid2>
  );
};
export default Recommend;
