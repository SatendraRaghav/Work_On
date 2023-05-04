import { Typography } from "@mui/material";
import React from "react";
import { DataContext } from "../../../Context";
// import { BoxStyle } from "../../../Styles/InputField";
const CustomBox = ({ data, path }: any) => {
  const { setFormdata, objFunc, setUiSchema, setSchema, id ,theme} =React.useContext(DataContext);
  return (
    <Typography
      sx={{
        ...theme.BoxStyle,
        ...data.style,
      }}
      variant={data.content.variant}
    >
      {data.content.heading}
    </Typography>
  );
};

export default CustomBox;
