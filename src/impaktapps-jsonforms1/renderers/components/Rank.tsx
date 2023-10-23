import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import rankLoaderImage from "../../../assets/rankLoader.gif";
import { inputProps } from "../interface/inputfieldProps";

const Rank = ({ uischema, path }: inputProps) => {
  const [rank, setRank] = useState(15);
  const [check, setCheck] = useState(false);
  const [inter, setInter] = useState<any>();
  const uischemaData = uischema?.config;
  useEffect(() => {
    rank === 5 && clearInterval(inter);
    () => {
      return clearInterval(inter);
    };
  }, [rank]);
  const rankChecker = () => {
    setCheck(true);
    setInter(
      setInterval(() => {
        setRank((pre) => pre - 1);
      }, 250)
    );
  };

  return (
    <Box
      sx={{
        height: check ? 360 : "auto",
        padding: "20px",
        backgroundColor: "#a3a6a9",
        width: "100%",
        borderRadius: "20px",
        margin: "auto",
        ...uischemaData?.style?.containerStyle,
      }}
    >
      {!check ? (
        <Box sx={{ textAlign: "center" }}>
          <img
            src={rankLoaderImage}
            alt={"rankLoader"}
            width={250}
            height={250}
          />
          <Button  sx={{...uischemaData?.style?.buttonStyle,}}variant="contained" onClick={rankChecker} color={"primary"}>
            Check My Rank
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            left: { xs: -40, sm: 0 },
          }}
        >
          <img
            src={rankLoaderImage}
            alt={"rankLoader"}
            width={400}
            height={350}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 90,
              left: 80,
              backgroundColor: "#272953",
              borderRadius: "90px",
              width: 240,
              height: 100,
              ...uischemaData?.style?.numContainerStyle,
            }}
          >
            <Typography
              sx={{
                fontSize: "125px",
                textAlign: rank > 10 ? "left" : "center",
                fontWeight: "bolder",
                color: "rgb(63, 180, 249)",
                backgroundColor: "inherit",
                textShadow: "2px 2px 5px blue",
                borderRadius: "100px",
                ...uischemaData?.style?.rankStyle,
              }}
            >
              {rank}
              <span
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "15px",
                  ...uischemaData?.style?.spanRankStyle,
                }}
              >
                Your Rank
              </span>
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Rank;
