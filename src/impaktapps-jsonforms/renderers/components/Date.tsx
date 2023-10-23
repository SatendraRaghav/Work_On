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

const Date = memo(function (props: inputProps) {
  const { data, handleChange, uischema, path, errors, required } = props;
  const uischemaData: any = uischema?.config?.main;
  const { serviceProvider, id, permissions, theme, setDialogBox } =
    useContext(DataContext);
  const style = theme.useStyles();
  const fieldName = getFieldName(path);
  return (
    <Stack>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{ ...theme.DateStyleLocal, ...uischema?.config?.dateStyleLocal }}
      >
        <PermissionWrapper
          path={`${id}:${fieldName}`}
          permissions={permissions}
        >
          <DatePicker
            label={uischemaData?.label}
            className={style.dateStyle}
            value={data || null}
            disabled={uischemaData?.disabled}
            onChange={(newValue) => {
              handleChange(path, newValue);
            }}
            inputFormat={uischemaData?.inputFormat ?? "DD/MM/YYYY"}
            orientation="landscape"
            views={uischemaData?.views}
            renderInput={(params) => (
              <TextField {...params} required={required} value={data || null} />
            )}
          />
        </PermissionWrapper>
      </LocalizationProvider>
    </Stack>
  );
});

export default Date;
