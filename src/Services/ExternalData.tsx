import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { ExternalDataSchema } from "../UiSchema/ExternalData/Schema";
import { ExternalDataUiSchema } from "../UiSchema/ExternalData/UiSchema";
import { downloadFile } from "../utils/downloadFile";


export const ExternalData =  (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?:any,
  navigate?:any,
  otherData?: any
) => {
const service = myService()
  return {
    setPage : async function () {
      var formdata = await this.getFormData();
      var schema = await this.getSchema();
      var uiSchema = await this.getUiSchema();
      setFormdata(formdata)
      setSchema(schema);
      setUiSchema(uiSchema)
    },
    getFormData: async function() {
      const formdata : any= {};
      await this.loadTable().then((res:any)=>{
      
        formdata["DataLoadParentWrapper.0.DataListWrapper.0.LoadRecords"] = res;
      }).catch((err:any)=>{
        formdata["DataLoadParentWrapper.0.DataListWrapper.0.LoadRecords"] = []
      });
   
      return formdata;
         
    },
    getUiSchema: async function() {
      const uiSchema = ExternalDataUiSchema;
      let data:any = null;
      await service.get('/program/getAll').then( (response) => {
          data = response.data.payload.map((elem:any) => {
            return { label: elem.name, value: elem.id };
          });
          //@ts-ignore
          uiSchema.elements[0].options.detail.elements[2].value.content.options = data;
        })
        .catch((error) => {
          console.log(error);
          return [{}];
        });
      return uiSchema;
    },
    getSchema: () => {
      return ExternalDataSchema;
    },
    typeLoadFunction : async (value:any) => {
     const uiSchema = ExternalDataUiSchema

      await service.get(`/program/getById?id=${
        value
      } `)
    .then((response: any) => {
      const result = response.data.payload.config.features.externalData.supportedTypes;

      const data1 = result.map((elem: any) => {
        return { label: elem, value: elem };
      });
      //@ts-ignore
      uiSchema.elements[1].options.detail.elements[0].options.detail.elements[0].value.content.options = data1 
      setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
    })
    .catch((error) => {
      console.log(error)
      return [{}];
    });
    
    },
    uploadFile :async function() {
      let event = otherData[1];
      const tempArr = event.target.files[0].name.split(".");
      console.log(ctx)
    const formData = new FormData();
    formData.append(
   "metadata",JSON.stringify({
      payload: {
        name: event.target.files[0].name,
        type: ctx.core.data.DataLoadParentWrapper[0].uploadDataWraper[0].agencyType,
        program : ctx.core.data.headerWrapper[0].programType,
      }
    
      })
    );
    
    formData.append("file", event?.target.files[0]);
      let fileUploadResponse:any = null;
       await service
      .post("/externalData/save", formData)
      .then((response: any) => {
        fileUploadResponse = response.data;

          return this.loadTable();
      }).then((response) => {
        setFormdata({
          ...ctx.core.data,
          "DataLoadParentWrapper.0.DataListWrapper.0.LoadRecords" : response,
          "fileUploadResponse":fileUploadResponse,
          notifySuccess: "file uploaded successfully"
        })
      })
      .catch((error) => {
        console.log(error);        
      });
    },
    loadTable :async ()=> {
      const finalResult = await service.get("/externalData/getAll?withData=false")
      .then((response: any) => {

        const result = response.data.payload.map((elem: any) => {
          const timestamp = elem.createdOn;
          const date = new Date(timestamp);
          const dateString = date.toLocaleString();
          return { ...elem, createdOn: dateString };
        });
        return result;
      })
      .catch((error) => {
        console.log(error);
        return [{}];
      });
      return finalResult;
    },
    loadData : async function ()  {
      let data2 = JSON.stringify({
        payload: {
          programId: ctx.core.data.headerWrapper[0].programType,
          externalDataId : ctx.core.data.fileUploadResponse?.payload,
        }
      });
      
        
        await service.post("/externalData/load",data2,{headers:{
          "Content-Type":"application/json"
        }})
        .then(response =>{
            setFormdata({
              ...ctx.core.data,
              notifySuccess : "data loaded to payout table"
            })
          })
          .catch((error) => {
            console.log(error);
          });
    },
    Download_File : () => {
      service.get(`/externalData/getById?withData=true&id=${otherData[0].id}`)
        .then((response) => {
          downloadFile(response.data.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

