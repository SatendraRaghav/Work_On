import React, { memo, useContext, useEffect, useState } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { DataContext } from "../context/Context";
import { useJsonForms } from "@jsonforms/react";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { inputProps } from "../interface/inputfieldProps";
import Helpertext from "../common/HelperText";

const ImpaktAppsSelect = memo(function CustomSelect(props: inputProps) {
  const { errors, uischema, data, required, handleChange, path } = props;
  const uischemaData = uischema?.config?.main;
  const { id, permissions, theme } =
    useContext(DataContext);
  const fieldName = getFieldName(path);
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
          disabled={uischemaData?.disabled}
          label={uischemaData?.label}
          defaultValue={props.data !== undefined ? data : ""}
          value={props.data !== undefined ? data : ""}
          autoFocus={uischemaData?.autoFocus}
          onChange={(event) => {
            handleChange(path, event.target.value || undefined);
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
