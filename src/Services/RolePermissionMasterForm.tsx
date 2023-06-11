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
  const serviceApi = myService(store.setLoading, store.setDialogBox, store.navigate);
  return {
    setPage: async function () {
      store.setFormdata({})
      const schema = this.getSchema();
      store.setSchema(schema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const UiSchema = this.getUiSchema();
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
    getUiSchema: function () {
      //  const updatedUserUiSchema = await this.pageLoad();
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
        store.setConfig("ValidateAndShow")
        store.setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
      } else {
        serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.role.RolePermissionStaging", entityValue: store.newData} }).then((res) => {
          // store.setFormdata({ ...store.ctx.core.data });
          store.navigate("/RolePermissionRecords")
          store.setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
        })
          .catch(() => { });
      }
    },
  };
};
