import React from 'react';
import Button from "@mui/material/Button";
import {
  Link,
  useNavigate,
  useSearchParams
} from "react-router-dom";
import  { useContext } from "react";
import { DataContext,actions } from "../../../Context";
import { useJsonForms } from '@jsonforms/react';
import { useStyles } from '../../../Styles/InputField';
// import { setSchema, update } from '@jsonforms/core';

export  const CustomButton = ({ data, path }: any) => {
  const { dispatch, state,setFormdata ,objFunc,setUiSchema,setSchema,id} = useContext(DataContext);
 const navigate = useNavigate();
 const [searchParams, setSearchParams] = useSearchParams()
  const ctx = useJsonForms();
    //@ts-ignore
    const classes = useStyles();
    
  return (
        <>
 
         {    
         data.content.page?
          <Link to={`/${data.content.page}`} style={{ textDecoration: 'none' }} >
        <Button
          fullWidth
          className={classes.buttonStyle}
          type={data.content.type}
          color={data.content.color}
          sx={{...data.style}}
          variant={data.content.variant}
          size={data.content.size || "medium"}
          onClick={(e) => {
           objFunc.getServices(id,ctx,setFormdata,setUiSchema,setSchema,navigate,[searchParams,setSearchParams])[data.content.funcName]()
          }}
        >
  
          {data.content.name}
    
        </Button>
          </Link>
        :
          <Button
          fullWidth
          className={classes.buttonStyle}
          type={data.content.type}
          color={data.content.color}
          sx={{...data.style}}
          variant={data.content.variant}
          hidden
          size={data.content.size || "medium"}
          onClick={(e) => {
          objFunc.getServices(id,ctx,setFormdata,setUiSchema,setSchema,navigate,[searchParams,setSearchParams])[data.content.funcName]()
         
          }}
        >
  
          {data.content.name}
    
        </Button>
        }
        </>
    // </div>
  );
};
