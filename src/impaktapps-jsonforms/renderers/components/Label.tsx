import { Box, Divider, Typography } from "@mui/material";
import { memo, useContext } from "react";
import { DataContext } from "../context/Context";
import { inputProps } from "../interface/inputfieldProps";
import { getFieldName } from "../permissions/getFieldName";
import { useJsonForms } from "@jsonforms/react";
import ComponentWrapper from "../common/ComponentWrapper";
import { getComponentProps } from "../common/getComponentProps";

const Label = memo(function ({ uischema, path, data,schema,rootSchema }: inputProps) {
  const uischemaData = uischema?.config?.main;
  const { pageName, permissions, theme } = useContext(DataContext);
  const fieldName = getFieldName(path);
  return (
    <ComponentWrapper
    {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)} >
      <Typography
       
        sx={{
          ...theme?.BoxStyle,

          ...uischema?.config?.style,
        }}
        variant={uischemaData?.variant}
      >
        {data ? data : uischemaData?.heading}
      </Typography>
    </ComponentWrapper>
  );
});

export default Label;
