import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { PositionTypeMasterUISchema } from "../UiSchema/PositionTypeMaster/UISchema";
import { PositionTypeMasterSchema } from "../UiSchema/PositionTypeMaster/Schema";
import { validateForm } from "../utils/validateForm";
export const PositionTypeMasterForm = (
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
          `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNewStaging&id=${action}`;
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
      //    const updatedUserUiSchema = await this.pageLoad();
      return PositionTypeMasterUISchema;
    },
    getSchema: () => {
      return PositionTypeMasterSchema;
    },
    backHandler: function () {
      store.navigate("/PositionTypeMasterRecords")
    },
    Submit_PositionType: async function () {
      if (
        ! validateForm(store.schema, store.ctx.core.errors)
      ) {
        store.setValidation("ValidateAndShow")
        store.setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
      } else {
        console.log(store.ctx.core.data)
        serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.position.PositionTypeNewStaging", entityValue: store.ctx.core.data } }).then((res) => {
          store.setFormdata({ ...store.ctx.core.data });
          store.navigate("/PositionTypeMasterRecords")
          store.setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
        })
          .catch(() => { });
      }
    },
  };
};
