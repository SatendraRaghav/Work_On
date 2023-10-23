import React, { memo, useContext, useEffect, useState } from "react";
import { Autocomplete, MenuItem, TextField } from "@mui/material";
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
  const { id, permissions, theme } = useContext(DataContext);
  const fieldName = getFieldName(path);
  const initialpath = path.split(".")[0];
  const optionsFromUiSchema =  path.split(".").length <2;
  const [options, setOptions] = useState(
    path.split(".").length > 1
      ? data
        ? data
        : uischemaData.options||[{}]
      : uischemaData.options||[{}]
  );
  useEffect(() => {
    setOptions(
      path.split(".").length > 1
        ? data
          ? data
          : uischemaData.options||[{}]
        : uischemaData.options??[{}]
    );
  }, [path, uischemaData.options, data]);
  const ctx = useJsonForms()
  return (
    <PermissionWrapper path={`${id}:${fieldName}`} permissions={permissions}>
      {!uischemaData.multiple && (
        <Autocomplete
          onChange={(event, newValue) => {
            handleChange(
              path.split(".").length > 1?`${initialpath}.selected`:path, 
              newValue);
          }}
          sx={{
            ...theme.InputFieldStyle,
            ...uischema?.config?.style,
            ".MuiAutocomplete-tag": {
              backgroundColor: theme.myTheme.palette.background.input,
              color: theme.myTheme.palette.text.input,
              border: `0.5px solid ${theme.myTheme.palette.text.input}`,
            },

            ".MuiAutocomplete-clearIndicator": {
              color: theme.myTheme.palette.text.input, // Change this to the desired color for the close button
            },
          }}
          freeSolo={true}
          id="tags-standard"
          options={options?.map((option) => option.label)}
          value={ path.split(".").length > 1?ctx.core.data[initialpath]?.selected ?? "":data??""}
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
                  fontSize:
                    theme.myTheme.palette.typography.autoCompleteFontSize,
                  ...uischema?.config?.TextFieldStyle,
                }}
                variant="outlined"
                label={uischemaData?.label}
                disabled={uischemaData?.disabled}
                required={required}
                placeholder={uischemaData?.placeholder}
              />
            );
          }}
        />
      )}
      {uischemaData.multiple && (
        <Autocomplete
          onChange={(event, newValue) => {
           
            handleChange(
              path.split(".").length > 1?`${initialpath}.selected`:path, 
              newValue);
          }}
          multiple={true}
          sx={{
            ...theme.InputFieldStyle,
            ...uischema?.config?.style,
            ".MuiAutocomplete-tag": {
              backgroundColor: theme.myTheme.palette.background.input,
              color: theme.myTheme.palette.text.input,
              border: `0.5px solid ${theme.myTheme.palette.text.input}`,
            },

            ".MuiAutocomplete-clearIndicator": {
              color: theme.myTheme.palette.text.input, // Change this to the desired color for the close button
            },
          }}
          disableCloseOnSelect
          id="tags-standard"
          options={uischemaData.options || []}
          getOptionLabel={(option) => {
            return option.label;
          }}
          value={
            optionsFromUiSchema? data??[]:
          ctx.core.data[initialpath]?.selected ?? []
           }
          renderOption={(props, option, { selected }) => (
            <MenuItem
              sx={{
                color: theme.myTheme.palette.text.primary,
                background: theme.myTheme.palette.secondary.main,
                marginTop: "-6.5px",
                marginBottom: "-7px",

              
                "&:hover": {
                  background: theme.myTheme.palette.primary.main,
             

                  color: theme.myTheme.palette.text.iconButton,
                },
                "&:focus": {
                  color: theme.myTheme.palette.action.active,
                  background: theme.myTheme.palette.action.focusBackground,
                },
              }}
              {...props}
            >
              {option.label}
            </MenuItem>
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
                  fontSize:
                    theme.myTheme.palette.typography.autoCompleteFontSize,
                  ...uischema?.config?.TextFieldStyle,
                }}
                variant="outlined"
                label={uischemaData?.label}
                disabled={uischemaData?.disabled}
                required={required}
                placeholder={uischemaData?.placeholder}
              />
            );
          }}
        />
      )}
    </PermissionWrapper>
  );
});

export default AutoComplete;
