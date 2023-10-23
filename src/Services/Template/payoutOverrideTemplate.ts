import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../../service/service";
import { downloadFile } from "../../utils/downloadFile";
import { buildSchema, buildUiSchema } from "../../utils/buildUiSchema";
import { EmptyBoxField } from "../../components/EmptyBox";
import { findDOMNode } from "react-dom";
let currentUiSchema: any;
export const template2 = (
  pageName?: any,
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  uiSchema?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?: any,
) => {
  const service =  myService(otherData.setLoading, otherData.setDialogBox);
  return {
    setPage: async function () {
      let formData: any = await this.getFormdata();
      setFormdata(formData);
      const currentUiSchema1 = await this.getUiSchema()
      setUiSchema(currentUiSchema1);

      const schema = this.getSchema()
      setSchema(schema);

    },
    getFormdata: async function () {
      const formData = await this.tempTableLoad(uiSchema).then((res: any) => {
        return res;
      }).catch((err: any) => {
        return {}
      })
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
        return res
      });
      return finalUiSchema;
    },
    getSchema: () => {
      return schema;
    },

    loadLOVs: async function (uiSchemaParam: any) {
      const elements = uiSchemaParam.elements[2].elements[0].options.detail.elements;
      const api = '/page/getLOVs';

      const optionsNameList = elements.map((elem: any) => {
        if (elem.value?.content?.optionsName) {
          return elem.value?.content?.optionsName;
        }
      }).filter((elem: any) => { return elem !== undefined });

      const body = JSON.stringify({
        payload: {
          typeList: optionsNameList,
          params: {
            // programCycleId: store.searchParams?.get("programCycleId"),
            // adjustmentType: store.searchParams?.get("type")
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
        if (elem.value?.content?.optionsName) {
          const optionList = response[elem.value.content.optionsName]
          const options = optionList.map((childElem: any) => {
            return { label: childElem.name, value: childElem.name };;
          });
          elem.value.content.options = options;
        }
        return elem;
      });
      uiSchemaParam.elements[2].elements[0].options.detail.elements = allElements;
      return uiSchemaParam;
    },

    tempTableLoad: async function (uiSchemaParam: any) {
      let formData = JSON.parse(JSON.stringify(ctx.core.data));

      const tempName: string[] = window.location.pathname.split("_");
      const paramName = tempName[tempName.length - 1];

      const element = uiSchemaParam.elements[1].elements[0].elements[0];
      const body = JSON.stringify({
        payload: {
          reportName: `${paramName}_${element.options.name}`,
          reportFormat: "grid",
          params: {
            type: otherData.searchParams?.get("type"),
            businessKey: otherData.searchParams?.get("id"),
          },
        },
      });

      let reportData: any[] = [];
      const Api = element.options.api;
      await service
        .post(Api, body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          reportData = response.data?.payload?.reportData?.values;
          formData[`${element.options.name}`] = reportData;
        })
        .catch((err) => {
          formData[`${element.options.name}`] = [];
        });


      const element1 = uiSchemaParam.elements[1].elements[0].elements[1];
      const body1 = JSON.stringify({
        payload: {
          reportName: `${paramName}_${element1.options.name}`,
          reportFormat: "grid",
          params: {
            type: otherData.searchParams?.get("type"),
            businessKey: otherData.searchParams?.get("id"),
          },
        },
      });

      let reportData1: any[] = [];
      const Api1 = element1.options.api;
      await service
        .post(Api1, body1, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          reportData1 = response.data?.payload?.reportData?.values;
          formData[`${element1.options.name}`] = reportData1;
        })
        .catch((err) => {
          formData[`${element1.options.name}`] = [];
        });

      return formData;
    },
    // Edit_Records: function () {
    //   navigate(`/template_payoutOverrideEdit?id=${otherData.rowData.id}`)
    // },
    Download_Attachment_File: () => {
      service
        .get(`/externalData/getById?withData=true&id=${ctx.core.data.attachmentId}`)
        .then((response) => {
          downloadFile(response.data.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    uploadAttachmentFile: async function () {
      const event = otherData.event;

      const programId = otherData.searchParams?.get("programId");
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
          const data = { ...ctx.core.data }
          data[`${otherData.path}Name`] = event.target.files[0].name
          data[`${otherData.path}Id`] = fileUploadResponse
          setFormdata({
            ...data,
            "LoadRecords": response,
          });
          setNotify({ SuccessMessage: "File uploaded successfully", Success: true, })
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submit: async function () {
      let attachmentId: any = ctx.core.data?.attachmentId
      let adjustmentType: any = otherData.searchParams?.get("type");
      let remarks = ctx.core.data?.remarks;
      let businessKey = otherData.searchParams?.get("id")
      if (
        adjustmentType === undefined || adjustmentType === null || attachmentId === undefined || attachmentId === null
        || remarks === undefined || remarks === null || businessKey === undefined || businessKey === null
      ) {
        setConfig("ValidateAndShow")
        setNotify({ FailMessage: "Please select Program or Upload file to Load", Fail: true, })
      } else {
        let data2 = JSON.stringify({
          payload: {
            adjustmentType: adjustmentType,
            businessKey: businessKey,
            attachmentId: attachmentId,
            attachmentName: ctx.core.data?.attachmentName,
            remarks: remarks,
            params: {
              adjustments: ctx.core.data?.adjustments
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
            setNotify({ SuccessMessage: "Process Successfully Completed", Success: true, })
            return this.tempTableLoad(uiSchema).then((res:any) => {
              setFormdata(res);
            });
          })
          .catch((error) => {
            setNotify({ FailMessage: "Process Failed", Fail: true, })
          });
      }
    },
    loadAdjustments: async function (uiSchemaParam: any, formData: any) {
      const element = uiSchemaParam.elements[2].elements[0];
      const type = otherData.searchParams?.get("type")
      const businessKey = otherData.searchParams?.get("id")

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
      navigate("/template_payoutOverride");
    },
  };
};
