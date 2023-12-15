import { memo, useContext, useState } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { DataContext } from "../context/Context";
import ComponentWrapper from "../common/ComponentWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { useJsonForms } from "@jsonforms/react";
import { inputProps } from "../interface/inputfieldProps";
import { useDebouncedChange } from "@jsonforms/material-renderers";
import { Close } from "@mui/icons-material";
import { getComponentProps } from "../common/getComponentProps";
const Input = memo(function (props: inputProps) {
  const { data, required, errors, enabled, uischema, path, handleChange,schema,rootSchema } =
    props;
  const uischemaData = uischema?.config?.main;
  const [showAdornment, setShowAdornment] = useState(false);
  const { pageName, permissions, theme, serviceProvider } = useContext(DataContext);
  const fieldName = getFieldName(path);
  const eventToValue = (ev: any) =>
    ev.target.value === "" ? undefined : ev.target.value;
  const [inputText, onChange, onClear] = useDebouncedChange(
    handleChange,
    "",
    data,
    path,
    eventToValue
  );
  const onPointerEnter = () => setShowAdornment(true);
  const onPointerLeave = () => setShowAdornment(false);
  return (
    <ComponentWrapper 
    {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)}
    >
      <TextField
        required={required}
        autoFocus={uischemaData?.autoFocus}
        fullWidth
        
        sx={{ ...theme.InputFieldStyle, ...uischema?.config?.style }}
        value={inputText}
        onChange={(event) => {
          onChange(event);
        }}
        disabled={uischemaData?.disabled}
        onPointerEnter={(event) => onPointerEnter()
        }
        onPointerLeave={(event) => onPointerLeave()}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              style={{
                display:
                  !showAdornment || !enabled || data === undefined
                    ? "none"
                    : "flex",
                position: "absolute",
                right: 0,
              }}
            >
              <IconButton
                title="Clear"
                sx={{ color: theme.myTheme.palette.action.focus }}
                aria-label="Clear input field"
                onClick={onClear}
                size="large"
                disabled={getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema).disabled}
              >
                <Close />
              </IconButton>
            </InputAdornment>
          ),
        }}
        label={uischemaData?.label}
        size={uischemaData?.size || "medium"}
        type={uischemaData?.type}
        variant={uischemaData?.variant}
        helperText={
          errors !== "" ? errors.includes('pattern')?uischemaData?.errorMessage:errors:uischemaData?.helperText
        }
        error={errors !== "" ? true : false}
      />
    </ComponentWrapper>
  );
});

export default Input;
