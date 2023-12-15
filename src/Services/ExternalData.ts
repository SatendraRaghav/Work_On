import { userValue } from "@/App";
import { myService } from "../service/service";
import { ExternalDataSchema } from "../UiSchema/ExternalData/Schema";
import { ExternalDataUiSchema } from "../UiSchema/ExternalData/UiSchema";
import { downloadFile } from "../utils/downloadFile";
import { isErrorsExist } from "../utils/isErrorsExist";
import _ from "lodash";
// let newui:any;
export const ExternalData = (store: any, dynamicData: any) => {
  const service = myService(
    dynamicData?.setLoading,

    store.navigate
  );
  return {
    setPage: async function () {
      const formdata = await this.getFormData();
      store.setFormdata(formdata);
      const uiSchema =  this.getUiSchema();
      store.setUiSchema(uiSchema);
      const schema = await this.getSchema();
      store.setSchema(schema);
    },
    getFormData: async function () {
      const response = await this.loadTable();
      return { LoadRecords: response };
    },
    getUiSchema:  function () {
      return ExternalDataUiSchema;
   
    },
    getSchema:async () => {
      const cloneSchema:any = _.cloneDeep(ExternalDataSchema)
      await service
      .get("/program/getByPositionId?id=" + userValue.payload.userId)
      .then((response) => {
       const data = response.data.payload.map((elem: any) => {
          return { title: elem.name, const: elem.id };
        });
        if(!(_.isEmpty(data))){
        cloneSchema.properties.programType = {
          ... cloneSchema.properties.programType,
          oneOf:data
        }
        }
      })
      return cloneSchema;
    },
    onChange: async function (value: any) {
      const cloneSchema = _.cloneDeep(store.schema);
      if (store?.newData?.programType) {
        await service
          .get(`/program/getById?id=${store?.newData?.programType} `)
          .then((response: any) => {
            const result =
              response.data.payload.config.features.externalData.supportedTypes;

            const data1 = result.map((elem: any) => {
              return { title: elem, const: elem };
            });

            if(data1?.length > 0){
              cloneSchema.properties.fileType = {
                ... cloneSchema.properties.fileType,
                oneOf:data1
              }
            }
            store.setSchema(cloneSchema)
          })     
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
        const formData = new FormData();
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
              LoadRecords: response,
              downloadAggrementCopy: event.target.files[0].name,
            });

            // ExternalDataUiSchema.elements[4].elements[0].config.main.allRowsData = response;
            // store.setUiSchema(ExternalDataUiSchema)
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
    loadExceptionList: async function (externalDataId: any) {
      let formData: any = null;
      let programData: any = null;
      if (store.newData === undefined) {
        formData = _.cloneDeep(store.formData);
        programData = store?.formData;
      } else {
        formData = _.cloneDeep(store.newData);
        programData = store?.newData;
      }

      if (externalDataId === undefined || externalDataId === null) {
        return [];
      }
      const body = {
        payload: {
          reportName: "externalDataExceptionReport",
          reportFormat: "grid",
          params: {
            externalDataId: externalDataId,
            programId: store.ctx.core.data.programType,
          },
        },
      };

      const finalResult = await service
        .post("/workflow/generateReport", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then(async (response: any) => {
          const result = response.data.payload.reportData.values.map(
            (elem: any) => {
              const timestamp = elem["Created On"];
              const date = new Date(timestamp);
              const dateString = date.toLocaleString();
              return { ...elem, "Created On": dateString };
            }
          );
          formData["exceptionList"] = result;
          store.setFormdata(formData);
        })
        .catch((error) => {
          console.log(error);
          formData["exceptionList"] = [];
          store.setFormdata(formData);
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

        await this.loadExceptionList(externalDataId);
      }
    },
    Download_File: () => {
      let body = JSON.stringify({
        withData: true,
        id: store.ctx.core.data.uploadAggrementCopyId,
      });
      service
        .post("/externalData/getById", body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          downloadFile(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Download_File_Table: () => {
      let body = JSON.stringify({
        withData: true,
        id: dynamicData?.rowData.id,
      });
      service
        .post("/externalData/getById", body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          downloadFile(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    View_Error_Table: async function () {
      this.loadExceptionList(dynamicData?.rowData.id);
    },
  };
};
