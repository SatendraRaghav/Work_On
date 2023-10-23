import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { PositionTypeMasterUISchema } from "../UiSchema/PositionTypeMaster/UISchema";
import { PositionTypeMasterSchema } from "../UiSchema/PositionTypeMaster/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
export const PositionTypeMasterForm = (
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
        ! isErrorsExist(store.schema, store.ctx.core.errors)
      ) {
        store.setValidation("ValidateAndShow")
        store.setNotify({ FailMessage: "Errors on page", Fail: true, })
     } else {
        console.log(store.ctx.core.data)
        serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.position.PositionTypeNewStaging", entityValue: store.ctx.core.data } }).then((res) => {
          if (res.data.status=="SUCCESS") { 
          store.setFormdata({ ...store.ctx.core.data });
          store.navigate("/PositionTypeMasterRecords")
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
