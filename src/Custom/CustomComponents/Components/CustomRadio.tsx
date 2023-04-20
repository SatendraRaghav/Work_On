import React, { useContext, useEffect } from "react";
import {
  RadioGroup,
  FormControl,
  FormLabel,
  Radio,
  Paper,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import { DataContext } from "../../../Context";
import { useStyles } from "../../../Styles/InputField";
import { Stack } from "@mui/system";

export default function CustomRadio({ data, value, updateValue, path }: any) {
  const [apiOption, setApiOption] = React.useState<Array<any>>([]);
  const { dispatch, state } = useContext(DataContext);
  const pagePath = window.location.pathname.replaceAll("/", "_");
  useEffect(() => {
    setApiOption(data.content.options)
    const apiCall = async () => {
      const result: any = await axios.get(data.content.optionApi);
      const arr = result.data.map((elem: any) => {
        return elem.name;
      });
      setApiOption(arr);
    };
    data.content.optionApi ? apiCall() : setApiOption(data.content.options);
  }, []);
  // setApiOption(data.content.options)
  //@ts-ignore
  const classes = useStyles();
  return (
          <FormControl fullWidth={true} 
          variant="outlined"
          className={classes.radioStyle}
          sx={{
           border:"2px solid #828f9f",
             '&:hover': {
              border:"0.8px solid black", // set the color on hover
            },  
            '&:active': {
              border:"1.5px solid black",// set the color on focus
            }
          }}
          >
            <Stack direction={"row"}>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
            //  className={classes.inputLabelStyle}
             sx={{width:"20%",paddingTop:"10px",fontFamily:"roboto",
            //  color:"#828f9f",
            //  '&:hover': {
            //   color: '#828f9f', // set the color on hover
            // },
            // '&:focus': {
            //   color: 'black', // set the color on focus
            // },
            // '&:active': {
            //   color: 'black', // set the color on focus
            // },
            }}
            >
              {data.content.label}
            </FormLabel>
            <RadioGroup
              sx={{ paddingLeft: "20px" }}
              row
              
              value={value}
              defaultValue={value}
              // className={classes.input}
              defaultChecked={value}
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => {
                updateValue(e.target.value);
              }}
            >
              {apiOption.map((elem: any, i: number) => (
                <FormControlLabel
                  value={elem}
                  control={<Radio  value={elem} />}
                  label={elem}
                />
              ))}
            </RadioGroup>
            </Stack>
          </FormControl>
  );
}
