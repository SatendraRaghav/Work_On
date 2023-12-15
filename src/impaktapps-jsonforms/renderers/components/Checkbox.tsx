import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { inputProps } from "../interface/inputfieldProps";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import { withJsonFormsControlProps } from "@jsonforms/react";
import FormControlLabel from "@mui/material/FormControlLabel";
import ComponentWrapper from "../common/ComponentWrapper";
import { getComponentProps } from "../common/getComponentProps";
import { getFieldName } from "../permissions/getFieldName";

function CheckBox(props: inputProps) {
  const { schema, rootSchema, uischema, data, handleChange, path } = props;
  const { pageName, permissions, theme } =
    useContext(DataContext);
    const fieldName = getFieldName(path);
  return (
    <ComponentWrapper
      {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)} >
      <FormControlLabel
        control={
          <Checkbox
          
          key={path+(Math.random()*100)}
            onChange={(event) => {
              handleChange(path, event.target.checked);
            }}
            
            checked={data}
            sx={{
              color: theme.myTheme.palette.action.active,
              "&.Mui-checked": {
                color: theme.myTheme.palette.action.active,
              },
            }}
          />
        }
        label={uischema?.config?.main?.label}
      />
    </ComponentWrapper>
  );
}
export default withJsonFormsControlProps(CheckBox);
