import { JsonFormsStateContext } from "@jsonforms/react";
import axios from "axios";

import { myService } from "../service/service";
import _ from "lodash";
import { PayoutProcessingDetailUiSchema } from "@/UiSchema/PayoutProcessingDetail/UiSchema";
import { PayoutProcessingDetailSchema } from "@/UiSchema/PayoutProcessingDetail/Schema";

export const PayoutProcessingDetail = (store: any, dynamicData: any) => {
  const service = myService(dynamicData?.setLoading, store.navigate, store);
  return {
    setPage: async function () {
      const formdata = this.getFormdata();
      const uiSchema = await this.getUiSchema();
      const schema = await this.getSchema();
      store.setFormdata(formdata);
      store.setUiSchema(uiSchema);
      store.setSchema(schema);

      await this.refreshPage();
    },
    refreshPage: async function () {
      const data = await this.refreshData();
      store.setFormdata({ ...data });

      const uiSchema = await this.getUiSchema();
      uiSchema.elements[1].elements[1].config.main.heading = data.cycleName;
      uiSchema.elements[1].elements[3].config.main.heading = data.stage + " "+ data.status;
      uiSchema.elements[1].elements[5].config.main.heading = data.startDate;
      uiSchema.elements[1].elements[7].config.main.heading = data.endDate;
      store.setUiSchema(uiSchema);
    },

    getFormdata: function () {
      const requestId = store.searchParams?.get("id");
      return {};
    },
    getUiSchema: async function () {
      let uiSchema = PayoutProcessingDetailUiSchema;
      console.log(uiSchema);
      return uiSchema;
    },
    getSchema: () => {
      return PayoutProcessingDetailSchema;
    },

    refreshData: async function () {
      const programCycleDetail = await this.getProgramCycleDetailReport();
      const auditList = await this.RequestsDataLoad();
      const exceptionList = await this.ExceptionDataLoad();
      const dataList = await this.processedDataLoad();

      return {
        AuditList: auditList,
        ExceptionList: exceptionList,
        processedDataReport: dataList,
        ...programCycleDetail,
      };
    },

    onChange: async () => {
      let uiSchema = PayoutProcessingDetailUiSchema;
    },
    ComputeData: async function () {
      let data2 = JSON.stringify({
        programCycleId: store.searchParams?.get("id"),
        isForce: this.getIsForce(),
      });
      await service
        .post("/payout/compute", data2, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then(async (response) => {
          store.setNotify({
            SuccessMessage: "Data Compute process completed",
            Success: true,
          });

          await this.refreshPage();
        })
        .catch((err) => {});
    },
    StartWorkflow: async function () {
      let data2 = JSON.stringify({
        programCycleId: store.searchParams?.get("id"),
        isForce: this.getIsForce(),
      });
      await service
        .post("/workflow/startProcessInstance", data2, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then(async (response) => {
          store.setUiSchema(PayoutProcessingDetailUiSchema);
          store.setNotify({
            SuccessMessage: "Workflow Has Been Started",
            Success: true,
          });

          await this.refreshPage();
        })
        .catch((error) => {});
    },
    ExceptionDataLoad: async function () {
      const body = JSON.stringify({
        messageType: "generateReport",
        reportName: "payoutProcessingExceptionReport",
        reportFormat: "grid",
        programId: store.searchParams?.get("programId"),
        programCycleId: store.searchParams?.get("id"),
      });

      const finalResult = await service
        .post("/HyperformMessage/process", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then(async (response: any) => {
          const result = response.data.map(
            (elem: any) => {
              const timestamp = elem["Created On"];
              const date = new Date(timestamp);
              const dateString = date.toLocaleString();
              return { ...elem, "Created On": dateString };
            }
          );
          return result;
        })
        .catch((error) => {
          return [];
        });
      return finalResult;
    },
    processedDataLoad: async function () {
      const body = JSON.stringify({
        messageType: "generateReport",
        reportName: "processedDataReport",
        reportFormat: "grid",
        programId: store.searchParams?.get("programId"),
        programCycleId: store.searchParams?.get("id"),
      });
      const result = await service
        .post("/HyperformMessage/process", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          const result = response.data.map(
            (elem: any) => {
              return { ...elem };
            }
          );

          return result;
        })
        .catch((error) => {
          return [];
        });
      return result;
    },
    backHandler: function () {
      store.navigate("/PayoutProcessing");
    },
    loadData: async function () {
      let data2 = JSON.stringify({
        programCycleId: store.searchParams?.get("id"),
        isForce: this.getIsForce(),
      });
      await service
        .post("/payout/load", data2, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then(async (response) => {
          store.setNotify({
            SuccessMessage: "Data Load process completed",
            Success: true,
          });

          await this.refreshPage();
        })
        .catch((err) => {});
    },
    getProgramCycleDetailReport: async function () {
      const body = JSON.stringify({
        reportName: 'programCycleDetail',
        programCycleId: store.searchParams?.get("id"),
      });
      const result = await service
        .post("/report/getReport", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          const result = response.data;
          const timestamp1 = result.startDate;
          const timestamp2 = result.endDate;
          const startDate = new Date(timestamp1);
          const endDate = new Date(timestamp2);
          const startDateString = startDate.toLocaleString();
          const endDateString = endDate.toLocaleString();
          return {
            ...result,
            startDate: startDateString,
            endDate: endDateString,
          };
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
      return result;
    },

    RequestsDataLoad: async function () {
      const body = JSON.stringify({
        cycleId: store.searchParams?.get("id"),
      });
      const result = await service
        .post("/PayoutProcessingRequest/getAllByCycle", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          const result = response.data;
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
    getIsForce: () => {
      if (store.ctx.core.data?.isForce === "YES") {
        return true;
      } else {
        return false;
      }
    },
  };
};
