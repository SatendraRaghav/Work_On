import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { ExternalDataSchema } from "../UiSchema/ExternalData/Schema";
import { ExternalDataUiSchema } from "../UiSchema/ExternalData/UiSchema";
import { downloadFile } from "../utils/downloadFile";
import { validateForm } from "../utils/validateForm";
// import { uischema } from "@jsonforms/examples/lib/examples/allOf";
// import { uischema } from "@jsonforms/examples/lib/examples/allOf";
let newui:any;
export const ExternalData = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?: any
) => {
  const service = myService(
    otherData.setLoading,
    otherData.setDialogBox,
    navigate
  );
  return {
    setPage: async function () {
      const uiSchema = await this.getUiSchema();
      newui = uiSchema;
      setUiSchema(uiSchema);
      const schema = await this.getSchema();
      setSchema(schema);
      const formdata = await this.getFormData();

      setFormdata(formdata);
    },
    getFormData: async function () {
      return {};
    },
    getUiSchema: async function () {
      const uiSchema = ExternalDataUiSchema;
      let data: any = null;
      console.log(uiSchema);
      await service
        .get("/program/getAll")
        .then((response) => {
          data = response.data.payload.map((elem: any) => {
            return { label: elem.name, value: elem.id };
          });
          //@ts-ignore
          uiSchema.elements[1].elements[2].config.main.options = data;
           return this.loadTable(uiSchema)
        }).then((res)=>{
          //@ts-ignore
          uiSchema.elements[4].elements[2].config.main.allRowsData = res;
        })
        .catch((error) => {
           //@ts-ignore
          uiSchema.elements[4].elements[2].config.main.allRowsData = [];
        });
      return uiSchema;
    },
    getSchema: () => {
      return ExternalDataSchema;
    },
    typeLoadFunction: async (value: any) => {
      const uiSchema = ExternalDataUiSchema;
      console.log(uiSchema);
      await service
        .get(`/program/getById?id=${otherData.event.target.value} `)
        .then((response: any) => {
          const result =
            response.data.payload.config.features.externalData.supportedTypes;

          const data1 = result.map((elem: any) => {
            return { label: elem, value: elem };
          });
          //@ts-ignore
          uiSchema.elements[1].elements[3].config.main.options = data1;
          setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        })
        .catch((error) => {
          console.log(error);
          return [{}];
        });
    },
    uploadFile: async function () {
      const programData = ctx.core.data;
      const event = otherData.changeEvent;
      const formData = new FormData();
      if (
        programData.programType === undefined ||
        programData.programType === null ||
        programData.fileType === undefined ||
        programData.fileType === null
      ) {
        setConfig("ValidateAndShow");
        setNotify({
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

            return this.loadTable(newui);
          })
          .then((response) => {
            const data = { ...ctx.core.data };
            data[`${otherData.path}Id`] = fileUploadResponse;
            setFormdata({
              ...data,
              downloadAggrementCopy: event.target.files[0].name,
            });
            setNotify({
              SuccessMessage: "File uploaded successfully",
              Success: true,
            });
          })
          .catch((error) => {
            setNotify({
              FailMessage: "Server Error",
              Fail: true,
            });
            console.log(error);
          });
      }
    },
    loadTable: async (uiSchema1:any) => {
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
        // setUiSchema(pre=>{
        
          uiSchema1.elements[4].elements[2].config.main.allRowsData = finalResult;
          setUiSchema(uiSchema1)
        //   return pre;
        // })
      return finalResult;
    },
    loadData: async function () {
      let programId: any = ctx.core.data.programType;
      let externalDataId: any = ctx.core.data?.docAggrementCopyId;
      if (
        programId === undefined ||
        programId === null ||
        externalDataId === undefined ||
        externalDataId === null
      ) {
        setConfig("ValidateAndShow");
        setNotify({
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
            setNotify({
              SuccessMessage: "Data Loaded Successfully",
              Success: true,
            });
          })
          .catch((error) => {
            setNotify({ FailMessage: "Data Load Failed", Fail: true });
          });
      }
    },
    Download_File: () => {
      service
        .get(
          `/externalData/getById?withData=true&id=${ctx.core.data.uploadAggrementCopyId}`
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
        .get(`/externalData/getById?withData=true&id=${otherData.rowData.id}`)
        .then((response) => {
          downloadFile(response.data.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
};
