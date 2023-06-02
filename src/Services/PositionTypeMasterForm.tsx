import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { PositionTypeMasterUISchema } from "../UiSchema/PositionTypeMaster/UISchema";
import { PositionTypeMasterSchema } from "../UiSchema/PositionTypeMaster/Schema";
import { validateForm } from "../utils/validateForm";
export const PositionTypeMasterForm = (
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
  const serviceApi =  myService(otherData.setLoading, otherData.setDisetDialogBoxalog, navigate);
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
    getFormData: async function () {
      const action = otherData.searchParams?.get("id")
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
      navigate("/PositionTypeMasterRecords")
    },
    Submit_PositionType: async function () {
      if (
        ! validateForm(schema, ctx.core.errors)
      ) {
        setConfig("ValidateAndShow")
        setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
      } else {
        console.log(ctx.core.data)
        serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.position.PositionTypeNewStaging", entityValue: ctx.core.data } }).then((res) => {
          setFormdata({ ...ctx.core.data });
          navigate("/PositionTypeMasterRecords")
          setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
        })
          .catch(() => { });
      }
    },
  };
};
