import React, { memo, useContext, useState } from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { inputProps } from "../interface/inputfieldProps";
import { useDebouncedChange } from "@jsonforms/material-renderers";
import { getFieldName } from "../permissions/getFieldName";
import { DataContext } from "../context/Context";
import { useJsonForms, withJsonFormsControlProps } from "@jsonforms/react";
import { FormControl, InputLabel } from "@mui/material";
import ComponentWrapper from "../common/ComponentWrapper";
import { getComponentProps } from "../common/getComponentProps";
import Helpertext from "../common/Helpertext";

const Textarea = memo(function (props: inputProps) {
  const { data, uischema, path, handleChange,schema,rootSchema ,errors} =
    props;
  const uischemaData = uischema?.config?.main;
  const { pageName, permissions, theme } = useContext(DataContext);
  const eventToValue = (ev: any) =>
    ev.target.value === "" ? undefined : ev.target.value;
  const [inputText, onChange, onClear] = useDebouncedChange(
    handleChange,
    "",
    data,
    path,
    eventToValue
  );
  const fieldName = getFieldName(path);
  return (
    <ComponentWrapper
    {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)} >
      <FormControl
        fullWidth={true}
        
        sx={{
          position: "relative",
          ...theme.InputFieldStyle,
          ...uischema?.config?.style,
        }}
      >
        {uischemaData?.heading ||
          (uischemaData.label && (
            <InputLabel
              sx={{
                position: "relative",
                paddingLeft: "10px",
                borderRadius: "10px",
                top: "-10px",
                left: "10px",
                zIndex: 4,
                background: "white",
                width: "100px",
                border: "1px solid gray",
                ...uischema?.config?.style,
              }}
              htmlFor="textarea-label"
              variant="standard"
            >
              {uischemaData?.heading || uischemaData.label}
            </InputLabel>
          ))}
        <TextareaAutosize
          id="textarea-label"
          aria-label="textarea-label"
          placeholder="Write your content here"
          style={{
            width: "100%",
            margin: "auto",
            borderRadius: "10px",
            // background: "#121717",
            // color: "white",
            paddingTop: "12px",
            paddingLeft: "5px",
            ...uischema.config?.style,
          }}
          value={inputText}
          minRows={uischemaData?.minRows || 5}
          minLength={350}
        
          onChange={(event) => {
            onChange(event);
          }}
        />
         <Helpertext uischemaData={uischemaData} errors={errors} />
      </FormControl>
    </ComponentWrapper>
  );
});

export default withJsonFormsControlProps(Textarea);
