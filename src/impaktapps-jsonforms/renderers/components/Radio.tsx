import React, { memo, useContext, useEffect } from "react";
import {
  RadioGroup,
  FormControl,
  FormLabel,
  Radio,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { DataContext } from "../context/Context";
import { Stack } from "@mui/system";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { radioInputProps } from "../interface/inputfieldProps";
import { useJsonForms } from "@jsonforms/react";
//@ts-ignore
import Helpertext from "../common/Helpertext";

const ImpaktAppsRadio = memo(function CustomRadio(props: radioInputProps) {
  const { required, errors, data, uischema, handleChange, path } = props;
  const uischemaData = uischema?.config?.main;
  const { pageName, permissions, theme, serviceProvider } = useContext(DataContext);
  const fieldName = getFieldName(path);
  const onChange = (_ev: any, value: any) => handleChange(path, value);
  const ctx = useJsonForms();
  return (
    <PermissionWrapper path={`${pageName}:${fieldName}`} permissions={permissions}>
      <FormControl fullWidth={true} variant="outlined">
        <Stack
          direction={"row"}
          sx={{
            ...theme.RadioStyle,
            ...uischema?.config?.RadioStyle,
          }}
        >
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            required={required}
            sx={{
              flexGrow: 0,
              fontFamily: "inherit",
              paddingTop: "7px",
              paddingLeft: "10px",
            }}
          >
            {uischemaData?.label}
          </FormLabel>
          <RadioGroup
            sx={{
              paddingLeft: "20px",
              flexGrow: 1,
              ...theme.InputFieldStyle,
              ...uischema?.config?.RadioGroupStyle,
            }}
            row
            value={data ?? ""}
            defaultValue={data}
            defaultChecked={data}
            aria-labelledby="demo-row-radio-buttons-group-label"
            onChange={(event, value) => {
              onChange(event, value);
            }}
          >
            {uischemaData?.options?.map((elem: any, i: number) => (
              <FormControlLabel
                value={elem}
                control={
                  <Radio
                    size={uischemaData?.size || "small"}
                    sx={{
                      margin: "1px auto",
                      "&.Mui-checked": {
                        color: theme.myTheme.palette.text.primary,
                      },
                      "& label": {
                        color: theme.myTheme.palette.text.inputLabel,
                      },
                    }}
                    value={elem}
                    disabled={uischemaData?.disabled}
                  />
                }
                label={elem}
              />
            ))}
          </RadioGroup>
        </Stack>
        <Helpertext uischemaData={uischemaData} errors={errors} />
      </FormControl>
    </PermissionWrapper>
  );
});
export default ImpaktAppsRadio;
