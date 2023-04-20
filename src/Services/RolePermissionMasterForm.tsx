import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";

import { RolePermissionRecordsUISchema } from "../UiSchema/RolePermissionRecords/UISchema";
import { RolePermissionUISchema } from "../UiSchema/RolePermission/UISchema";
import { RolePermissionSchema } from "../UiSchema/RolePermission/Schema";
export const RolePermissionForm = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?:any,
  otherData?: any
) => {
  const serviceApi = myService()
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
       const action =  otherData[0].get("id")
       let formdata = {}
        if (action) {
            const Api =
              "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&id="+action;
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
      //  const updatedUserUiSchema = await this.pageLoad();
         return  RolePermissionUISchema;
    },
    getSchema: () => {
      return RolePermissionSchema;
    },
    backHandler: function(){
      navigate("/RolePermissionRecords")
    },
    Submit_RolePermission: async function () {
       console.log(ctx.core.data)
       serviceApi.post("/master/save", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.role.RolePermissionStaging",entityValue:ctx.core.data}}).then((res) => {
            console.log("save")
            setFormdata({ ...ctx.core.data, notifySuccess: "Success" });
            console.log(res)
            navigate("/RolePermissionRecords")
        })
    .catch(() => {});
    },
    // pageLoad: async () => {
    //   const Ui = RolePermissionUISchema;
      
    //   return Ui;
    // },
    

    };
};
 