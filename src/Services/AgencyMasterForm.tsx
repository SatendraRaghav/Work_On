import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";

import { AgencyMasterUISchema } from "../UiSchema/AgencyMaster/UiSchema";
import { AgencyMasterSchema } from "../UiSchema/AgencyMaster/Schema";
export const AgencyMasterForm = (
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
  const serviceApi =  myService(otherData[3],otherData[4],navigate);
  return {
    setPage: async function () {
      setFormdata({})
      const schema = this.getSchema();
      setSchema(schema);
      const formData = await this.getFormData();
      setFormdata(formData);
      const UiSchema = await this.getUiSchema();
      setUiSchema(UiSchema);
    
    },
    getFormData: async function(){
       const action =  otherData.searchParams?.get("id")
       let formdata = {}
         if (action) {
             const Api =
               `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.agency.AgencyMasterStaging&id=${action}`;
             await serviceApi
               .get(Api)
               .then((res) => {
                
                      console.log(res.data.payload);
                      formdata=res.data.payload;
                 
                  
            
               })
               .catch(() => {});
           }
      
    return formdata;
    },
    getUiSchema: async function(){
         return  AgencyMasterUISchema
    },
    getSchema: () => {
      return AgencyMasterSchema;
    },
    backHandler: function(){
      navigate("/AgencyMasterRecords")
    },
    Submit_User: async function () {
        let idData:any;
        let idDataRep:any;
        console.log(ctx.core.data)
        serviceApi.post("/master/save", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.agency.AgencyMasterStaging",entityValue:ctx.core.data}}).then((res) => {
      console.log("save")
            setFormdata({ ...ctx.core.data, notifySuccess: "Success" });
            console.log(res)
            navigate("/AgencyMasterRecords")
        
//    })
 }).catch(() => {});
    }
    

    };
};
 