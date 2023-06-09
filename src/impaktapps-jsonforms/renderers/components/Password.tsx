import { memo, useContext, useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { DataContext } from "../context/Context";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { useJsonForms } from "@jsonforms/react";
import { inputProps } from "../interface/inputfieldProps";
// import { useDebouncedChange } from "@jsonforms/material-renderers";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDebouncedChange } from "../common/handleChange";
const Password = memo(function (props: inputProps) {
  const { data, required, errors, enabled, uischema, path, handleChange } =
    props;
  const uischemaData = uischema?.config?.main;
  const { id, permissions, theme, serviceProvider } = useContext(DataContext);
  const fieldName = getFieldName(path);
  const [showPassword, setShowPassword] = useState(false);
  const eventToValue = (ev: any) =>
    ev.target.value === "" ? undefined : ev.target.value;
  const [inputText, onChange, onClear] = useDebouncedChange(
    handleChange,
    "",
    data,
    path,
    eventToValue
  );
   const ctx = useJsonForms();
  const callServiceProvider = (event: any, value?: unknown) => {
    serviceProvider(ctx, uischemaData, { event, path,paramValue:value });
  };
 
  return (
    <PermissionWrapper path={`${id}:${fieldName}`} permissions={permissions}>
      <TextField
        required={required}
        autoFocus={uischemaData?.autoFocus}
        fullWidth
        sx={{ ...theme.InputFieldStyle, ...uischema?.config?.style }}
        value={inputText}
        onChange={(event) => {
          onChange(event);
          handleChange(path,event.target.value)
          callServiceProvider(event,event.target.value);
        }}
        onKeyDown={(event)=>{
         callServiceProvider(event)
        }}
        onPointerEnter={(event) => callServiceProvider(event)}
        onPointerLeave={(event) => callServiceProvider(event)}
        onFocus={(event) => callServiceProvider(event)}
        onBlur={(event) => callServiceProvider(event)}
        onMouseEnter={(event) => callServiceProvider(event)}
        label={uischemaData?.label}
        size={uischemaData?.size || "medium"}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title={showPassword ? "Hide Password" : "Show Password"}>
                <IconButton onClick={() => setShowPassword((pre) => !pre)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
        variant={uischemaData?.variant}
        helperText={
          errors !== ""
            ? uischemaData?.errorMessage
              ? uischemaData?.errorMessage
              : errors
            : ""
        }
        error={errors !== "" ? true : false}
      />
    </PermissionWrapper>
  );
});

export default Password;
