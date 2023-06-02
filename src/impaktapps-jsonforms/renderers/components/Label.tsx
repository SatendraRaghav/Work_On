import { Divider, Typography } from "@mui/material";
import { memo, useContext } from "react";
import { DataContext } from "../context/Context";
import { inputProps } from "../interface/inputfieldProps";


const Label = memo(function({ uischema, path }: inputProps){
  const uischemaData = uischema?.config?.main;
  const { theme } =
    useContext(DataContext);
  return (
  <>
    <Typography
      sx={{
        ...theme?.BoxStyle,
        ...uischema?.config?.style,
      }}
      variant={uischemaData?.variant}
    >
      {uischemaData?.heading}
    </Typography>
    {uischemaData?.dividerAvailable &&
      <Divider sx={{...theme.BoxDividerStyle,  ...uischema?.config?.dividerStyle,}}></Divider>
}
    </>
  );
});

export default Label;
