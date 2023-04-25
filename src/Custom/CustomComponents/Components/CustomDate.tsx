import React, { useContext } from "react";
import { Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { DataContext } from "../../../Context";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useStyles } from "../../../Styles/InputField";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const CustomDate = ({ data, value, updateValue, path }: any) => {
  //  const [demoValue, setDemoValue] = React.useState<Dayjs | null>(null);
 

  // dayjs.extend(utc);
  // dayjs.extend(timezone);
  // const formatDate = (date) => {
  //   return dayjs(date).tz("Asia/Kolkata").format("DDMMYYYY");
  // };
  //@ts-ignore
  const classes = useStyles();
  return (
    <Stack>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{ width: "100%", margin: "auto auto" }}
      >
        <DatePicker
          className={classes.input}
          label={data.content.label}
          value={value||null}
          onChange={(newValue) => {
            //  setDemoValue(newValue)
            updateValue(newValue);
          }}
          renderInput={(params) => <TextField {...params}
           value={value||null} 
           />}
        />
      </LocalizationProvider>
    </Stack>
  );
};

export default CustomDate;
