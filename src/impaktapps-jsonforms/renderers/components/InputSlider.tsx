import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { inputProps } from "../interface/inputfieldProps";
import { DataContext } from "../context/Context";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider(props: inputProps) {
  console.log(props);
  const {
    required,
    errors,
    data,
    uischema,
    handleChange,
    path,
    schema,
    rootSchema,
  } = props;
  const uischemaData = uischema?.config?.main;
  const [value, setValue] = React.useState<number | string>("");
  const { pageName, permissions, theme, serviceProvider } =
    React.useContext(DataContext);
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    throttledFunction(newValue);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!uischemaData.limitToMax || +event.target.value <= +uischemaData.max) {
      setValue(event.target.value);
      throttledFunction(event.target.value);
    }
  };
  function throttle(fn: any, delay: any) {
    let timer: any;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
  const throttledFunction = throttle((value) => {
    handleChange(path, value);
  }, 100);
  return (
    <Box
      sx={
        uischemaData.defaultStyle && {
          ...theme.RadioStyle,
          pedding: "80px",
        }
      }
    >
      <Typography sx={{ fontWeight: 500 }} id="input-slider" gutterBottom>
        {uischemaData.label}
      </Typography>
      <Grid
        container
        gap={3}
        // spacing={8}
        sx={{ paddingLeft: "12px", paddingRight: "10px" }}
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid item xs>
          <Slider
            color="primary"
            step={uischemaData.step || 1000}
            marks
            max={uischemaData.max || 10000}
            value={+value}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>

        <Grid item>
          <Input
            value={value}
            sx={{
              width: "100px",
              // ...theme.InputFieldStyle,
            }}
            onChange={handleInputChange}
            inputProps={{
              step: uischemaData.step || 1000,
              min: uischemaData.min || 0,
              max: uischemaData.max || 10000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
