import React,{useEffect} from 'react'
import axios from "axios";
import { rootUrl } from "../constant";
import { setOpenDialog } from '../App';
import { handleErrors } from '../utils/handleErrors';
export const myService = (setLoading?:any,navigate?:any,store?:any)=>{
  const demoService  = axios.create({
  baseURL:  `${rootUrl}`,
  headers: {
    'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("user"))?.payload?.token}`
  },
  maxBodyLength: Infinity,
});
demoService.interceptors.request.use(
  config => {
   setLoading?.(true)
    return config;
  },

  error => {
    setLoading?.(false)
    return Promise.reject(error);
  },
);
demoService.interceptors.response.use(
  config => {
    if (config?.data?.status=="VALIDATION_ERROR") { // <-- check response OK here
      let errorData=config.data.payload;
    handleErrors(errorData,store);
    setLoading?.(false);
    return config;  

  }
  setLoading?.(false)
    return config;
  },
  error => {
   if( error?.response?.status === 403){
    setOpenDialog(true)
   } 
    
    setLoading?.(false)
    return Promise.reject(error);
  },
);
return demoService;
}

export  const loginService = (setLoading?:any)=>{ 
  const demoService = axios.create({
    baseURL: `${rootUrl}`,
    headers:{
      "Content-Type":"application/json"
    },
    maxBodyLength: Infinity,
  });
  demoService?.interceptors?.request.use(
    config => {
     setLoading?.(true)
      return config;
    },
    error => {
      setLoading?.(false)
      return Promise.reject(error);
    },
  );
  demoService?.interceptors?.response.use(
    config => {
      setLoading?.(false)
      return config;
    },
    error => {      
      setLoading?.(false)
      return Promise.reject(error);
    },
  );
  return demoService;
 }
 