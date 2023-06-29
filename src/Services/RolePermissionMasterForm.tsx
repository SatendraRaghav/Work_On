import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { RolePermissionUISchema } from "../UiSchema/RolePermission/UISchema";
import { RolePermissionSchema } from "../UiSchema/RolePermission/Schema";
import { validateForm } from "../utils/validateForm";
export const RolePermissionForm = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(dynamicData?.setLoading,  store.navigate);
  return {
    setPage: async function () {
      store.setFormdata({})
      const schema = this.getSchema();
      store.setSchema(schema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);

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
        ! validateForm(store.schema, store.ctx.core.errors)
      ) {
        store.setValidation("ValidateAndShow")
        store.setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
      } else {
        serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.role.RolePermissionStaging", entityValue: store.ctx.core.data} }).then((res) => {
          store.navigate("/RolePermissionRecords")
          store.setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
        })
          .catch(() => { });
      }
    },
  };
};
