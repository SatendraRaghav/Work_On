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
import Helpertext from "../common/Helpertext";
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
    });
  };
  return (
    <>
      <PermissionWrapper path={`${id}:${fieldName}`} permissions={permissions}>
        <FormControl 
        sx={{ ...theme.InputFieldStyle, ...uischema.config.style }}
        fullWidth>
          <PermissionWrapper
            path={`${id}:${fieldName}`}
            permissions={permissions}
          >
            <TextField
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
              onPointerEnter={(event)=>  callServiceProvider(event)}
              onPointerLeave={(event)=>  callServiceProvider(event)}
              onFocus={(event)=>  callServiceProvider(event)}
              onBlur={(event)=>  callServiceProvider(event)}
              onMouseEnter={(event)=>  callServiceProvider(event)}
              sx={{ color: "red", border: "none" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                  
                      <IconButton
                        onClick={(event) => {
                          callServiceProvider(event, changeEvent);
                        }}
                        sx={{ color: uischemaData?.color?"none":"#3949ab", ...myStyle, ...uischema?.config?.style }}
                        color={uischemaData?.color}
                        title="Upload File"
                      >
                        <FileUploadIcon />
                        {loading && ProgressBar}
                      </IconButton>
                   
                  </InputAdornment>
                ),
              }}
              helperText={uischemaData.helperText}
              size={uischemaData.size || "medium"}
              type={"file"}
            />
          </PermissionWrapper>
          <Helpertext uischemaData={uischemaData} errors={errors} />
        </FormControl>
      </PermissionWrapper>
      <LoaderInfo id={path} loading={loading} />
    </>
  );
});

export default UploadFile;
