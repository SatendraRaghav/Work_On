import React, { useContext } from "react";
import { Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { InputFieldStyle } from "../../../Styles/InputField";


const CustomDate = ({ data, value, updateValue, path }: any) => {
  
  return (
    <Stack>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{ width: "100%", margin: "auto auto" }}
      >
        <DatePicker
          sx={{...InputFieldStyle}}
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
