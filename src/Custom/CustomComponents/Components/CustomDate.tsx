import React, { useContext } from "react";
import { Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { InputFieldStyle, useStyles } from "../../../Styles/InputField";
import { DataContext } from "../../../Context";

const styles = {
  root: {
    '& .MuiInputBase-input': {
      fontSize: '56px', // Customize the font size of the input field
    },
    '& .MuiButtonBase-root': {
      padding: '5px', // Customize the padding of the input button
    },
    '& .MuiPickersDay-current': {
      backgroundColor: '#FFC107', // Customize the background color of the current day
      color: '#000000', // Customize the text color of the current day
    },
    '& .MuiPickersDay-daySelected': {
      backgroundColor: '#FFA000', // Customize the background color of the selected day
      color: '#FFFFFF', // Customize the text color of the selected day
    },
  },
};
const CustomDate = ({ data, value, updateValue, path }: any) => {
  const { setFormdata, objFunc, setUiSchema, setSchema, id ,theme} =
  useContext(DataContext);
  const style = theme.useStyles()
  return (
    <Stack>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={styles.root}
        // sx={{ width: "100%", margin: "auto auto" }}
      >
        <DatePicker
         
          label={data.content.label}
           className={style.dateStyle}
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
