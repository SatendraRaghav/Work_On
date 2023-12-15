import { buildConfig, buildUiSchema,buildSchema } from "impaktapps-ui-builder";
import _ from "lodash";


const pageConfig = {
    uiSchema:{},
    config:{}}
 const savePage = async (
    updatedConfig:any,updatedUiSchema:any,updatedSchema:any,id:number|string,service
    ) => {
      const body: any = {
        payload: {
          config: updatedConfig,
          uiSchema: updatedUiSchema,
          schema:updatedSchema,
          id: id !== null ? id : 0,
          name: updatedConfig.name,
          templateMaster: 1,
        },
      };
      return await service
        .post("/page/save", body)
        .then((res) => {
          return res.data.payload;
        })
    }
   const mergeWithBackendData = async (
    id: number | string, 
    formData: any, 
    path: string| number,
    service:any,
    ) => {
      let backendConfig = await service
        .get(`/page/getById?id=${id??0}`)
        .then((res:any) => {
          return res?.data?.payload||pageConfig;
        })
        let uiSchemaPath = `uiSchema.${path}`;
        let configPath = `config.${path}`
      if(!path){
       uiSchemaPath = "uiSchema";
       configPath = "config"
      }
      const updatedUiSchema = _.set(backendConfig, uiSchemaPath, buildUiSchema(formData)).uiSchema;
      const updatedConfig: any = _.set(backendConfig, configPath, buildConfig(formData)).config;
      const updatedSchema = buildSchema(formData)||{}
      return { updatedUiSchema, updatedConfig,updatedSchema }
    }
   export const submitHandler =  async(store:any,service:any) => {
      const path = store.searchParams?.get("path");
      const id = store.searchParams?.get("id");
      const { updatedUiSchema, updatedConfig ,updatedSchema} = await mergeWithBackendData(id, store.formData, path, service,)
      return await savePage(updatedConfig, updatedUiSchema,updatedSchema, id, service)
        .then((response: any) => {
          return { response, path, id: id || response.id }
        })
    }