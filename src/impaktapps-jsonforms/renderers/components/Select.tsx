import React, { memo, useContext, useEffect } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { DataContext } from "../context/Context"; 
import { useNavigate } from "react-router";
import { useJsonForms } from "@jsonforms/react";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";
import CustomAutoComplete from "./AutoComplete";
import Helpertext from "../common/Helpertext";
import { inputProps } from "../interface/inputfieldProps";

 const ImpaktAppsSelect  = memo(function CustomSelect(props:  inputProps) {
  const {
    errors,
    uischema,
    data,
    required,
    handleChange,
    path,
  } = props;
  const ctx = useJsonForms();
  const uischemaData = uischema?.config?.main;
  const {
    setDialogBox,
    id,
    permissions,
    theme,
    serviceProvider
  } = useContext(DataContext);
  const fieldName = getFieldName(path);
  const callServiceProvider=(event:any,value?:unknown)=>{
    serviceProvider(ctx, uischemaData, 
      {event, path});
  }
  return (
    <PermissionWrapper path={`${id}:${fieldName}`} permissions={permissions}>
          <FormControl fullWidth={true} sx={{ ...theme.InputFieldStyle,...uischema?.config?.style }}>
            <PermissionWrapper
              path={`${id}:${fieldName}`}
              permissions={permissions}
            >
              <InputLabel
                id="demo-simple-select-label"
                variant={uischemaData?.variant}
                required={required}
              >
                {uischemaData?.label}
              </InputLabel>
            </PermissionWrapper>
            <PermissionWrapper
              path={`${id}:${fieldName}`}
              permissions={permissions}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                required={required}
                size={uischemaData?.size||"medium"}
                label={uischemaData?.label}
                value={data !== undefined ? data : ""}
                autoFocus={uischemaData?.autoFocus}
                onChange={(event) => {
                  handleChange(path, event.target.value || undefined);
                  callServiceProvider(event)
                }}
                onPointerEnter={(event)=> callServiceProvider(event)}
                onPointerLeave={(event)=> callServiceProvider(event)}
                onFocus={(event)=>  callServiceProvider(event)}
                onBlur={(event)=>  callServiceProvider(event)}
                onMouseEnter={(event)=>  callServiceProvider(event)}
              >
                {uischemaData?.options?.map((elem: any, i: number) => (
                  <MenuItem key={elem?.label + i} value={elem.value}>
                    {elem.label}
                  </MenuItem>
                ))}
              </Select>
            </PermissionWrapper>
            <Helpertext uischemaData={uischemaData} errors={errors} />
          </FormControl>
    </PermissionWrapper>
  );
})
export default ImpaktAppsSelect;
