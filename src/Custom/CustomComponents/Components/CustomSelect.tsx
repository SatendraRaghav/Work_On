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
  // const classes = useStyles();
  return (
    <>
      {data.content.multiple ? (
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
            multiple
            // size="medium"
            sx={{height:"50px",...InputFieldStyle}}
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
              return (
              <TextField
                {...params}
                // className={classes.input}
                size="medium"
                sx={{...InputFieldStyle,'& .MuiInputBase-input': {
                  fontSize: '12.5px',
                  fontFamily:"inherit",
                  // padding: '2px'
                },}}
                variant="outlined"
                label={data.content.label}
                placeholder={data.content.placeholder}
              />)
            }}
          />
      ) : (
        <>
          <FormControl fullWidth={true} 
          // className={classes.input}
          sx={{...InputFieldStyle}}
          >
           
            <InputLabel
              id="demo-simple-select-label"
              variant={data.content.variant}
            
            >
              {data.content.label}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label={data.content.label}
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
