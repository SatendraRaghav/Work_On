import { Divider, Typography } from "@mui/material";
import { memo, useContext } from "react";
import { DataContext } from "../context/Context";
import { inputProps } from "../interface/inputfieldProps";
import { withJsonFormsControlProps } from "@jsonforms/react";

const Image = memo(function ({ uischema, path , data}: inputProps) {
  const uischemaData = uischema?.config?.main;
  const { theme } = useContext(DataContext);
 return (
   <img
     src={data ? data : uischemaData?.url}
     alt="Image Not Found"
     style={{
       ...theme?.BoxStyle,
       ...uischema?.config?.style,
     }}
   />
 );
}
);
export default withJsonFormsControlProps(Image);
