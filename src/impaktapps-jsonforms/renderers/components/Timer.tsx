//@ts-ignore
import { Timer } from "impaktapps-design";

import { useTheme } from "@mui/material";

const CustomTimer = ({ data, uischema }: any) => {
  const theme = useTheme();
  return (
    <>
      <Timer
        value={{
          data,
          uischema,
          theme,
        }}
      />
    </>
  );
};

export default CustomTimer;
