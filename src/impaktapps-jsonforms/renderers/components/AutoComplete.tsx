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
  const { pageName, permissions, theme } = useContext(DataContext);
  const fieldName = getFieldName(path);
  const initialpath = path.split(".")[0];
  const isNested =  path.split(".").length > 1 &&  !path.split(".").includes("0")
  const optionsFromUiSchema =  path.split(".").length <2;
  const [options, setOptions] = useState(
   isNested
      ? data
        ? data
        : uischemaData.options||[{}]
      : uischemaData.options||[{}]
  );
  useEffect(() => {
    setOptions(
     isNested
        ? data
          ? data
          : uischemaData.options??[{}]
        : uischemaData.options??[{}]
    );
  }, [path, uischemaData.options, data]);
  const ctx = useJsonForms()
  return (
    <PermissionWrapper path={`${pageName}:${fieldName}`} permissions={permissions}>
      {!uischemaData.multiple && (
        <Autocomplete
          onChange={(event, newValue) => {
            handleChange(
             isNested?`${initialpath}.selected`:path, 
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
          value={isNested?ctx.core.data[initialpath]?.selected ?? "":data??""}
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
             isNested?`${initialpath}.selected`:path, 
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
          options={options || []}
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
