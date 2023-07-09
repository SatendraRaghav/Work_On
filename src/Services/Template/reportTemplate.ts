import ts from "typescript";
import { myService } from "../../service/service";
import _ from "lodash";
import { getUpdatedUiSchema } from "../../utils/getUpdatedUiSchema";
import { getParams } from "../../utils/getParams";
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
      return {
        programId:"dsa",
        fromDate:new Date("July 21, 2020 01:15:00"),
        endDate:Date.now(),
         HP_Sales_Incentive:[{y:"Uday",x:12},{y:"Sanchay Plus",x:8},{y:"New Product",x:9},{y:"Sanchay FMP",x:23},{y:"Sampoorn Nivesh",x:5},{y:"Samriddh",x:5},{y:"Pragati",x:8},{y:"Pension plan",x:27}],
         DW_Incentive:[{x:"ASM",y:10.12},{x:"SDM",y:14.12},{x:"DCM",y:11.12},{x:"RCM",y:10.12}],
         BCW_Incentive:[{branch:"Kotak",value:500},{branch:"SBI",value:700},{branch:"HDFC",value:900}],
         Top5_Incentive:[{y:"Anant Sharma",x:1116.5},{y:"Pankaj Chauhan",x:1109.5},{y:"Umesh Kumar",x:1046.5},{y:"Vivek Solanki",x:1022},{y:"Siddarth verma",x:1009}],
         Bottom5_Incentive:[{y:"Shriti Gupta",x:259},{y:"Rajat Kumar",x:269},{y:"Alam Khan",x:279},{y:"Raman Singh",x:315},{y:"Jay Sharma",x:265}],
         Top5_PBC:[{y:"Chitranjan Sinha",x:258},{y:"Mohd Adil",x:256},{y:"Shrigopal Singh",x:253},{y:"Gowtham Mukkar",x:241},{y:"Nareshbhai Raval",x:236}],
         Bottom5_PBC:[{y:"Sanju Adhikari",x:66.96},{y:"Amit Prajapati",x:"66"},{y:"Sunil Nirmal",x:70.96},{y:"Pratap Praharaj",x:74.96},{y:"Gurusam Balaguru",x:75.96}]
       };
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
      const formData = _.cloneDeep(store.formData);
      const tempName: string[] = window.location.pathname.split("_");
      const paramName = tempName[tempName.length - 1];
    const data:any = getParams(formData,config,["search"])
      const body = JSON.stringify({
        payload: {
          reportName: paramName,
          reportFormat: "grid",
          params: {
            ...data
            // programId: formData.Program,
            // fromDate: formData.StartDate,
            // endDate: formData.EndDate,
          },
        },
      });
      const headers = {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      };
   const Api = "/workflow/generateReport";
      const response = await this.callBackendApi({
        method: "post",
        body: body,
        header: headers,
        api: Api,
      });
      formData["table"] = response;
      store.setFormdata(formData);
    },
    findGraphData : () => {
     store.setFormdata({
      HP_Sales_Incentive:[{y:"Uday",x:12},{y:"Sanchay Plus",x:8},{y:"New Product",x:9},{y:"Sanchay FMP",x:23},{y:"Sampoorn Nivesh",x:5},{y:"Samriddh",x:5},{y:"Pragati",x:8},{y:"Pension plan",x:27}],
      DW_Incentive:[{manager:"ASM",rupees:10.12},{manager:"SDM",rupees:14.12},{manager:"managermanagerDCM",rupees:11.12},{manager:"RCM",rupees:10.12}],
      BCW_Incentive:[{branch:"Kotak",value:500},{branch:"SBI",value:700},{branch:"HDFC",value:900}],
      Top5_Incentive:[{y:"Anant Sharma",x:1116500},{y:"Pankaj Chauhan",x:1109500},{y:"Umesh Kumar",x:1046500},{y:"Vivek Solanki",x:1022000},{y:"Siddarth verma",x:1009000}],
      Bottom5_Incentive:[{y:"Shriti Gupta",x:259000},{y:"Rajat Kumar",x:269000},{y:"Alam Khan",x:279000},{y:"Raman Singh",x:315000},{y:"Jay Sharma",x:265000}],
      Top5_PBC:[{y:"CHITRANJAN SINHA",x:258},{y:"MOHD ADIL",x:256},{y:"SHRIGOPAL SINGH",x:253},{y:"GOWTHAM MUKKARA",x:241},{y:"NARESHBHAI RAVAL",x:236}],
      Bottom5_PBC:[{y:"Sanju Adhikari",x:66.96},{y:"AMIT PRAJAPATI",x:"66"},{y:"SUNIL NIRMAL",x:70.96},{y:"PRATAP PRAHARAJ",x:74.96},{y:"GURUSAM BALAGURU",x:75.96}]
     })
    }
  };
};






































































































// if (store.ctx.core.errors.length > 0) {
//   store.setValidation("ValidateAndShow");
//   store.setNotify({
//     FailMessage: "Please fill all required fields",
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
