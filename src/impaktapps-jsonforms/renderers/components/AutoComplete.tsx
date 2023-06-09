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
  const ctx = useJsonForms();
  const uischemaData = uischema?.config?.main;
  const { serviceProvider, id, permissions, theme } = useContext(DataContext);
  const callServiceProvider = (event: any, value?: unknown) => {
    serviceProvider(ctx, uischemaData, { event, path, paramValue: value });
  };
  const fieldName = getFieldName(path);
  return (
    <PermissionWrapper path={`${id}:${fieldName}`} permissions={permissions}>
      <Autocomplete
        onChange={(event, newValue) => {
          handleChange(path, newValue);
          callServiceProvider(event, newValue);
        }}
        onPointerEnter={(event) => callServiceProvider(event)}
        onPointerLeave={(event) => callServiceProvider(event)}
        onFocus={(event) => callServiceProvider(event)}
        onBlur={(event) => callServiceProvider(event)}
        onMouseEnter={(event) => callServiceProvider(event)}
        onKeyPress={(event) => {
          callServiceProvider(event);
        }}
        multiple
        limitTags={2}
        sx={{ ...theme.InputFieldStyle, ...uischema?.config?.style }}
        disableCloseOnSelect
        id="tags-standard"
        options={uischemaData?.options ?? []}
        getOptionLabel={(option) => {
          return option.label;
        }}
        value={data}
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
