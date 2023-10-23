import React, { memo, useContext, useState } from "react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { inputProps } from "../../interface/inputfieldProps";
import { useDebouncedChange } from "@jsonforms/material-renderers";
import { getFieldName } from "../../permissions/getFieldName";
import { DataContext } from "../../context/Context";
import { useJsonForms, withJsonFormsControlProps } from "@jsonforms/react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const Textarea =  memo(function (props: inputProps) {
  const { data, required, errors, enabled, uischema, path, handleChange } =
  props;
const uischemaData = uischema?.config?.main;
// const fieldName = getFieldName(path);
const { serviceProvider,setFormdata,
  setValidation,
  setNotify,
 
  setSearchParams,
  navigate,
  formData,uiSchema,schema,validationMode,openNotify,theme,permissions,ServiceHolder,pageName,searchParams,
  setAdditionalErrors,
  additionalErrors
} = useContext(DataContext);
const eventToValue = (ev: any) =>
  ev.target.value === "" ? undefined : ev.target.value;
const [inputText, onChange, onClear] = useDebouncedChange(
  handleChange,
  "",
  data,
  path,
  eventToValue
); 
const ctx = useJsonForms();
const codeRunner = async ()=>{
 
  const dynamicFunction = new Function(`return ${inputText}`);
  try{
    const makeFunc = dynamicFunction();
    await makeFunc({ serviceProvider,setFormdata,
      setValidation,
      setNotify,
      ctx,
      setSearchParams,
      navigate,
      formData,uiSchema,schema,validationMode,openNotify,theme,permissions,ServiceHolder,pageName,searchParams,
      setAdditionalErrors,
      additionalErrors},{},{});
  }catch(err){
    console.info(err)
  }
};
  return (
    <div style={{width:"100%",background:"#EDF0F0",boxShadow:"2px 2px 5px gray",padding:"20px",...uischema.config?.style?.containerStyle}}>
      {
        uischemaData?.heading && 
        <div style={{display:"flex",justifyContent:"center",width:"98%",marginLeft:"auto",marginRight:"auto",
         marginBottom:"15px",background:"white",borderRadius:"20px",padding:"5px",
         ...uischema.config?.style?.headerContainerStyle}}>
          <div style={{width:"70%",color:"black",paddingLeft:"10px",display:"flex",
          alignItems:"center",
          ...uischema.config?.style?.headerStyle}}>
            {uischemaData.heading}
          </div>
         { !uischemaData?.hideButton &&   <div style={{width:"30%"}} >
            <Button color="success" sx={{float:"right",marginRight:"10px"}} size="small" variant="contained"  onClick={codeRunner}>
               Run Code
            </Button>
          </div>
          }
        </div> 
      }
      <div style={{width:"96%",margin:"auto",
     ...uischema.config?.style?.textAreaContainerStyle}}>
      <TextareaAutosize
      style={{width:"100%",margin:"auto",
      background:"#121717",color:"white",
      paddingLeft:"5px",
     ...uischema.config?.style?.textAreaStyle
    }}
      value={inputText}
      minRows={uischemaData?.minRows||5}
      minLength={350}
      onChange={(event)=>{
        onChange(event)
      }}
      />
      </div>
    </div>
  );
});

export default  withJsonFormsControlProps(Textarea);;
