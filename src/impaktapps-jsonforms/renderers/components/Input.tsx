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
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { useJsonForms } from "@jsonforms/react";
import { inputProps } from "../interface/inputfieldProps";
import { useDebouncedChange } from "@jsonforms/material-renderers";
import { Close } from "@mui/icons-material";
const Input = memo(function (props: inputProps) {
  const { data, required, errors, enabled, uischema, path, handleChange } =
    props;
  const uischemaData = uischema?.config?.main;
  const [showAdornment, setShowAdornment] = useState(false);
  const { id, permissions, theme, serviceProvider } = useContext(DataContext);
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
  const ctx = useJsonForms();
 
  const onPointerEnter = () => setShowAdornment(true);
  const onPointerLeave = () => setShowAdornment(false);
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
        }}
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

export default Input;
