import { JsonFormsStateContext } from "@jsonforms/react";
import ts from "typescript";
import {
  reportUiSchema,
  reportLogic,
  reportConfig
} from "../../UiSchema/Template/ReportTemplate1/UiSchema";
import { myService } from "../../service/service";
import { buildUiSchema } from "../../utils/buildUiSchema";
import _ from "lodash";
let logic: any;
export const template1 = (
  store: any,
  dynamicData: any,
  uiSchema: any,
  schema: any
) => {
  const service = myService();

  return {
    setPage: async function () {
      store.setUiSchema(uiSchema);
      const updatedUiSchema = await this.getUiSchema();
      const schema = this.getSchema();
      store.setSchema(schema);
      store.setUiSchema(updatedUiSchema);
      const formData: any = await this.getFormdata();
      store.setFormdata(formData);
    },
    getFormdata: async function () {
      let formData: any = {};
      return formData;
    },
    getUiSchema: async function () {
      const config = _.cloneDeep(reportConfig);
      const pageUiSchema = _.cloneDeep(uiSchema);
      const myWrappersName:string[] =  Object.keys(config);
      const data = {}
      const demo =  myWrappersName.map((elem:string,i:number)=>{
         const elements =  buildUiSchema(config[elem].components);
         data[elem] = elements
          return {[elem]:elements}
            
      })
       const build = pageUiSchema.elements.map((childElem:any,i:number)=>{
            if(childElem.name){
              pageUiSchema.elements[i].elements = [...data[childElem.name],...pageUiSchema.elements[i].elements]
            }
         })
         return pageUiSchema
    },
    getSchema: () => {
      return schema;
    },
  //  callBackendApi: async (params:any) => {
  //     const data =   await service[params.method](params.api, params.body,params.header)
  //       .then((response: any) => {
    
  //       return  response.data.payload;
  //       })
  //       .catch((err) => {
  //         return []
  //       });
  //       return data;
  //   },
  //   search: async function () {
  //     if (store.ctx.core.errors.length > 0) {
  //       store.setValidation("ValidateAndShow");
  //       store.setNotify({
  //         FailMessage: "Please fill all required fields",
  //         Fail: true,
  //       });
  //       return;
  //     }
  //     // await logic.eventHandle(store,this)
  //     await this.eventHandle(this)
  //   },
   
  };
};



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