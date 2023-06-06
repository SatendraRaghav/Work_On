import { useEffect, useState } from "react";

// export const useSelection = (path:string,handleChange:any,uischemaData:any):[{}, React.Dispatch<React.SetStateAction<{}>>]=>{
//     const [data,setData] = useState({})
//     useEffect(()=>{
//       const selectedRows =uischemaData?.columns?.dataColumns?.filter((e, i) => {
//         if (data[i]) {
//           return data[i];
//         }
//         return false;
//       });  
//       handleChange(path,{id:data,data:selectedRows})
//     },[data])
   
  // return[data,setData]
  // }
 export const getCsvoptions = (uischemaData:any,id:string)=>{
  const csvOptions = {
    fieldSeparator:uischemaData?.csvOptions?.fieldSeparator?? ",",
    quoteStrings:uischemaData?.csvOptions?.quoteStrings??'"',
    decimalSeparator: uischemaData?.csvOptions?.decimalSeparator??".",
    showLabels: uischemaData?.csvOptions?.showLabels??true,
    useBom: uischemaData?.csvOptions?.useBom??true,
    useKeysAsHeaders: uischemaData?.csvOptions?.useKeysAsHeaders??false,
    headers:uischemaData?.csvOptions?.headers??uischemaData?.columns?.dataColumns?.map((c) => c.header),
    filename: uischemaData?.csvOptions?.filename??id,
  };
  return csvOptions;
}