import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { PositionMasterUISchema } from "../UiSchema/PositionMaster/UISchema";
import { PositionMasterSchema } from "../UiSchema/PositionMaster/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
import { userValue } from "@/App";
import _ from "lodash";
export const PositionMasterForm = (store: any, dynamicData: any) => {
  const serviceApi = myService(dynamicData?.setLoading, store.navigate,store);
  return {
    setPage: async function () {
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const schema = await this.getSchema();
      store.setSchema(schema);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
   
     
    },
    getFormData: async function () {
      const action = store.searchParams?.get("id");
      let formdata = {};
      if (action) {
        const Api = `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
            if (res.data.type && res.data.parent) {
              console.log("parent >>  ",res.data.parent )
              formdata = {
                ...res.data,
                type: res.data.type.id,
                parent: res.data.parent.id,
              };
            } else if (res.data.type) {
         
              formdata = {
                ...res.data,
                type: res.data.type.id,
              };
            } else if (res.data.parent) {
              console.log("parent2 >>  ",res.data.parent )
              formdata = {
                ...res.data,
                parent: res.data.parent.id,
              };
            } else {
              formdata = res.data;
            }
          })
          .catch(() => {});
      }

      return formdata;
    },
    getUiSchema: async function () {
      return PositionMasterUISchema;
    },
    getSchema: async  () => {
      let schema:any = PositionMasterSchema;
      const disabled = localStorage.getItem("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      await serviceApi
      .get(
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNew&status=A"
      )
      .then((res) => {
        const selectOption = res.data.map((e: any) => {
          return { title: e.name, const: e.id };
        })
        if(!(_.isEmpty(selectOption))){
        schema.properties.type = {
          oneOf:selectOption
        }}
        ;})
        await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNew&status=A"
        )
        .then((res) => {
          const selectParentData = res.data.map((e: any) => {
            return { title: e.name, const: e.id };
          });
          if(!(_.isEmpty(selectParentData))){
          schema.properties.parent = {
            oneOf:selectParentData
          }}
      
        });
      return schema;
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
                      entityName:
                        "com.act21.hyperform3.entity.master.position.PositionNewStaging",
                      entityValue: {
                        ...store.ctx.core.data,
                        type: idData,
                        parent: idDataRep,
                      },
                      userId : userValue.payload.userId
                    
                  })
                  .then((res) => {
                    if (res.status==200) { 
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
    getType: async ()=> {
     return serviceApi
     .get(
       `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNew&id=${store.ctx.core.data.type}`
     )
     .then((rest) => {
       return  rest.data;
        });
      },

      getParent: async ()=> {
       return serviceApi
       .get(
         `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNew&id=${store.ctx.core.data.parent}`
       )
       .then((rest1) => {
         return  rest1.data;
          });
        },
  };
};
