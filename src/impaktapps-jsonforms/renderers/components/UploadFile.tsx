import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { memo, useContext, useState } from "react";
import { DataContext } from "../context/Context";
import { useJsonForms } from "@jsonforms/react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { inputProps } from "../interface/inputfieldProps";
import LoaderInfo from "../common/LoaderInfo";
import { ProgressBar } from "./Button";
const UploadFile = memo(function (props: inputProps) {
  const { data, handleChange, uischema, path, errors, required } = props;
  const uischemaData = uischema.config.main;
  const [loading, setLoading] = useState(false);
  const { serviceProvider, permissions, id, theme, setNotify } =
    useContext(DataContext);
  const ctx = useJsonForms();
  const [changeEvent, setChangeEvent] = useState<React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement
  > | null>(null);
  const fieldName = getFieldName(path);

  const myStyle = uischemaData?.iconStyleDefault ? theme.IconStyle : {};
  const callServiceProvider = (event: any, uploadEvent?: any) => {
    serviceProvider(ctx, uischemaData, {
      event,
      changeEvent: uploadEvent,
      uischemaData,
      path,
      setLoading,
      paramValue: event?.target?.value,
    });
  };
  return (
    <>
      <PermissionWrapper path={`${id}:${fieldName}`} permissions={permissions}>
        <TextField
          sx={{ ...theme.InputFieldStyle, ...uischema.config.style }}
          required={required}
          fullWidth
          onChange={(e) => {
            handleChange(path, e.target.value);
            setChangeEvent(e);
            callServiceProvider(e);
            setNotify({
              InfoMessage: "Please upload the selected file.",
              Info: true,
            });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={(event) => {
                    callServiceProvider(event, changeEvent);
                  }}
                  sx={{
                    color: uischemaData?.color
                      ? "none"
                      : theme.myTheme.palette.text.iconButton,
                    ...myStyle,
                    ...uischema?.config?.style,
                  }}
                  color={uischemaData?.color}
                  title="Upload File"
                >
                  <FileUploadIcon />
                  {loading && ProgressBar}
                </IconButton>
              </InputAdornment>
            ),
          }}
          disabled={uischemaData?.disabled}
          helperText={uischemaData.helperText}
          size={uischemaData.size || "medium"}
          type={"file"}
        />
      </PermissionWrapper>
      <LoaderInfo id={path} loading={loading} />
    </>
  );
});

export default UploadFile;
