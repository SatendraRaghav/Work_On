import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";

import { RolePermissionRecordsUISchema } from "../UiSchema/RolePermissionRecords/UISchema";
import { RolePermissionUISchema } from "../UiSchema/RolePermission/UISchema";
import { RolePermissionSchema } from "../UiSchema/RolePermission/Schema";
import { validateForm } from "../utils/validateForm";
export const RolePermissionForm = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?: any
) => {
  const serviceApi =  myService(otherData.setLoading, otherData.setDialogBox, navigate);
  return {
    setPage: async function () {
      setFormdata({})
      const schema = this.getSchema();
      setSchema(schema);
      const formData = await this.getFormData();
      setFormdata(formData);
      const UiSchema = this.getUiSchema();
      setUiSchema(UiSchema);

    },
    getFormData: async function () {
      const action = otherData.searchParams?.get("id")
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
      navigate("/RolePermissionRecords")
    },
    Submit_RolePermission: async function () {
      if (
        ! validateForm(schema, ctx.core.errors)
      ) {
        setConfig("ValidateAndShow")
        setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
      } else {
        serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.role.RolePermissionStaging", entityValue: ctx.core.data } }).then((res) => {
          setFormdata({ ...ctx.core.data });
          navigate("/RolePermissionRecords")
          setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
        })
          .catch(() => { });
      }
    },
  };
};
