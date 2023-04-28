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
import { InputFieldStyle, RadioStyle } from "../../../Styles/InputField";
import { InputLabelStyle } from "../../../Styles/InputField";
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

  return (
          <FormControl fullWidth={true} 
          variant="outlined"
          sx={{
          ...RadioStyle
          }}
          >
            <Stack direction={"row"}>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
             sx={{ flexGrow:0,fontFamily:"roboto",paddingTop:"7px",paddingLeft:"10px",
            }}
            >
              {data.content.label}
            </FormLabel>
            <RadioGroup
              sx={{ paddingLeft: "20px",flexGrow:1,...InputFieldStyle }}
              row
              value={value}
              defaultValue={value}
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
          
                  control={<Radio size="small" sx={{margin:"1px auto"}}  value={elem} />}
                  label={elem}
                />
              ))}
            </RadioGroup>
            </Stack>
          </FormControl>
  );
}
