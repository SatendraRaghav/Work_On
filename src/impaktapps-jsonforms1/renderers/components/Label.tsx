import { Divider, Typography } from "@mui/material";

import { memo, useContext } from "react";

import { DataContext } from "../context/Context";

import { inputProps } from "../interface/inputfieldProps";

 

const Label = memo(function ({ uischema, path }: inputProps) {

  const uischemaData = uischema?.config?.main;

  const { theme } = useContext(DataContext);

  return (

    <>

      {uischemaData?.url ? (

        <img

          src={uischemaData?.url}

          alt="Image Not Found"

          style={{

            ...theme?.BoxStyle,

            ...uischema?.config?.style,

          }}

        />

      ) : (

        <Typography

          sx={{

            ...theme?.BoxStyle,

            ...uischema?.config?.style,

          }}

          variant={uischemaData?.variant}

        >

          {uischemaData?.heading}

        </Typography>

      )}

    </>

  );

});

 

export default Label;