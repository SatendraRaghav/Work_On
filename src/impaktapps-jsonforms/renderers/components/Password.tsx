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
import ComponentWrapper from "../common/ComponentWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { useJsonForms } from "@jsonforms/react";
import { inputProps } from "../interface/inputfieldProps";
import { useDebouncedChange } from "@jsonforms/material-renderers";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getComponentProps } from "../common/getComponentProps";
const Password = memo(function (props: inputProps) {
  const { data, required, errors, schema,rootSchema, uischema, path, handleChange } =
    props;
  const uischemaData = uischema?.config?.main;
  const { pageName, permissions, theme, serviceProvider } =
    useContext(DataContext);
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
  const pathArray = path.split(".");
  const finalPath = pathArray[pathArray.length-1];
  return (
    <ComponentWrapper
    {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)} >
      <TextField
       
        required={required}
        autoFocus={uischemaData?.autoFocus}
        fullWidth
        sx={{ ...theme.InputFieldStyle, ...uischema?.config?.style }}
        value={inputText}
        onChange={(event) => {
          onChange(event);
        }}
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
          errors !== "" ? errors.includes('pattern')?uischemaData?.errorMessage:errors:uischemaData?.helperText
        }
        error={errors !== "" ? true : false}
      />
    </ComponentWrapper>
  );
});

export default Password;
