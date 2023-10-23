import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useContext } from "react";
import { inputProps } from "../interface/inputfieldProps";
import { DataContext } from "../context/Context";
import { Box } from "@mui/system";
import { withJsonFormsControlProps } from "@jsonforms/react";

const RankCard = ({
  data,
  uischema,
  path,
  schema,
  renderers,
  handleChange,
}: inputProps) => {
  const uischemaData = uischema?.config?.main;
  const { theme } = useContext(DataContext);
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
        width: 295,
        height: 310,
        position: "relative",
        background: "white",
        borderRadius: "12px",
        boxShadow: "2px 2px 5px grey",
        margin: "none",
        ...uischema?.config?.style?.wrapperStyle,
      }}
    >
      <img
        src={data?.url ? data.url : uischemaData?.url}
        alt="Image Not Found"
        style={{
          ...theme?.BoxStyle,
          position: "absolute",
          left: "calc(50% - 90px)",
          top: "10px",
          border: "1px solid blue",
          objectFit: "cover",
          width: "180px",
          boxShadow: "1px 1px  2px blue",
          // paddingTop: "15px",
          height: "180px",
          borderRadius: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          ...uischema?.config?.style,
        }}
      />
      <Box
        sx={{
          color: "white",
          position: "absolute",
          width: "95%",

          top: "200px",
          padding: "0px 12px",
          display: "inline-block",
          borderRadius: "8px",
          "@keyframes RankCardImage": {
            from: {
              backgroundColor: "green",
            },
            to: {
              backgroundColor: "blue",
            },
          },
          animation: "RankCardImage 4s infinite alternate",
        }}
      >
        {data?.title || uischemaData?.title || "Your Label"}
      </Box>
      <Box
        sx={{
          maxHeight: 120,
          fontSize: "15px",
          fontWeight: "400",
          width: "95%",
          //   padding: "4px 4px"
          position: "absolute",
          // left:"calc(50% - 90px)",
          top: "240px",
          color: "gray",
          overflow: "auto",
          wordWrap: "break-word",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {data?.description || uischemaData?.description || "Your Description"}
      </Box>
      <Box
        sx={{
            position: "absolute",
            top: "0px",
            right: "0px",
            width: "15%",
            animation: 'RankCardImage 4s infinite alternate',
            backgroundColor: "rgb(57, 73, 171)",
            color: "white",
            boxShadow:"2px 2px 5px gray",
            padding: "4px 8px",
            borderRadius: "4px 12px 4px 25px",
            fontWeight: "bold",
        }}
      >
        {data?.rank ?`#${data.rank}`: `#${uischemaData?.rank}`}
      </Box>
    </Grid2>
  );
};

export default withJsonFormsControlProps(RankCard);
