import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { RoleMasterUISchema } from "../UiSchema/RoleMaster/UISchema";
import { RoleMasterSchema } from "../UiSchema/RoleMaster/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
export const RoleMasterForm = (store: any, dynamicData: any) => {
  const serviceApi = myService(
    dynamicData?.setLoading,
    
    store.navigate,
    store
  );
  return {
    setPage: async function () {
      store.setFormdata({});
      const schema = this.getSchema();
      store.setSchema(schema);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
    },
    getFormData: async function () {
      const action = store.searchParams?.get("id");
      let formdata = {};
      if (action) {
        const Api = `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
            if (res.data.payload.permissionList) {
              let result = res.data.payload.permissionList.map((a: any) => {
                return { label: a.permName, value: a.id };
              });
              console.log({ ...res.data.payload, permissionList: result });
              formdata = { ...res.data.payload, permissionList: result };
            } else {
              console.log(res.data);
              formdata = res.data.payload;
            }
          })
          .catch(() => {});
      }

      return formdata;
    },
    getUiSchema: async function () {
      const updatedRoleUiSchema = await this.pageLoad();
      return updatedRoleUiSchema;
    },
    getSchema: () => {
      return RoleMasterSchema;
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
              id: 1,
              payload: {
                entityName:
                  "com.act21.hyperform3.entity.master.role.RoleStaging",
                entityValue: {
                  ...store.ctx.core.data,
                  permissionList: permissions,
                },
              },
            })
          .then((res2) => {
            if (res2.data.status=="SUCCESS") { 
            store.navigate("/RoleMasterRecords");
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
          "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&status=A"
        )
        .then((res) => {
          selectOption = res.data?.payload?.map((e: any) => {
            return { label: e.permName, value: e.id };
          });
          
          Ui.elements[1].elements[1].config.main.options = selectOption
            ? selectOption
            : [{ id: 1 }];
        });
      console.log(Ui);
      return Ui;
    },
    getPermissions: async ()=> {
      const idlist = store.ctx.core.data.permissionList.map(
        (a: any) => a.value
      );
     return serviceApi
          .post("/master/getDetailsById", {
            id: 1,
            payload: {
              entityName:
                "com.act21.hyperform3.entity.master.role.RolePermissionStaging",
              entityValue: idlist,
            },
          })
          .then((rest) => {
       return  rest.data.payload;
        });
      },
  };
};
