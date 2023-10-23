import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { RolePermissionUISchema } from "../UiSchema/RolePermission/UISchema";
import { RolePermissionSchema } from "../UiSchema/RolePermission/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
export const RolePermissionForm = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(dynamicData?.setLoading,  store.navigate,store);
  return {
    setPage: async function () {
      store.setFormdata({})
      const schema = this.getSchema();
      store.setSchema(schema);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData = await this.getFormData();
      store.setFormdata(formData);

    },
   
    getFormData: async function () {
      const action = store.searchParams?.get("id")
      let formdata = {}
      if (action) {
        const Api =
          `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
            console.log(res.data.payload);
            formdata = res.data.payload;
          })
          .catch(() => { });
      }

      return formdata;
    },
    getUiSchema: async function () {
      return RolePermissionUISchema;
    },
    getSchema: () => {
      return RolePermissionSchema;
    },
    backHandler: function () {
      store.navigate("/RolePermissionRecords")
    },
    Submit_RolePermission: async function () {
      if (
        ! isErrorsExist(store.schema, store.ctx.core.errors)
      ) {
        store.setValidation("ValidateAndShow")
        store.setNotify({ FailMessage: "Errors on page", Fail: true, })
      } else {
        serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.role.RolePermissionStaging", entityValue: store.ctx.core.data} }).then((res) => {
          if (res.data.status=="SUCCESS") { 
          store.navigate("/RolePermissionRecords")
          store.setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
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
  };
};
