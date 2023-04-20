import { JsonFormsStateContext } from "@jsonforms/react";
import { ReportTemplate1UiSchema } from "../../UiSchema/Template/ReportTemplate1/UiSchema";
import { InputField } from "../../components/TextInputField";
import { DateInputField } from "../../components/DateInputField";
import { SelectInputField } from "../../components/SelectInputField";
import { Button } from "../../components/Button";
import { myService } from "../../service/service";
import { downloadFile } from "../../utils/downloadFile";
import { EmptyBox } from "../../components/Button";
import { ReportTemplate1 } from "./ReportTemplate1";

export const TemplateMaster =   (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  response?:any
) => {
   let func:any = null
  const service = myService();
 
    //   let config:any = [];
    //   let templateName:any  = ""
    //  service
    //     .get(`/page/getById?id=${otherData[0].get("id")}`, {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //     .then((response) => {
           const templateName = response.data.payload.templateMaster.name;
          const config = response.data.payload.config;
          if(templateName === 'ReportTemplate1'){
            const obj = ReportTemplate1(ctx,setFormdata,setUiSchema,setSchema,navigate,otherData,config);
            return obj;
            //  return {
            //   setPage: async()=>{
            //     ReportTemplate1(ctx,setFormdata,setUiSchema,setSchema,navigate,otherData,config).setPage();
            //   }
            //  }
           }
          // return templateName;
        // }).catch((err) => {
        //   console.log(err);
        // })
  //  return func
  };
