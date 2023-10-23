import { Box, Divider, Typography } from "@mui/material";

import { memo, useContext } from "react";

import { DataContext } from "../context/Context";

import { inputProps } from "../interface/inputfieldProps";

const Label = memo(function ({ uischema, path ,data}: inputProps) {
  const uischemaData = uischema?.config?.main;

  const { theme } = useContext(DataContext);

  return (
    <>
      {uischemaData?.url ? (
        <Box sx={{  ...uischema?.config?.containerStyle}}>
        <img
          src={data?data:uischemaData?.url}
          alt="Image Not Found"
          style={{
            ...theme?.BoxStyle,

            ...uischema?.config?.style,
          }}
        />
        </Box>
      ) : (
        <Typography
          sx={{
            ...theme?.BoxStyle,

            ...uischema?.config?.style,
          }}
          variant={uischemaData?.variant}
        >
          {data?data:uischemaData?.heading}
        </Typography>
      )}
    </>
  );
});

export default Label;
