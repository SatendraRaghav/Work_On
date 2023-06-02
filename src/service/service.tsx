import React,{useEffect} from 'react'
import axios from "axios";
import { rootUrl } from "../constant";
import { userValue,setUserValue } from '../Apple'; 
// import { service } from '../Services/ExternalData';
  
export const myService = (setLoading?:any,setDialogBox?:any,navigate?:any)=>{
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
    setLoading?.(false)
    return config;
  },
  error => {
   if( error.response.status === 403){
    setDialogBox({open:true,page:"Logout",setUserValue:setUserValue})
   } 
    
    setLoading?.(false)
    return Promise.reject(error);
  },
);
return demoService;
}

 // rome-ignore lint/suspicious/noExplicitAny: <explanation>
export  const loginService = (setLoading?:any)=>{ 
  const demoService = axios.create({
    baseURL: `${rootUrl}`,
    headers:{
      "Content-Type":"application/json"
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
 