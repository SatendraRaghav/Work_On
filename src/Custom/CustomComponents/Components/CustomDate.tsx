import React, { useContext } from "react";
import { Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { DataContext } from "../../../Context";
import {
  checkDisableCondition,
  checkHiddenCondition,
  checkInputFieldValidation,
} from "../../utils/Permission";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const CustomDate = ({ data, value, updateValue, path }: any) => {
    //  const [demoValue, setDemoValue] = React.useState<Dayjs | null>(null);
  const { state } = useContext(DataContext);
  const pagePath = `${window.location.pathname.replaceAll("/", "_")}_Disabled`;
  const hidden =  
  checkHiddenCondition(
    pagePath,
    path,
    state.accessPermissions
  );
  dayjs.extend(utc);
dayjs.extend(timezone);
  const formatDate = (date) => {
    return dayjs(date).tz('Asia/Kolkata').format('DDMMYYYY');
  };
  const validate = checkInputFieldValidation(value, data);
  return (
    <Paper
      elevation={2}
      sx={{
        width: "80%",
        ...data.style,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        margin: "auto auto",
      }}
    >
      {hidden ? (
        <></>
      ) : (
        <>
         <div style={{width:"100%"}}>
          <Stack>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            
            sx={{width:"100%", margin: "auto auto" }}

          >
               {validate[0]}
            <DatePicker
              label={data.content.label}
              value={value}
              disabled={checkDisableCondition(
                pagePath,
                path,
                state.accessPermissions
              )}
              onChange={(newValue) => {
              //  setDemoValue(newValue)
                updateValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} 
              value={value}
              />}
            />
          </LocalizationProvider>
          </Stack>
          </div>
        </>
      )}
    </Paper>
  );
};

export default CustomDate;
