import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { RoleMasterUISchema } from "../UiSchema/RoleMaster/UISchema";
import { RoleMasterSchema } from "../UiSchema/RoleMaster/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
import { userValue } from "@/App";
import _ from "lodash";
export const RoleMasterForm = (store: any, dynamicData: any) => {
  const serviceApi = myService(
    dynamicData?.setLoading,
    
    store.navigate,
    store
  );
  return {
    setPage: async function () {
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const schema = await this.getSchema();
      store.setSchema(schema);
      const UiSchema =  this.getUiSchema();
      store.setUiSchema(UiSchema);
  
      
    },
    getFormData: async function () {
      const action = store.searchParams?.get("id");
      let formdata = {};
      if (action) {
        const Api = `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
            if (res.data.permissionList) {
              let result = res.data.permissionList.map((a: any) => {
                return a.id 
              });
              
              formdata = { ...res.data, permissionList: result };
            } else {
              formdata = res.data;
            }
          })
          .catch(() => {});
      }
      console.log(formdata)
      return formdata;
    },
    getUiSchema:  function () {
      return RoleMasterUISchema
    },
    getSchema: async () => {
      let schema:any =  _.cloneDeep(RoleMasterSchema);
      const disabled = localStorage.getItem("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      await serviceApi
      .get(
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermission&status=A"
      )
      .then((res) => {
       const selectOption = res.data?.map((e: any) => {
          return { title: String(e.permName||e.id), const: e.id|| e.permName };
        });
        if(!(_.isEmpty(selectOption))){
       schema.properties.permissionList = {
        type:"array",
        items:{
          oneOf:selectOption
        }
       }}
      });
      return schema;
    },
    backHandler: function () {
      store.navigate("/RoleMasterRecords");
    },
    Submit_Role: async function () {
      if (!isErrorsExist(RoleMasterSchema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Errors on page",
          Fail: true,
        });
      } else {
        
        let permissions:any;
        if(store.ctx.core.data.permissionList){
          permissions=await this.getPermissions();
        }
        
            return serviceApi.post("/master/save", {
              
                entityName:
                  "com.act21.hyperform3.entity.master.role.RoleStaging",
                entityValue: {
                  ...store.ctx.core.data,
                  permissionList: permissions,
                },
                userId : userValue.payload.userId
              
            })
          .then((res2) => {
            if (res2.status==200) { 
            store.navigate("/RoleMasterRecords");
            console.log(store.setNotify)
            store.setNotify({
              SuccessMessage: "Submitted Successfully",
              Success: true,
            });
          }

          })
          .catch((error) => {
            if( error.response ){
              console.log(error.response.data); // => the response payload 
                let errorData=error.response.data.payload;
                handleErrors(errorData,store);
          }
          });
      }
    },
    pageLoad: async () => {
      const Ui = RoleMasterUISchema;
      let selectOption: any[] = [];
      await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermission&status=A"
        )
        .then((res) => {
          selectOption = res.data?.map((e: any) => {
            return { label: e.permName||e.id, value: e.id };
          });
          Ui.elements[1].elements[1].config.main.options = selectOption
        });
      console.log(Ui);
      return Ui;
    },
    getPermissions: async ()=> {
      const idlist = store.ctx.core.data.permissionList;
     return serviceApi
          .post("/master/getDetailsById", {
            id: 1,
           
              entityName:
                "com.act21.hyperform3.entity.master.role.RolePermission",
              entityValue: idlist,
            
          })
          .then((rest) => {
       return  rest.data;
        });
      },
  };
};
