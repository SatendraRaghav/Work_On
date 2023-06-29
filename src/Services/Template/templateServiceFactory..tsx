
import { reportUiSchema } from "../../UiSchema/Template/ReportTemplate1/UiSchema";
import { myService } from "../../service/service";
import { template1 } from "./template1";
import { template2 } from "./template2";
import { template3 } from "./template3";
import { template4 } from "./template4";

export const templateServiceFactory =    (
  store:any,
  dynamicData:any
) => {
  const service = myService()
          return {
            masterTemplate:  async ( )=>{
              const data = JSON.stringify({
                payload: {
                  name: store.pageName,
                },
              });
              let pageData : any;
              const result = await  service
                .post("/page/getByName", data, {
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                .then((response:any) =>{
                  pageData = response;
                  const data2 = JSON.stringify({
                    payload: {
                      pageId: pageData.data.payload.id,
                    },
                  });
                  return service
                  .post("/page/getConfiguredPageById", data2, {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                })
                .then(  (response:any) => {
                  if(!(response.data.payload === undefined || response.data.payload === null)){
                    pageData = response;
                  }
                  const uiSchema = reportUiSchema;
                  const schema = pageData.data.payload.schema;
                  const template = pageData.data.payload.templateMaster.name;
                  switch (template) {
                    case "ReportTemplate1":
                     return template1(store,
                      dynamicData,uiSchema,schema)
                    case "ReportTemplate2":
                      return template1(store,
                        dynamicData,uiSchema,schema)
                    case "ReportTemplate3":
                      return template3(store,
                        dynamicData,uiSchema,schema)
                        case "ReportTemplate4":
                      return template4(store,
                        dynamicData,uiSchema,schema)
                  }
                
                })
                .catch((err:any) => {
                  console.log(err);
                });
        
              return result;
            }
          } 
    }
