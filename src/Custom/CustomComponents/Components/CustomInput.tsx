import { useContext, useEffect, useState } from 'react';
import { Card, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { DataContext,actions } from '../../../Context';
import { InputFieldStyle } from '../../../Styles/InputField';
const CustomInput = ({ data, value, updateValue,path }: any) => {
     const [demoValue,setDemoValue] = useState<any>()
     //@ts-ignore
     // const classes = useStyles();

     return (<TextField
                    required={data.content.required}
                    fullWidth
                    // className={classes.input}
                    sx={{...InputFieldStyle,data}}
                    value = {demoValue?demoValue:value}
                    onChange={(e)=>{
                         setDemoValue(e.target.value)
                         updateValue(e.target.value)
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