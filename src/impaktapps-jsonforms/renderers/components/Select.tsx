import React, { memo, useContext, useEffect, useState } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { DataContext } from "../context/Context";
import { useJsonForms } from "@jsonforms/react";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { inputProps } from "../interface/inputfieldProps";
import Helpertext from "../common/Helpertext";

const ImpaktAppsSelect = memo(function CustomSelect(props: inputProps) {
  const { errors, uischema, data, required, handleChange, path } = props;
  const initialpath = path.split(".")[0];
  const isNested =  path.split(".").length > 1 &&  !path.split(".").includes("0")
  const uischemaData = uischema?.config?.main;

  const [options, setOptions] = useState(
    path.split(".").length > 1
      ? data
        ? data
        : uischemaData.options?uischemaData?.options:[]
      : uischemaData?.options
  );
  useEffect(() => {
    setOptions(
      isNested
        ? data
          ? data
          : uischemaData.options
        : uischemaData.options
    );
  }, [path, uischemaData.options, data]);
  const ctx = useJsonForms();
  const { pageName, permissions, theme } = useContext(DataContext);
  const fieldName = getFieldName(path);
  return (
    <PermissionWrapper path={`${pageName}:${fieldName}`} permissions={permissions}>
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
          defaultValue={
            ctx.core.data?.[initialpath]?.selected !== undefined
              ? ctx.core.data[initialpath].selected
              : ""
          }
          value={
            isNested?
            ctx.core.data[initialpath]?.selected !== undefined
              ? ctx.core.data[initialpath].selected
              : ""
              :data !== undefined?data:""
          }
          autoFocus={uischemaData?.autoFocus}
          onChange={(event) => {
            handleChange(
              isNested?`${initialpath}.selected`:path,
              event.target.value || undefined
            );
          }}
        >
          {options?.map((elem: any, i: number) => (
            <MenuItem
              sx={{
                color: theme.myTheme.palette.text.primary,
                background: theme.myTheme.palette.secondary.main,
                marginTop: "-6.5px",
                marginBottom: "-7px",

                // padding:"10px auto",
                "&:hover": {
                  backgroundColor: theme.myTheme.palette.primary.main,
                },
                "&:focus": {
                  color: theme.myTheme.palette.action.active,
                  backgroundColor: theme.myTheme.palette.action.focusBackground,
                },
              }}
              key={elem?.label + i}
              value={elem.value}
            >
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
