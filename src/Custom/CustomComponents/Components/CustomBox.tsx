import { Typography } from "@mui/material";
import { BoxStyle } from "../../../Styles/InputField";
const CustomBox = ({ data, path }: any) => {
  return (
    <Typography
      sx={{
        ...BoxStyle,
        ...data.style,
      }}
      variant={data.content.variant}
    >
      {data.content.heading}
    </Typography>
  );
};

export default CustomBox;
