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
import ComponentWrapper from "../common/ComponentWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { inputProps } from "../interface/inputfieldProps";
import LoaderInfo from "../common/LoaderInfo";
import { ProgressBar } from "./Button";
import { getComponentProps } from "../common/getComponentProps";
const UploadFile = memo(function (props: inputProps) {
  const { data, handleChange, uischema, path, schema,rootSchema, required,errors } = props;
  const uischemaData = uischema.config.main;
  const [loading, setLoading] = useState(false);
  const { serviceProvider, permissions, id, theme, setNotify,pageName } =
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
      ...uischemaData.additionalData,
      path,
      setLoading,
      paramValue: event?.target?.value,
    });
  };
  return (
    <>
      <ComponentWrapper 
    {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)}>
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
          
          error={errors !== "" ? true : false}
          helperText={
            errors !== "" && errors.includes('pattern')?uischemaData?.errorMessage:errors
          }
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
         
          size={uischemaData.size || "medium"}
          type={"file"}
        />
      </ComponentWrapper>
      <LoaderInfo id={path} loading={loading} />
    </>
  );
});

export default UploadFile;
