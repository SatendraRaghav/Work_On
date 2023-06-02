import { JsonFormsStateContext } from "@jsonforms/react";
import { ReportTemplate1UiSchema } from "../../UiSchema/Template/ReportTemplate1/UiSchema";
import { InputField } from "../../components/TextInputField";
import { DateInputField } from "../../components/DateInputField";
import { SelectInputField } from "../../components/SelectInputField";
import { Button } from "../../components/Button";
import { myService } from "../../service/service";
import { template1 } from "./template1";


export const templateServiceFactory =    (
  pageName?:any,
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?:any
) => {
  const service = myService()
          return {
            masterTemplate:  async ( )=>{
              const data = JSON.stringify({
                payload: {
                  name: pageName,
                },
              });
              const result = await  service
                .post("/page/getByName", data, {
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                .then(  (response:any) => {
                  const config = response.data.payload.config;
                  const template = response.data.payload.templateMaster.name;
                  switch (template) {
                    case "ReportTemplate1":
                     return template1(pageName,ctx,
                      setFormdata,
                      setUiSchema,
                      setSchema,
                      navigate,
                      otherData,config,schema,setConfig,setAdditionalErrors,setNotify)
                    case "ReportTemplate2":
                      break;
                    case "ReportTemplate3":
                      break;
                  }
                
                })
                .catch((err:any) => {
                  console.log(err);
                });
        
              return result;
            }
          } 
    }
