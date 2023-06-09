import React, { memo, useContext, useEffect } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { DataContext } from "../context/Context";
import { useJsonForms } from "@jsonforms/react";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { inputProps } from "../interface/inputfieldProps";
import Helpertext from "../common/Helpertext";

const ImpaktAppsSelect = memo(
  function CustomSelect(props: inputProps) {
  const {errors, uischema, data, required, handleChange, path } = props;
  const uischemaData = uischema?.config?.main;
  const { id, permissions, theme, serviceProvider } =
    useContext(DataContext);
    const ctx = useJsonForms();
  const fieldName = getFieldName(path);
  const callServiceProvider = (event: any, value?: unknown) => {
    serviceProvider(ctx, uischemaData, { event, path,paramValue:value });
  };
  return (
    <PermissionWrapper path={`${id}:${fieldName}`} permissions={permissions}>
      <FormControl
        fullWidth={true}
        sx={{ ...theme.InputFieldStyle, ...uischema?.config?.style }}
      >
        <InputLabel
          id="demo-simple-select-label"
          variant={uischemaData?.variant}
          required={required}
        >
          {uischemaData?.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          required={required}
          size={uischemaData?.size || "medium"}
          label={uischemaData?.label}
          defaultValue={props.data !== undefined ? data : ""}
          value={props.data !== undefined ? data : ""}
          autoFocus={uischemaData?.autoFocus}
          onChange={(event) => { 
            console.log(event.target.value)
            handleChange(path, event.target.value || undefined)
            callServiceProvider( event,event.target.value);}}
     
          onPointerEnter={(event) => callServiceProvider(event)}
          onPointerLeave={(event) => callServiceProvider(event)}
          onFocus={(event) => callServiceProvider(event)}
          onBlur={(event) => callServiceProvider(event)}
          onMouseEnter={(event) => callServiceProvider(event)}
          onKeyPress={(event)=>{
            callServiceProvider(event);
          }}
        >
          {uischemaData?.options?.map((elem: any, i: number) => (
            <MenuItem key={elem?.label + i} value={elem.value}>
              {elem.label}
            </MenuItem>
          ))}
        </Select>
        <Helpertext uischemaData={uischemaData} errors={errors} />
      </FormControl>
    </PermissionWrapper>
  );
});
export default ImpaktAppsSelect;
