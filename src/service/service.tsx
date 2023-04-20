import React,{useEffect} from 'react'
import axios from "axios";
import { rootUrl } from "../constant";
const userValue = JSON.parse(window.localStorage.getItem("user"))

  
export const myService = ()=>{
  const demoService  = axios.create({
  baseURL:  `${rootUrl}`,
  headers: {
    'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("user"))?.payload?.token}`
  },
  maxBodyLength: Infinity,
});
return demoService;
}
 export const myLoginService = axios.create({
    baseURL: `${rootUrl}`,
    headers:{
      "Content-Type":"application/json"
    },
    maxBodyLength: Infinity,
  });
 