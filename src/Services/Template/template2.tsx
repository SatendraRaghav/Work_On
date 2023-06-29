import { JsonFormsStateContext } from "@jsonforms/react";
import { ReportTemplate1UiSchema } from "../../UiSchema/Template/ReportTemplate1/UiSchema";
import { myService } from "../../service/service";
import { downloadFile } from "../../utils/downloadFile";
import { buildSchema, buildUiSchema } from "../../utils/buildUiSchema";
import { ReportTemplateSchema } from "../../UiSchema/Template/ReportTemplate1/Schema";
import { EmptyBoxField } from "../../components/EmptyBox";
import { findDOMNode } from "react-dom";
let currentUiSchema: any;
export const template2 = (store: any, dynamicData: any, uiSchema: any, schema:any) => {
  const service = myService();
  return {
    setPage: async function () {
      let formData: any = await this.getFormdata();
      store.setFormdata(formData);
      const currentUiSchema1 = await this.getUiSchema()
      store.setUiSchema(currentUiSchema1);

      const schema = this.getSchema()
      store.setSchema(schema);

    },
    getFormdata: async function () {
      const formData = {}
      const formData1 = await this.loadAdjustments(uiSchema, formData).then((res: any) => {
        return res;
      }).catch((err: any) => {
        return {}
      })
      return formData1;
    },
    getUiSchema: async function () {

      const tempUiSchema = JSON.parse(JSON.stringify(uiSchema));

      const finalUiSchema = this.loadLOVs(tempUiSchema).then((res: unknown) => {
        return this.tempTableLoad(res)
      }).then((ress : unknown) => {
          return ress;
      });
      return finalUiSchema;
    },
    getSchema: () => {
      return schema;
    },

    loadLOVs: async (finalUiSchema: { type: string, stylePage?: any, pageName?: string, elements: any[]; }) => {
      const elements = finalUiSchema.elements[2].elements[0].options.detail.elements;
      const api = '/page/getLOVs';

      const optionsNameList = elements.map((elem: any) => {
        if (elem.config?.main?.optionsName) {
          return elem.config?.main?.optionsName;
        }
      }).filter((elem: any) => { return elem !== undefined });

      const body = JSON.stringify({
        payload: {
          typeList: optionsNameList,
          params: {
            programCycleId: store.searchParams?.get("programCycleId"),
            adjustmentType: store.searchParams?.get("type")
          },
        },
      });


      const response: any = await service
        .post(api, body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          return response.data.payload;
        })
        .catch((error) => {
          return [{}];
        });

      const allElements = elements.map((elem: any, i: number) => {
        if (elem.config?.main?.optionsName) {
          const optionList = response[elem.config.main.optionsName]
          const options = optionList.map((childElem: any) => {
            return { label: childElem.name, value: childElem.name };;
          });
          elem.config.main.options = options;
        }
        return elem;
      });
      finalUiSchema.elements[2].elements[0].options.detail.elements = allElements;
      return finalUiSchema;
    },

    tempTableLoad: async function (uiSchemaParam: any) {
      let formData = JSON.parse(JSON.stringify(store.formData));

      const tempName: string[] = window.location.pathname.split("_");
      const paramName = tempName[tempName.length - 1];

      const element = uiSchemaParam.elements[1].elements[0];
      const body = JSON.stringify({
        payload: {
          reportName: `${paramName}_${element.config.main.name}`,
          reportFormat: "grid",
          params: {
            type: store.searchParams?.get("type"),
            businessKey: store.searchParams?.get("id"),
          },
        },
      });

      let reportData: any[] = [];
      const Api = element.config.main.api;
      await service
        .post(Api, body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          reportData = response.data?.payload?.reportData?.values;
          uiSchemaParam.elements[1].elements[0].config.main.allRowsData = reportData;
        })
        .catch((err) => {
          uiSchemaParam.elements[1].elements[0].config.main.allRowsData = [];
        });


      const element1 = uiSchemaParam.elements[1].elements[1];
      const body1 = JSON.stringify({
        payload: {
          reportName: `${paramName}_${element1.config.main.name}`,
          reportFormat: "grid",
          params: {
            type: store.searchParams?.get("type"),
            businessKey: store.searchParams?.get("id"),
          },
        },
      });

      let reportData1: any[] = [];
      const Api1 = element1.config.main.api;
      await service
        .post(Api1, body1, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          reportData1 = response.data?.payload?.reportData?.values;
          uiSchemaParam.elements[1].elements[1].config.main.allRowsData = reportData1;
        })
        .catch((err) => {
          uiSchemaParam.elements[1].elements[1].config.main.allRowsData = [];
        });

      return uiSchemaParam;
    },
    Edit_Records: function () {
      store.navigate(`/template_payoutOverrideEdit?id=${dynamicData.rowData.id}`)
    },
    Download_Attachment_File: () => {
      service
        .get(`/externalData/getById?withData=true&id=${store.formData.attachmentId}`)
        .then((response) => {
          downloadFile(response.data.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    uploadAttachmentFile: async function () {
      const event = dynamicData.changeEvent;

      const programId = store.searchParams?.get("programId");
      const fileType = "attachment";

      const formData = new FormData();

      formData.append(
        "metadata",
        JSON.stringify({
          payload: {
            name: event.target.files[0].name,
            type: fileType,
            program: programId
          },
        })
      );
      formData.append("file", event?.target.files[0]);
      let fileUploadResponse: any = null;
      await service
        .post("/externalData/save", formData)
        .then((response: any) => {
          fileUploadResponse = response.data.payload;
        })
        .then((response) => {
          const data = { ...store.formData }
          data[`${dynamicData.path}Name`] = event.target.files[0].name
          data[`${dynamicData.path}Id`] = fileUploadResponse
          store.setFormdata({
            ...data,
            "downloadAttachment" : event.target.files[0].name,
            "LoadRecords": response,
          });
          store.setNotify({ SuccessMessage: "File uploaded successfully", Success: true, })
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submit: async function () {
      let attachmentId: any = store.formData?.attachmentId
      let adjustmentType: any = store.searchParams?.get("type");
      let remarks = store.formData?.remarks;
      let businessKey = store.searchParams?.get("id")
      if (
        adjustmentType === undefined || adjustmentType === null || attachmentId === undefined || attachmentId === null
        || remarks === undefined || remarks === null || businessKey === undefined || businessKey === null
      ) {
        store.setValidation("ValidateAndShow")
        store.setNotify({ FailMessage: "Please select Program or Upload file to Load", Fail: true, })
      } else {
        let data2 = JSON.stringify({
          payload: {
            adjustmentType: adjustmentType,
            businessKey: businessKey,
            attachmentId: attachmentId,
            attachmentName: store.formData?.attachmentName,
            remarks: remarks,
            params: {
              adjustments: store.formData?.adjustments
            },
          },
        });

        await service
          .post("/payout/payoutOverride", data2, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            store.setNotify({ SuccessMessage: "Process Successfully Completed", Success: true, })
            return this.tempTableLoad(uiSchema).then((res:any) => {
              store.setUiSchema(res);
            });
          })
          .catch((error) => {
            store.setNotify({ FailMessage: "Process Failed", Fail: true, })
          });
      }
    },
    loadAdjustments: async function (uiSchemaParam: any, formData: any) {
      const element = uiSchemaParam.elements[2].elements[0].elements[0];
      const type = store.searchParams?.get("type")
      const businessKey = store.searchParams?.get("id")

      let reportData: any[] = [];
      const Api = `${element.options.api}?businessKey=${businessKey}&type=${type}`;
      await service
        .get(Api)
        .then((response: any) => {
          reportData = response.data?.payload;
          formData[`${element.options.name}`] = reportData;
        })
        .catch((err) => {
          formData[`${element.options.name}`] = [];
        });
      return formData;
    },
    backHandler: function () {
      store.navigate("/template_payoutOverride");
    },
  };
};
