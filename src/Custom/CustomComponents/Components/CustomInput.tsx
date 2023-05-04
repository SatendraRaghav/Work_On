import { useContext, useEffect, useState } from 'react';
import { Card, TextField } from '@mui/material';
import { DataContext,actions } from '../../../Context';

import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useJsonForms } from '@jsonforms/react';
const CustomInput = ({ data, value, updateValue,path }: any) => {
     const [demoValue,setDemoValue] = useState<any>()
     const {id,permissions,theme,setFormdata,setUiSchema,setSchema,objFunc} =  useContext(DataContext);
     // const fieldName = getFieldName(path);
     const navigate = useNavigate();
     const ctx = useJsonForms();
     const [searchParams, setSearchParams] = useSearchParams();
     
 
     return(<TextField
                    required={data.content.required}
                    fullWidth
                    // className={classes.input}
                    sx={{...theme.InputFieldStyle,data}}
                    value = {demoValue?demoValue:value}
                    onChange={(e)=>{
                         setDemoValue(e.target.value)
                         updateValue(e.target.value)
                    }} 
                    onKeyPress={(e)=>{
                         if(e.key === "Enter" && data.content.activeEnter){
                           data.content.funcName && objFunc
                           .getServices(id, ctx, setFormdata, setUiSchema, setSchema, navigate, [
                             searchParams,
                             setSearchParams,
                           ])
                           .then((res: any) => {
                             res[data.content.funcName]();
                           });
                         }
                       }}

                    onBlur= {(e)=>{
                         demoValue && updateValue(demoValue)}}
                    onPointerLeave={(e)=>{
                         demoValue && updateValue(demoValue)}}
                    label={data.content.label}
                    helperText={data.content.helperText}
                    size={"medium"}
                    type={data.content.type}
                    variant={data.content.variant}
                    color={data.content.required && (value === "" || value === undefined) ? "error" : "primary"}
               >
               </TextField>
     )
}

export default CustomInput