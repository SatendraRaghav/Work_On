import React, { memo, useContext } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { DataContext } from "../context/Context";
import { useJsonForms } from "@jsonforms/react";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { inputProps } from "../interface/inputfieldProps";

export const AutoComplete = memo(function CustomAutoComplete(
  props: inputProps
) {
  const { errors, uischema, data, required, handleChange, path } = props;
  const uischemaData = uischema?.config?.main;
  const {  id, permissions, theme } = useContext(DataContext);
  const fieldName = getFieldName(path);
  return (
    <PermissionWrapper path={`${id}:${fieldName}`} permissions={permissions}>
      <Autocomplete
        onChange={(event, newValue) => {
          handleChange(path, newValue);
        }}
        multiple
        limitTags={2}
        sx={{ ...theme.InputFieldStyle, ...uischema?.config?.style }}
        disableCloseOnSelect
        id="tags-standard"
        options={uischemaData?.options|| []}
        getOptionLabel={(option) => {
          return option.label;
        }}
        value={data??[]}
        renderOption={(props, option, { selected }) => (
          <li {...props}>{option.label}</li>
        )}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              size={uischemaData?.size ?? "medium"}
              helperText={
                errors !== ""
                  ? uischemaData?.errorMessage
                    ? uischemaData?.errorMessage
                    : errors
                  : ""
              }
              error={errors !== "" ? true : false}
              sx={{
                ...theme.InputFieldStyle,
                fontSize: theme.myTheme.palette.typography.autoCompleteFontSize,
                ...uischema?.config?.TextFieldStyle,
              }}
              variant="outlined"
              label={uischemaData?.label}
              required={required}
              placeholder={uischemaData?.placeholder}
            />
          );
        }}
      />
    </PermissionWrapper>
  );
});

export default AutoComplete;
