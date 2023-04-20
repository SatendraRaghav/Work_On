import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import React, { useEffect, useState } from "react";
import rankLoaderImage from "../../../assets/Images/rankLoader.gif"

const Rank = (props: any) => {
  const [rank, setRank] = useState(10);
  const [inter, setInter] = useState<any>();
  const arr = [
    "Great start can help you to achieve monthly target.",
    " See the approach of top rankers.",
    " You should make daily target",
    "Rise Early in the morning",
    "See your Progress Bar",
  ];
  let box = document.querySelector(".container");
  let width = box?.clientWidth;
  const preBtnHandler = () => {
    let width = box?.clientWidth;
    //@ts-ignore
    box.scrollLeft = box.scrollLeft - width-20;
  };
  const nextBtnHandler = () => {
    let width = box?.clientWidth;
    //@ts-ignore
    box.scrollLeft = box.scrollLeft + width+20;
  };
  useEffect(() => {
    rank === 5 && clearInterval(inter);
  }, [rank]);
  const rankChecker = () => {
    setInter(
      setInterval(() => {
        setRank((pre) => pre - 1);
        // rank==5 && setInter(true)
      }, 500)
    );
  };

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "10px 5px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: 350,
          color: "black",
          backgroundColor: "inherit",
          width: "90%",
          margin: "auto",
        }}
      >
        {rank > 9 ? (
        
          <Box sx={{ textAlign: "center" }}>
            <img src={rankLoaderImage} alt={"rankLoader"} width={250} height={250} />
            <Button
              variant="contained"
              onClick={() => rankChecker()}
              color={"info"}
            >
              Check My Rank
            </Button>
          </Box>
        ) : (
          <Box sx={{ position: "relative",display:"flex",justifyContent:"center",left:{xs:-40,sm:0} }}>
            <img src={rankLoaderImage} alt={"rankLoader"} width={400} height={350} style={{
               position: "absolute",
               top: 0,
               left: 0,
            }} />
            <Box
              sx={{
                position: "absolute",
                top: 90,
                left: 70,
                backgroundColor: "#272953",
                borderRadius: "90px",
                width: 240,
                height: 100,
              }}
            >
              <Typography
                sx={{
                  fontSize: "125px",
                  textAlign: "center",
                  fontWeight: "bolder",
                  color: "rgb(63, 180, 249)",
                  backgroundColor: "inherit",
                  textShadow: "2px 2px 5px blue",
                  borderRadius: "100px",
                }}
              >
                {rank}
                <span
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  Your Rank
                </span>
              </Typography>
            </Box>
          </Box>
          // </Stack>
        )}
      </Box>
      <Box
        sx={{
          fontSize: "30px",
          fontWeight: "bolder",
          color: "rgb(63, 180, 249)",
          backgroundColor: "inherit",
          padding: "1px 20px",
          textShadow: "2px 2px 5px blue",
          borderRadius: "18px 0 0 18px",
        }}
      >
        Recommends
      </Box>
      <Box
        sx={{
          zIndex: 5,
          display: "flex",
          height: 174,
          alignItems: "center",
          position: "absolute",
          right: "90%",
        }}
      >
        <IconButton
          //  color={"info"}
          sx={{
            color: "white",
            margin: "15px auto",
            padding: "0",
            width: 45,
            height: 100,
          }}
          onClick={() => preBtnHandler()}
        >
          <SkipPreviousIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          zIndex: 5,
          display: "flex",
          height: 174,
          alignItems: "center",
          position: "absolute",
          left: "90%",
        }}
      >
        <IconButton
          // color={"primary"}
          size={"large"}
          sx={{
            zIndex: 5,
            color: "white",
            margin: "15px auto",
            width: 45,
            height: 100,
          }}
          onClick={() => nextBtnHandler()}
        >
          <SkipNextIcon />
        </IconButton>
      </Box>
      <Stack
        spacing={1}
        className={"container"}
        direction={"row"}
        sx={{
          width: "90%",
              display: "flex",
          margin: "auto",
          overflowX: "scroll",
        }}
      >
        {/* <Typography sx={{height:10}}>Recommendations</Typography> */}
        {arr.map((elem, i) => {
          return (
            <Box
              component={"div"}
            
              width={{xs:250,sm:450}}
              flex={1}
              key={i}
              sx={{
                display: "flex",
                alignContent: "center",
                margin: "5px 0 5px 0",
                padding: "5px 10px",
                height: 150,
                width: "auto",
                backgroundColor: "#272953;",
                borderRadius: "15px",
              }}
            >
              <Typography
                sx={{
                  width:{xs:250,sm:450},
                  margin: "auto",
                  fontWeight: "bolder",
                  fontSize: "15px",
                  color: "rgb(63, 180, 249)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "35px",
                    color: "white",
                    textShadow: "2px 2px 5px white",
                  }}
                >
                  {i + 1}
                </span>
                <br /> {elem}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Rank;
