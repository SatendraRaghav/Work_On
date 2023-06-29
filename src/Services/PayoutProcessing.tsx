import { JsonFormsStateContext } from "@jsonforms/react";
import axios from "axios";
import { PayoutProcessingUiSchema } from "../UiSchema/PayoutProcessing/UiSchema";
import { PayoutProcessingSchema } from "../UiSchema/PayoutProcessing/Schema";

import { myService } from "../service/service";
import _ from "lodash";

export const PayoutProcessing = (
  store:any,
  dynamicData:any
) => {
  const service = myService(dynamicData?.setLoading,  store.navigate);
  return {
    setPage: async function () {
      var formdata = await this.getFormdata();
      var uiSchema = await this.getUiSchema();
      var schema = await this.getSchema();
      store.setFormdata(formdata);
      store.setUiSchema(uiSchema);
      store.setSchema(schema);
    },
    getFormdata: async function () {
      return {}
    },
    getUiSchema: async function () {
      let uiSchema = PayoutProcessingUiSchema;
      console.log(uiSchema)
      let data: any = null;
      await service
        .get("/program/getAll")
        .then((response) => {
          data = response.data.payload.map((elem: any) => {
            return { label: elem.name, value: elem.id };
          });
           
           uiSchema.elements[1].elements[0].config.main.options =
           data;
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
      return uiSchema;
    },
    getSchema: () => {
      return PayoutProcessingSchema;
    },
    onChange: async () => {
      let uiSchema = PayoutProcessingUiSchema;
      if(  store.newData?.programType){
      const result: any = await service
        .get(
          `/programCycle/getByProgramId?id=${
           store.newData?.programType
          } `
        )
        .then((response: any) => {
          const result1 = response.data.payload.map((elem: any) => {
            const cycle = { label: elem.name, value: elem.id };
            return cycle;
          });
          
          uiSchema.elements[1].elements[1].config.main.options =
            result1;
          store.setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        })
        .catch((error) => {
          return [];
        });}
    },
    LoadFileData: async function () {
      let auditData: Array<any> = [];
      let exceptionData: Array<any> = [];
      let data3 = JSON.stringify({
        payload: {
          programCycleId: store.ctx.core.data.PayoutProcessingWrapper[0].programCycle,
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
  
          store.setUiSchema(PayoutProcessingUiSchema);
          store.setSchema({});
          store.setNotify({SuccessMessage:"Data Loaded Successfully",Success:true,})

        })
        .catch((error) => {
          console.log(error);
          store.setFormdata({
            ...store.ctx.core.data,
            "DataListWrapper.0.AuditList": auditData,
            "DataListWrapper.0.ExceptionList": exceptionData,
          });
          store.setNotify({FailMessage:"Data Loading Failed",Fail:true,})

        });
    },
    ComputeData: async function () {
      let auditData: Array<any> = [];
      let exceptionData: Array<any> = [];
      let data2 = JSON.stringify({
        payload: {
          programCycleId: store.ctx.core.data.PayoutProcessingWrapper[0].programCycle,
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
          
          PayoutProcessingUiSchema.elements[3].elements[0].config.main.allRowsData = auditData;
           
          PayoutProcessingUiSchema.elements[4].elements[0].config.main.allRowsData=exceptionData;

          store.setUiSchema(PayoutProcessingUiSchema);
          store.setNotify({SuccessMessage:"Data Compute process completed",Success:true,})

        })
        .catch((err) => {
          
          PayoutProcessingUiSchema.elements[3].elements[0].config.main.allRowsData = auditData;
           
          PayoutProcessingUiSchema.elements[4].elements[0].config.main.allRowsData=exceptionData;
          store.setNotify({FailMessage:"Data Compute process failed",Fail:true,})

        });
    },
    SartWorkflow: function () {
      let auditData: Array<any> = [];
      let exceptionData: Array<any> = [];
      let data2 = JSON.stringify({
        payload: {
          programCycleId: store.ctx.core.data.PayoutProcessingWrapper[0].programCycle,
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
           
           PayoutProcessingUiSchema.elements[3].elements[0].config.main.allRowsData = auditData;
            
           PayoutProcessingUiSchema.elements[4].elements[0].config.main.allRowsData=exceptionData;
          store.setUiSchema(PayoutProcessingUiSchema);
          store.setNotify({SuccessMessage:"Workflow Has Been Started",Success:true,})

        })
        .catch((error) => {
          console.log(error);
           
           PayoutProcessingUiSchema.elements[3].elements[0].config.main.allRowsData = auditData;
            
           PayoutProcessingUiSchema.elements[4].elements[0].config.main.allRowsData=exceptionData;
        });
    },
    searchData: async () => {
      const body = JSON.stringify({
        payload: {
          entityName: "ProgramCycle",
          entityKey: store.ctx.core.data.PayoutProcessingWrapper[0].programCycle,
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
          const UiSchema = PayoutProcessingUiSchema
          console.log(UiSchema)
          // UiSchema.elements[3].config.main.allRowsData = tempAuditData;
          
          UiSchema.elements[3].elements[0].config.main.allRowsData = tempAuditData
          console.log(UiSchema)
          ;
          store.setUiSchema(UiSchema);
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
    },
    AuditDataLoad: async function () {
      const body = JSON.stringify({
        payload: {
          entityName: "ProgramCycle",
          entityKey: store.ctx.core.data.PayoutProcessingWrapper[0].programCycle,
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
          return [];
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
          return [];
        });

      return result;
    },
  };
};
