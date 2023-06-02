import { JsonFormsStateContext } from "@jsonforms/react";
import axios from "axios";
import { PayoutProcessingUiSchema } from "../UiSchema/PayoutProcessing/UiSchema";
import { PayoutProcessingSchema } from "../UiSchema/PayoutProcessing/Schema";

import { myService } from "../service/service";

export const PayoutProcessing = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?:any
) => {
  const service =  myService(otherData.setLoading, otherData.setDialogBox, navigate);
  return {
    setPage: async function () {
      var formdata = await this.getFormdata();
      var uiSchema = await this.getUiSchema();
      var schema = await this.getSchema();
      setFormdata(formdata);
      setUiSchema(uiSchema);
      setSchema(schema);
    },
    getFormdata: async function () {
      return {
        ...ctx.core.data,
        "DataListWrapper.0.AuditList": [],
        "DataListWrapper.0.ExceptionList": [],
      }
    },
    getUiSchema: async function () {
      let uiSchema = PayoutProcessingUiSchema;
      let data: any = null;
      await service
        .get("/program/getAll")
        .then((response) => {
          data = response.data.payload.map((elem: any) => {
            return { label: elem.name, value: elem.id };
          });
          //@ts-ignore
          uiSchema.elements[2].options.detail.elements[2].value.content.options =
            data;
        })
        .catch((error) => {
          console.log(error);
          return [{}];
        });
      return uiSchema;
    },
    getSchema: () => {
      return PayoutProcessingSchema;
    },
    loadCycle: async (value:any) => {
      let uiSchema = PayoutProcessingUiSchema;
      const result: any = await service
        .get(
          `/programCycle/getByProgramId?id=${
           value
              ? value
              : undefined
          } `
        )
        .then((response: any) => {
          const result1 = response.data.payload.map((elem: any) => {
            const cycle = { label: elem.name, value: elem.id };
            return cycle;
          });
          //@ts-ignore
          uiSchema.elements[2].options.detail.elements[3].value.content.options =
            result1;
          setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        })
        .catch((error) => {
          return [{}];
        });
    },
    LoadFileData: async function () {
      let auditData: Array<any> = [];
      let exceptionData: Array<any> = [];
      let data3 = JSON.stringify({
        payload: {
          programCycleId: ctx.core.data.PayoutProcessingWrapper[0].programCycle,
        },
      });

      await service
        .post("/payout/load", data3, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response) => {
          return this.AuditDataLoad();
        })
        .then((response) => {
          auditData = response;
          return this.ExceptionDataLoad();
        })
        .then((response) => {
          exceptionData = response;
          setFormdata({
            ...ctx.core.data,
            "DataListWrapper.0.AuditList": auditData,
            "DataListWrapper.0.ExceptionList": exceptionData,
          });
          setUiSchema(PayoutProcessingUiSchema);
          setSchema({});
          setNotify({SuccessMessage:"Data Loaded Successfully",Success:true,})

        })
        .catch((error) => {
          console.log(error);
          setFormdata({
            ...ctx.core.data,
            "DataListWrapper.0.AuditList": auditData,
            "DataListWrapper.0.ExceptionList": exceptionData,
          });
          setNotify({FailMessage:"Data Loading Failed",Fail:true,})

        });
    },
    ComputeData: async function () {
      let auditData: Array<any> = [];
      let exceptionData: Array<any> = [];
      let data2 = JSON.stringify({
        payload: {
          programCycleId: ctx.core.data.PayoutProcessingWrapper[0].programCycle,
        },
      });
      await service
        .post("/payout/compute", data2, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response) => {
          return this.AuditDataLoad();
        })
        .then(async (response) => {
          auditData = response;
          return this.ExceptionDataLoad();
        })
        .then(async (response) => {
          exceptionData = response;
          setFormdata({
            ...ctx.core.data,
            "DataListWrapper.0.AuditList": auditData,
            "DataListWrapper.0.ExceptionList": exceptionData,
          });

          setUiSchema(PayoutProcessingUiSchema);
          setNotify({SuccessMessage:"Data Compute process completed",Success:true,})

        })
        .catch((err) => {
          setFormdata({
            ...ctx.core.data,
            "DataListWrapper.0.AuditList": auditData,
            "DataListWrapper.0.ExceptionList": exceptionData,
          });
          setNotify({FailMessage:"Data Compute process failed",Fail:true,})

        });
    },
    SartWorkflow: function () {
      let auditData: Array<any> = [];
      let exceptionData: Array<any> = [];
      let data2 = JSON.stringify({
        payload: {
          programCycleId: ctx.core.data.PayoutProcessingWrapper[0].programCycle,
        },
      });
      service
        .post("/workflow/startProcessInstance", data2, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response) => {
          return this.AuditDataLoad();
        })
        .then((response) => {
          auditData = response;
          return this.ExceptionDataLoad();
        })
        .then((response) => {
          exceptionData = response;
          setFormdata({
            ...ctx.core.data,
            notifySuccess: "",
            "DataListWrapper.0.AuditList": auditData,
            "DataListWrapper.0.ExceptionList": exceptionData,
          });

          setUiSchema(PayoutProcessingUiSchema);
          setNotify({SuccessMessage:"Workflow Has Been Started",Success:true,})

        })
        .catch((error) => {
          console.log(error);
          setFormdata({
            ...ctx.core.data,
            "DataListWrapper.0.AuditList": auditData,
            "DataListWrapper.0.ExceptionList": exceptionData,
          });
        });
    },
    searchData: async () => {
      const body = JSON.stringify({
        payload: {
          entityName: "ProgramCycle",
          entityKey: ctx.core.data.PayoutProcessingWrapper[0].programCycle,
        },
      });
      const result = await service
        .post("/audit/getAuditsByEntityNameAndKey", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          const result = response.data.payload;
          result?.sort(function compare(a: any, b: any) {
            return b.modifiedOn - a.modifiedOn;
          });
          const tempAuditData = result?.map((elem: any) => {
            const timestamp1 = elem.createdOn;
            const timestamp2 = elem.modifiedOn;
            const createdDate = new Date(timestamp1);
            const modifiedDate = new Date(timestamp2);
            const createdDateString = createdDate.toLocaleString();
            const modifiedDateString = modifiedDate.toLocaleString();
            return {
              ...elem,
              createdOn: createdDateString,
              modifiedOn: modifiedDateString,
            };
          });
          setFormdata({
            ...ctx.core.data,
            "DataListWrapper.0.AuditList": tempAuditData,
          });
          setUiSchema(PayoutProcessingUiSchema);
        })
        .catch((error) => {
          console.log(error);
          return [{}];
        });
    },
    AuditDataLoad: async function () {
      const body = JSON.stringify({
        payload: {
          entityName: "ProgramCycle",
          entityKey: ctx.core.data.PayoutProcessingWrapper[0].programCycle,
        },
      });
      const result = await service
        .post("/audit/getAuditsByEntityNameAndKey", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          const result = response.data.payload;
          result?.sort(function compare(a: any, b: any) {
            return b.modifiedOn - a.modifiedOn;
          });
          const tempAuditData = result?.map((elem: any) => {
            const timestamp1 = elem.createdOn;
            const timestamp2 = elem.modifiedOn;
            const createdDate = new Date(timestamp1);
            const modifiedDate = new Date(timestamp2);
            const createdDateString = createdDate.toLocaleString();
            const modifiedDateString = modifiedDate.toLocaleString();
            return {
              ...elem,
              createdOn: createdDateString,
              modifiedOn: modifiedDateString,
            };
          });

          return tempAuditData;
        })
        .catch((error) => {
          console.log(error);
          return [{}];
        });
      return result;
    },
    ExceptionDataLoad: async function () {
      const result = await service
        .get("/exception/getAll?withData=false")
        .then((response: any) => {
          const result = response.data.payload;
          result?.sort(function compare(a: any, b: any) {
            return b.modifiedOn - a.modifiedOn;
          });
          const tempExpenseData = result?.map((elem: any) => {
            const timestamp1 = elem.createdOn;
            const timestamp2 = elem.modifiedOn;
            const createdDate = new Date(timestamp1);
            const modifiedDate = new Date(timestamp2);
            const createdDateString = createdDate.toLocaleString();
            const modifiedDateString = modifiedDate.toLocaleString();
            return {
              ...elem,
              createdOn: createdDateString,
              modifiedOn: modifiedDateString,
            };
          });
          return tempExpenseData;
        })
        .catch((error) => {
          console.log(error);
          return [{}];
        });

      return result;
    },
  };
};
