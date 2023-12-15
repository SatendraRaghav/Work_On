//@ts-ignore
import { Timer } from "impaktapps-design";
import { useContext } from "react";
import { useTheme } from "@mui/material";
import { getFieldName } from "../permissions/getFieldName";
import { useJsonForms } from "@jsonforms/react";
import { DataContext } from "../context/Context";
import ComponentWrapper from "../common/ComponentWrapper";
import { getComponentProps } from "../common/getComponentProps";

const CustomTimer = ({ data, uischema, path ,schema,rootSchema}: any) => {
  const theme = useTheme();
  const { pageName, permissions } = useContext(DataContext);
  const fieldName = getFieldName(path);
  const ctx = useJsonForms();
  return (
    <ComponentWrapper
    {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)} >
      <Timer
        value={{
          data,
          uischema,
          theme,
        }}
      />
    </ComponentWrapper>
  );
};

export default CustomTimer;
