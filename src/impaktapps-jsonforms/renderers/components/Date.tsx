import React, { memo, useContext } from "react";
import { FormControl, FormHelperText, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { DataContext } from "../context/Context"; 
import { getFieldName } from "../permissions/getFieldName";
import { useJsonForms } from "@jsonforms/react";
import { inputProps } from "../interface/inputfieldProps";
import Helpertext from "../common/Helpertext";

const Date = memo(function(props:inputProps ){
  const { data, handleChange, uischema, path, errors, required } = props;
  const uischemaData:any = uischema?.config?.main;
  const { serviceProvider, id, permissions, theme, setDialogBox } =
    useContext(DataContext);
  const style = theme.useStyles();
  const ctx = useJsonForms();
  const fieldName = getFieldName(path);
  const callServiceProvider=(event:any,newValue?:any)=>{
    serviceProvider(ctx, uischemaData, 
      {event, path,paramValue:newValue});
    }
  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs} 
      sx={{...theme.DateStyleLocal,...uischema?.config?.dateStyleLocal}}
      >
        <PermissionWrapper
          path={`${id}:${fieldName}`}
          permissions={permissions}
        >
          <FormControl size={uischemaData?.size||"medium"}>
            <PermissionWrapper
              path={`${id}:${fieldName}`}
              permissions={permissions}
            >
              <DatePicker
                label={uischemaData?.label}
                className={style.dateStyle}
                value={data || null}
                onChange={(newValue) => {
                  handleChange(path, newValue);
                  callServiceProvider({type:"change"},newValue)
                }}
                inputFormat={uischemaData?.inputFormat ?? "DD/MM/YYYY"}
                orientation="landscape"
                views={uischemaData?.views}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required={required}
                    onKeyPress={e =>callServiceProvider(e)}
                    onClick={e =>callServiceProvider(e)}
                    onPointerEnter={(event)=>  callServiceProvider(event)}
                    onPointerLeave={(event)=>  callServiceProvider(event)}
                    onFocus={(event)=>  callServiceProvider(event)}
                    onBlur={(event)=>  callServiceProvider(event)}
                    onMouseEnter={(event)=>  callServiceProvider(event)}
                    value={data || null}
                  />
                )}
              />
            </PermissionWrapper>
            <Helpertext uischemaData={uischemaData} errors={errors} />
          </FormControl>
        </PermissionWrapper>
      </LocalizationProvider>
    </Stack>
  );
});

export default Date;
