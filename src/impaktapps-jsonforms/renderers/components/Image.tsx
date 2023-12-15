import { memo, useContext } from "react";
import { Box } from "@mui/material";
import { DataContext } from "../context/Context";
import { inputProps } from "../interface/inputfieldProps";
import { useJsonForms, withJsonFormsControlProps } from "@jsonforms/react";
import ComponentWrapper from "../common/ComponentWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { getComponentProps } from "../common/getComponentProps";

const Image = memo(function ({ uischema, path, data,schema,rootSchema }: inputProps) {
  const uischemaData = uischema?.config?.main;
  const { pageName, permissions, theme } = useContext(DataContext);
  const fieldName = getFieldName(path);
  return (
    <ComponentWrapper
    {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)}>
      <Box
       
      sx={{ ...uischema?.config?.containerStyle }}>
        <img
          src={data ? data : uischemaData?.url}
          alt="Image Not Found"
          style={{
            ...theme?.BoxStyle,
            ...uischema?.config?.style,
          }}
        />
      </Box>
    </ComponentWrapper>
  );
});
export default withJsonFormsControlProps(Image);
