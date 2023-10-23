import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { PositionMasterUISchema } from "../UiSchema/PositionMaster/UISchema";
import { PositionMasterSchema } from "../UiSchema/PositionMaster/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
export const PositionMasterForm = (store: any, dynamicData: any) => {
  const serviceApi = myService(dynamicData?.setLoading, store.navigate,store);
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
        const Api = `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
            if (res.data.payload.type && res.data.payload.parent) {
              console.log({
                ...res.data.payload,
                type: res.data.payload.type.id,
                parent: res.data.payload.parent.id,
              });
              formdata = {
                ...res.data.payload,
                type: res.data.payload.type.id,
                parent: res.data.payload.parent.id,
              };
            } else if (res.data.payload.type) {
              console.log({
                ...res.data.payload,
                type: res.data.payload.type.id,
              });
              formdata = {
                ...res.data.payload,
                type: res.data.payload.type.id,
              };
            } else if (res.data.payload.parent) {
              console.log({
                ...res.data.payload,
                parent: res.data.payload.parent.id,
              });
              formdata = {
                ...res.data.payload,
                parent: res.data.payload.parent.id,
              };
            } else {
              console.log(res.data.payload);
              formdata = res.data.payload;
            }
          })
          .catch(() => {});
      }

      return formdata;
    },
    getUiSchema: async function () {
      const updatedPositionUiSchema = await this.pageLoad();
      return updatedPositionUiSchema;
    },
    getSchema: () => {
      return PositionMasterSchema;
    },
    backHandler: function () {
      store.navigate("/PositionMasterRecords");
    },
    Submit_Position: async function () {
      if (!isErrorsExist(store.schema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Errors on page",
          Fail: true,
        });
      } else {
        let idDataRep: any;
        let idData: any;
        if(store.ctx.core.data.type){
          idData=await this.getType();
        }
        if(store.ctx.core.data.parent){
          idDataRep=await this.getParent();
        }
            
                serviceApi
                  .post("/master/save", {
                    id: 1,
                    payload: {
                      entityName:
                        "com.act21.hyperform3.entity.master.position.PositionNewStaging",
                      entityValue: {
                        ...store.ctx.core.data,
                        type: idData,
                        parent: idDataRep,
                      },
                    },
                  })
                  .then((res) => {
                    if (res.data.status=="SUCCESS") { 
                    store.navigate("/PositionMasterRecords");
                    store.setNotify({
                      SuccessMessage: "Submitted Successfully",
                      Success: true,
                    });
                  }
                  }).catch((error) => {
                    if( error.response ){
                      console.log(error.response.data); // => the response payload 
                        let errorData=error.response.data.payload;
                        handleErrors(errorData,store);
                  }
                  });
      }
    },
    pageLoad: async () => {
      const Ui = PositionMasterUISchema;
      let selectOption: any[] = [];
      let selectParentData: any[] = [];
      console.log(Ui);
      await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNew&status=A"
        )
        .then((res) => {
          selectOption = res.data?.payload?.map((e: any) => {
            return { label: e.name, value: e.id };
          });

          Ui.elements[1].elements[1].config.main.options = selectOption
            ? selectOption
            : [{ id: 1 }];
        });
      await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNew&status=A"
        )
        .then((res) => {
          selectParentData = res.data?.payload?.map((e: any) => {
            return { label: e.name, value: e.id };
          });

          Ui.elements[1].elements[2].config.main.options = selectParentData
            ? selectParentData
            : [{ id: 1 }];
        });

      console.log(Ui);
      return Ui;
    },
    getType: async ()=> {
     return serviceApi
     .get(
       `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNew&id=${store.ctx.core.data.type}`
     )
     .then((rest) => {
       return  rest.data.payload;
        });
      },

      getParent: async ()=> {
       return serviceApi
       .get(
         `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNew&id=${store.ctx.core.data.parent}`
       )
       .then((rest1) => {
         return  rest1.data.payload;
          });
        },
  };
};
