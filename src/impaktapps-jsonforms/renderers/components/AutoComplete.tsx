import React, { memo, useContext, useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { DataContext } from "../context/Context";
import ComponentWrapper from "../common/ComponentWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { inputProps } from "../interface/inputfieldProps";
import { getComponentProps } from "../common/getComponentProps";
import _ from "lodash";
export const ImpaktAppsAutoComplete = memo(function CustomAutoComplete(
  props: inputProps | any
) {
  const {
    errors,
    uischema,
    rootSchema,
    data,
    required,
    handleChange,
    path,
    schema,
    options,
  } = props.props;
  const uischemaData = uischema?.config?.main;
  const { pageName, permissions, theme, setSchema, serviceProvider } =
    useContext(DataContext);
  const fieldName = getFieldName(path);
  const [changeState, setChangeState] = useState("");
  const [selectOptions, setSelectOptions] = useState(
    options || uischemaData.options || []
  );
  const [value, setValue] = useState<any>(uischemaData.multiple? []:"");
  useEffect(() => {
    const filteredOptions = [];
    options?.map((e) => {
      if (uischemaData.multiple) {
        if (!data?.includes(e?.value)) {
          filteredOptions.push(e);
        }
      } else {
        if (!(data === e?.value)) {
          filteredOptions.push(e);
        }
      }
    });
    setSelectOptions(filteredOptions || []);
  }, [options,data]);
  useEffect(() => {
    if (uischemaData.lazyLoading) {
      throttledFunction();
    }
  }, []);
  function throttle(fn: any, delay: any) {
    let timer: any;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  const throttledFunction = throttle((value) => {
    serviceProvider(
      props.ctx,
      {
        ...uischemaData,
        onInputChange: uischemaData.lazyLoadFunction || "getSelectOptions",
      },
      {
        event: { _reactName: "onInputChange" },
        path,
        ...uischemaData.additionalData,
        paramValue: {
          path,
          serachValue: value,
          currentValue: data,
        },
      }
    ).then((response: any) => {
      if (response) {
        if (uischemaData.freeSolo) {
          response[response.length] = {
            const: changeState,
            title: changeState,
          };
        }
        updateSchema({ options, response, setSchema, path, uischemaData });
        const filteredOptions = [];
         response.map((e)=>{
           if(!(data?.includes(e?.const))){
           filteredOptions.push({ label: e.title, value: e.const });
           }
         })
        setSelectOptions(filteredOptions);
      }
    });
  }, 1000);
  const findOptions = () => {
    const value = data
      ? uischemaData.multiple
        ? options?.filter((o) => data.includes(o.value)) ?? []
        : options?.find((o) => o.value === data) ?? data
      : uischemaData.multiple
      ? []
      : "";
    setValue(value);
  };
  useEffect(() => {
    if (options) {
      findOptions();
    }
  }, [options,data]);
  return (
    <ComponentWrapper
      {...getComponentProps(
        `${pageName}:${fieldName}`,
        permissions,
        schema,
        rootSchema
      )}
    >
      <Autocomplete
     
        onChange={(event, newValue) => {
          if (uischemaData.multiple) {
            if (newValue.length === 0) {
              handleChange(path, undefined);
            } else {
              handleChange(
                path,
                newValue.map((e) => e?.value || e)
              );
            }
          } else {
            handleChange(path, newValue === null ? newValue : newValue.value);
          }
        }}
        onInputChange={(event, newInputValue) => {
          uischemaData.lazyLoading && throttledFunction(newInputValue);
        }}
        sx={{
          ...theme.InputFieldStyle,
          ...uischema?.config?.style,
          ".MuiAutocomplete-tag": {
            backgroundColor: theme.myTheme.palette.background.input,
            color: theme.myTheme.palette.text.input,
            border: `0.5px solid ${theme.myTheme.palette.text.input}`,
          },

          ".MuiAutocomplete-clearIndicator": {
            color: theme.myTheme.palette.text.input, // Change this to the desired color for the close button
          },
        }}
        filterOptions={(x) => x}
        filterSelectedOptions
        freeSolo={uischemaData.freeSolo ? true : false}
        multiple={uischemaData.multiple ? true : false}
        id="tags-standard"
        options={selectOptions?.map((option: any) => option)}
        value={value}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              size={uischemaData?.size ?? "medium"}
              helperText={
                errors !== "" ? errors.includes('pattern')?uischemaData?.errorMessage:errors:uischemaData?.helperText
              }
              error={errors !== "" ? true : false}
              sx={{
                ...theme.InputFieldStyle,
                fontSize: theme.myTheme.palette.typography.autoCompleteFontSize,
                ...uischema?.config?.TextFieldStyle,
              }}
              variant="outlined"
              label={uischemaData?.label}
              disabled={getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema).disabled||uischemaData?.disabled}
              required={required}
              placeholder={uischemaData?.placeholder}
              onChange={
                uischemaData.freeSolo
                  ? (newValue) => {
                      setChangeState(newValue.target.value);
                      handleChange(path, newValue.target.value);
                    }
                  : () => {}
              }
            />
          );
        }}
      />
    </ComponentWrapper>
  );
});

export default ImpaktAppsAutoComplete;

function updateSchema(param) {
  if (param.uischemaData.multiple) {
    param.setSchema((pre: any) => {
      return {
        ...pre,
        properties: {
          ...pre.properties,
          [param.path]: {
            ...pre.properties?.[param.path],
            items: {
              oneOf: param.response,
            },
          },
        },
      };
    });
  } else {
    param.setSchema((pre: any) => {
      return {
        ...pre,
        properties: {
          ...pre.properties,
          [param.path]: {
            ...pre.properties?.[param.path],
            oneOf: param.response || [],
          },
        },
      };
    });
  }
}
