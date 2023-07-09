import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { ExternalDataSchema } from "../UiSchema/ExternalData/Schema";
import { ExternalDataUiSchema } from "../UiSchema/ExternalData/UiSchema";
import { downloadFile } from "../utils/downloadFile";
import { validateForm } from "../utils/validateForm";
// let newui:any;
export const ExternalData = (
  store:any,
  dynamicData:any
) => {
  const service = myService(
    dynamicData?.setLoading,
    
    store.navigate
      );
  return {
    setPage: async function () {
      const uiSchema = await this.getUiSchema();
      store.setUiSchema(uiSchema);
      const schema = await this.getSchema();
      store.setSchema(schema);
      const formdata = await this.getFormData();

      store.setFormdata(formdata);
    },
    getFormData: async function () {
      const response = await this.loadTable();
       return {LoadRecords:response}
    },
    getUiSchema: async function () {
      const uiSchema:unknown = ExternalDataUiSchema;
      let data: any = null;
      console.log(uiSchema);
      await service
        .get("/program/getAll")
        .then((response) => {
          data = response.data.payload.map((elem: any) => {
            return { label: elem.name, value: elem.id };
          });
          //@ts-ignore
          uiSchema.elements[1].elements[0].config.main.options = data;
        })
        .catch((error) => {
            //@ts-ignore
         uiSchema.elements[3].elements[0].config.main.allRowsData = [];
        });
      return uiSchema;
    },
    getSchema: () => {
      return ExternalDataSchema;
    },
    onChange: async (value: any) => {
      const uiSchema = ExternalDataUiSchema;
      if(store?.newData?.programType){
      await service
        .get(`/program/getById?id=${store?.newData?.programType} `)
        .then((response: any) => {
          const result =
            response.data.payload.config.features.externalData.supportedTypes;

          const data1 = result.map((elem: any) => {
            return { label: elem, value: elem };
          });
          
          uiSchema.elements[1].elements[1].config.main.options = data1;
          store.setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
      }
    },
    uploadFile: async function () {
      const programData = store.ctx.core.data;
      const event = dynamicData.changeEvent;
      const formData = new FormData();
      if (
        programData.programType === undefined ||
        programData.programType === null ||
        programData.fileType === undefined ||
        programData.fileType === null
      ) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Please select Program or Type to Upload the file",
          Fail: true,
        });
      } else {
        formData.append(
          "metadata",
          JSON.stringify({
            payload: {
              name: event.target.files[0].name,
              type: programData.fileType,
              program: programData.programType,
            },
          })
        );
        formData.append("file", event?.target.files[0]);
        let fileUploadResponse: any = null;
        await service
          .post("/externalData/save", formData)
          .then((response: any) => {
            fileUploadResponse = response.data.payload;

            return this.loadTable();
          })
          .then((response) => {
          
            const data = { ...store.ctx.core.data };
            data[`${dynamicData.path}Id`] = fileUploadResponse;
            store.setFormdata({
              ...data,
              downloadAggrementCopy: event.target.files[0].name,
            });
            
           ExternalDataUiSchema.elements[3].elements[0].config.main.allRowsData = response;
            store.setUiSchema(ExternalDataUiSchema)
            store.setNotify({
              SuccessMessage: "File uploaded successfully",
              Success: true,
            });
          })
          .catch((error) => {
            store.setNotify({
              FailMessage: "Server Error",
              Fail: true,
            });
            console.log(error);
          });
      }
    },
    loadTable: async () => {
      const finalResult = await service
        .get("/externalData/getAll?withData=false")
        .then((response: any) => {
          response.data.payload?.sort(function compare(a: any, b: any) {
            return b.createdOn - a.createdOn;
          });
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
          return [];
        });
      return finalResult;
    },
    loadData: async function () {
      let programId: any = store.ctx.core.data.programType;
      let externalDataId: any = store.ctx.core.data?.uploadAggrementCopyId;
      if (
        programId === undefined ||
        programId === null ||
        externalDataId === undefined ||
        externalDataId === null
      ) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Please select Program or Upload file to Load",
          Fail: true,
        });
      } else {
        let data2 = JSON.stringify({
          payload: {
            programId: programId,
            externalDataId: externalDataId,
          },
        });

        await service
          .post("/externalData/load", data2, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            store.setNotify({
              SuccessMessage: "Data Loaded Successfully",
              Success: true,
            });
          })
          .catch((error) => {
            store.setNotify({ FailMessage: "Data Load Failed", Fail: true });
          });
      }
    },
    Download_File: () => {
      service
        .get(
          `/externalData/getById?withData=true&id=${store.ctx.core.data.uploadAggrementCopyId}`
        )
        .then((response) => {
          downloadFile(response.data.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Download_File_Table: () => {
      service
        .get(`/externalData/getById?withData=true&id=${dynamicData?.rowData.id}`)
        .then((response) => {
          downloadFile(response.data.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
};
