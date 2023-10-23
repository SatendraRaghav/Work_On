import  { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { inputProps } from "../interface/inputfieldProps";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { withJsonFormsControlProps } from "@jsonforms/react";

const RollAndDice = ({
  data,
  uischema,
  path,
  schema,
  renderers,
  handleChange,
}: inputProps) => {
  const [showRank, setShowRank] = useState(false);
  const [rank, setRank] = useState( data?data:0);
  const rankHandler = () => {
    setRank(data?data:0);
    setShowRank(true);

  };
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
        width: "100%",

        height: 270,
        position: "relative",
        background: "#333333",
        borderRadius: "12px",
        boxShadow: "2px 2px 5px grey",
        margin: "auto",
        padding: "none",
        // ...uischema?.config?.style?.wrapperStyle,
      }}
    >
    {  !showRank?
      <>
        <Grid2
          xs={12}
          sx={{
            color: "white",
            height: 190,
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundSize: "contain",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            padding: "0px 12px",
            backgroundImage:
              "url('https://media0.giphy.com/media/oVC14esV3dKehcBkT4/giphy.gif?cid=ecf05e47vv4p7czphyk7mnyu6uwho7r1g8da0lwyceacljoe&ep=v1_stickers_search&rid=giphy.gif&ct=s')",
            borderRadius: "50%",
          }}
        ></Grid2>

        <Button
          onClick={() => rankHandler()}
          sx={{
            width: { xs: "100%", sm: "60%", md: "30%", lg: "20%" },
            position: "absolute",
            bottom: "10px",
            right: { xs: "0%", sm: "20%", md: "35%", lg: "40%" },
          }}
        >
          Rank
        </Button>
      </>
      :
      <>
      <Box
        sx={{
          color: "white",
          height: 300,
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundSize: "contain",
          backgroundPosition: "center",
          marginTop: "-20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px 12px",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url('https://media0.giphy.com/media/oVC14esV3dKehcBkT4/giphy.gif?cid=ecf05e47vv4p7czphyk7mnyu6uwho7r1g8da0lwyceacljoe&ep=v1_stickers_search&rid=giphy.gif&ct=s')",
          borderRadius: "45%",
        }}
      ></Box>
      <Box
        sx={{
          color: "white",
          height: 190,
          width: 190,
          backgroundSize: "contain",
          fontWeight: "bolder",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          marginTop: "40px",
          justifyContent: "center",
          position: "absolute",
          top: 1,
          left: "calc(50% - 90px)",
          zIndex: 10,
          fontSize: "85px",
          padding: "0px 12px",
          textShadow: "2px 2px 5px rgb(57, 73, 171)",
          background: "#13142B",
          "@keyframes rotateAnimation": {
            from: {
              transform: "rotate(0deg)",
            },
            to: {
              transform: "rotate(360deg)",
            },
          },
          animation: "rotateAnimation 4s infinite",
          borderRadius: "55%",
        }}
      >
        
        {rank}
      </Box>
      <Box
        sx={{
          color: "white",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundSize: "contain",
          position: "absolute",
          bottom: 10,
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px 12px",
        }}
      >
        Your Rank
      </Box>
      </>
}
    </Grid2>
  );
};

export default withJsonFormsControlProps(RollAndDice);