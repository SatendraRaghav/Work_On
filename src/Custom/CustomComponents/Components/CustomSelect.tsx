import React, { useContext, useEffect, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Paper,
  Autocomplete,
  TextField,
  Checkbox,
} from "@mui/material";
import { DataContext } from "../../../Context";
import { useNavigate } from "react-router";
import { useJsonForms } from "@jsonforms/react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useStyles } from "../../../Styles/InputField";
import { InputFieldStyle } from "../../../Styles/InputField";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CustomSelect({ data, value, updateValue, path }: any) {
  const ctx = useJsonForms();
  const [apiOption, setApiOption] = React.useState<Array<any>>([]);
  const { state, objFunc, dispatch, setFormdata, setUiSchema, setSchema, id } =
    useContext(DataContext);
  // const [demoValue,setDemoValue] = useState<any>()
  const navigate = useNavigate();
  useEffect(() => {
    setApiOption(data.content.options);
  }, [data.content.options]);
  useEffect(() => {
    data.content.funcName
      ? objFunc
          .getServices(
            id,
            ctx,
            setFormdata,
            setSchema,
            setUiSchema,
            navigate,
            []
          )
          [data.content.funcName]()
      : " ";
  }, []);
  const conditionLoadFunc = (value: any) => {
    objFunc
      .getServices(id, ctx, setFormdata, setSchema, setUiSchema, navigate, [])
      [data.content.conditionalLoadFunc](value);
  };
  //@ts-ignore
  const classes = useStyles();
  const customStyles = {
    label: {
      ...InputFieldStyle
    },
    input: {
      ...InputFieldStyle
    }
  };
  return (
    // <Paper
    //   elevation={2}
    //   sx={{ width: "80%", margin: "auto auto", ...data.style }}
    // >
    <>
      {data.content.multiple ? (
        // <FormControl fullWidth={true} 
        // // sx={{background:"white",borderRadius:"20px"}}
        // // className={classes.autoCompleteStyle}
        // // className={classes.autoCompleteStyle.inputRoot}
        // // variant="filled"
        // >
          <Autocomplete
           
            onChange={(event, newValue) => {
              const value = newValue.map((elem) => {
                if (typeof elem === "string") {
                  return elem;
                }
                return elem.value;
              });
              updateValue(value);
            }}
            // sx={{border:"none"}}
            multiple
            // sx={{border:"none"}}
            // classes={{
            //   inputRoot: classes.autoCompleteStyle.inputRoot,
            //   option: classes.autoCompleteStyle.option,
            // }}
            size="medium"
            sx={{height:"50px"}}
            disableCloseOnSelect
            id="tags-standard"
            options={apiOption}
            getOptionLabel={(option) => {
              return option.label;
            }}
            defaultValue={value}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.label}
              </li>
            )}
            renderInput={(params) => {
              const {InputProps, InputLabelProps} = params;
              return (
              <TextField
                {...params}
                className={classes.input}
                variant="outlined"
                // sx={{borderRadius:"20px",border:"2ps solid black"}}
                // variant="standard"
                // sx={{border:"none"}}
                // InputLabelProps={{style: customStyles.label }}
                // InputProps={{
                //   ...InputProps,
                //   // style: { ...customStyles.input },
                //   // endAdornment: <div {...InputAdornmentProps}>Custom Adornment</div>,
                //   // classes: { root: 'custom-input-root', focused: 'custom-input-focused', notchedOutline: 'custom-input-notched-outline' }
                // }}
                label={data.content.label}
                placeholder={data.content.placeholder}
              />)
            }}
          />
      ) : (
        <>
          <FormControl fullWidth={true} 
          className={classes.input}
          //  sx={{...data.content.style}}
          >
           
            <InputLabel
              id="demo-simple-select-label"
              variant={data.content.variant}
              // className={classes.input}
            >
              {data.content.label}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              // sx={{...data.content.style}}
              label={data.content.label}
              // className={classes.input}
              onChange={(e) => {
                updateValue(e.target.value);
                data.content.conditionalLoadFunc &&
                  conditionLoadFunc(e.target.value);
              }}
            >
              {data.content?.options?.map((elem: any, i: number) => (
                <MenuItem key={elem?.label + i} value={elem.value}>
                  {elem.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
    </>
  );
}
