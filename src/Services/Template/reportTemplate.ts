import ts from "typescript";
import { myService } from "../../service/service";
import _ from "lodash";
import { getUpdatedUiSchema } from "../../utils/getUpdatedUiSchema";
import { fetchFormdata } from "../../utils/fetchFormdata";
export const reportTemplate = (
  store: any,
  dynamicData: any,
  config: any,
  uiSchema: any,
  schema: any
) => {
  const service: any = myService(dynamicData?.setLoading,  store.navigate);
  return {
    setPage: async function () {
      store.setUiSchema(uiSchema);
      const updatedUiSchema = await this.getUiSchema();
      updatedUiSchema && store.setUiSchema(updatedUiSchema);
      const schema = this.getSchema();
      store.setSchema(schema);
     
      const formData: any = await this.getFormdata();
      store.setFormdata(formData);

    },
    getFormdata: async function () {
      return {}
    },
    getUiSchema: async function () {
      const responseUiSchema = await getUpdatedUiSchema(config, uiSchema,service);
      console.log(responseUiSchema)
      return responseUiSchema
    },
    getSchema: () => {
      return schema;
    },
    callBackendApi: async (params: any) => {
      const data = await service[params.method](
        params.api,
        params.body,
        params.header
      )
        .then((response: any) => {
          return response?.data?.payload?.reportData?.values;
        })
        .catch((err: any): any[] => {
          return [];
        });
      return data;
    },
    search: async function () {
      await this.eventHandle();
    },
    eventHandle: async function () {
      const data = await fetchFormdata(config,config.report.components,store.ctx.core.data,{},["search"],service);
     store.setFormdata(data)
    },
  };
};






































































































// if (store.ctx.core.errors.length > 0) {
//   store.setValidation("ValidateAndShow");
//   store.setNotify({
//     FailMessage: "Errors on page",
//     Fail: true,
//   });
//   return;
// }
// const Api = "/workflow/generateReport";
// await service
//   .post(Api, body, {
//     headers: {
//       "Content-Type": "application/json",
//       "X-Requested-With": "XMLHttpRequest",
//     },
//   })
//   .then((response: any) => {
//     const data = response.data?.payload?.reportData?.values;
//   })
//   .catch((err) => {});

// onChange: async function (value: any) {
// const elements = currentUiSchema.elements[1].elements;
// const api = "/page/getLOVs";
// const conditonalOptionsNameList = elements
//   .filter((elem: any) => {
//     return elem.config?.main?.conditionalOptionsName !== undefined;
//   })
//   .map((elem: any) => {
//     return elem.config?.main?.conditionalOptionsName;
//   })
//   .filter((elem: any) => {
//     return elem !== undefined;
//   });
// const body = JSON.stringify({
//   payload: {
//     typeList: conditonalOptionsNameList,
//     params: {
//       id: store.newData?.programType,
//     },
//   },
// });
// const response: any = await service
//   .post(api, body, {
//     headers: {
//       "Content-Type": "application/json",
//       "X-Requested-With": "XMLHttpRequest",
//     },
//   })
//   .then((response: any) => {
//     return response.data.payload;
//   })
//   .catch((error) => {
//     return [{}];
//   });
// const allElements = elements.map((elem: any, i: number) => {
//   if (elem.config?.main?.conditionalOptionsName) {
//     const optionList = response[elem.config.main.conditionalOptionsName];
//     const options = optionList.map((childElem: any) => {
//       return { label: childElem.name, value: childElem.id };
//     });
//     elem.config.main.options = options;
//   }
//   return elem;
// });
// currentUiSchema.elements[1].elements = allElements;
// store.setUiSchema(JSON.parse(JSON.stringify(currentUiSchema)));
// },

// getOptions: async () => {
//   const uiSchema = JSON.parse(JSON.stringify(reportUiSchema));
//   const api = "/page/getLOVs";
//   const body = JSON.stringify({
//     payload: {
//       typeList: ["getPrograms"],
//       params: {},
//     },
//   });
//   const response: any = await service
//     .post(api, body, {
//       headers: {
//         "Content-Type": "application/json",
//         "X-Requested-With": "XMLHttpRequest",
//       },
//     })
//     .then((response: any) => {
//       return response.data.payload.getPrograms;
//     })
//     .catch((error) => {
//       return [{ label: "name", value: "name" }];
//     });
//   const options = response?.map((childElem: any) => {
//     return { label: childElem.name, value: childElem.id };
//   });
//   uiSchema.elements[1].elements[0].config.main.options = options;
//   store.setUiSchema(uiSchema);
// },
// tempTableLoad: async function () {
//   await logic.handle();
//   console.log(store.formData);
// },
// eventHandle : async function (parentObj){
//   const formData = store.formData;
//   const tempName: string[] = window.location.pathname.split("_");
//   const paramName = tempName[tempName.length - 1];
//   const body = JSON.stringify({
//     payload: {
//       reportName:  paramName+"_"+ "caseStatusDetailsDatatable",
//       reportFormat: "grid",
//       params: {
//         programId: store.formData.programType,
//         programCycleId: store.formData.programCycle,
//         type:store.formData.type,
//       },
//     },
//   })
//  const headers =  {
//     headers: {
//       "Content-Type": "application/json",
//       "X-Requested-With": "XMLHttpRequest",
//     },
//   };
//   const Api =
//   "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=A";
//    const response = await parentObj.callBackendApi({method:"get",body:undefined,header:undefined,api:Api})
//    formData["caseStatusDetailsDatatable"]= response;
//   store.setFormdata(formData);

// },
// Edit_Records: function () {
//   store.navigate(
//     `/template_payoutOverrideEdit?id=${dynamicData?.rowData.id}&type=${store.formData.type}&programCycleId=${store.formData.programCycle}&programId=${store.formData.programType}`
//   );
// },
