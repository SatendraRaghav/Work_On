import { JsonFormsStateContext } from "@jsonforms/react";
import { PayoutReviewUiSchema } from "../UiSchema/PayoutReview/UiSchema";
import { PayoutProcessingSchema } from "../UiSchema/PayoutProcessing/Schema";
import { userValue } from "../Apple";
import { myService } from "../service/service";

export const PayoutReview = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any
) => {
  const service = myService();
  return {
    setPage: async function () {
      const formdata = await this.getFormdata();
      const uiSchema = await this.getUiSchema();
      const schema = await this.getSchema();

      setFormdata(formdata);
      setUiSchema(uiSchema);
      setSchema(schema);
    },
    getFormdata: async () => {
      return {
        ...ctx.core.data,
        "reportListWrapper.0.agencyRecords.0.caseReportList": [],
        "reportListWrapper.0.agencyRecords.1.summaryReportList": [],
        "pendingListWrapper.0.pendingActionList": [],
      };
    },
    getUiSchema: async function () {
      const uiSchema = PayoutReviewUiSchema;
      console.log(uiSchema)
      let data: any = null;
      await service
        .get("/program/getAll")
        .then((response) => {
          data = response.data.payload.map((elem: any) => {
            return { label: elem.name, value: elem.id };
          });
          //@ts-ignore
          uiSchema.elements[0].options.detail.elements[0].value.content.options =  data;
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
    loadCycle: async function(value: any){
      const uiSchema = PayoutReviewUiSchema;
      await service.get(
          `/programCycle/getByProgramId?id=${
          value
          } `
        )
        .then((response: any) => {
          const result1 = response.data.payload.map((elem: any) => {
            const cycle = { label: elem.name, value: elem.id };
            return cycle;
          });
          //@ts-ignore
          uiSchema.elements[2].options.detail.elements[0].value.content.options =
            result1;
            setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        
        })
        .catch((error) => {
          // return [{}];
        });

    },
    loadTable: async () => {
   
      const data = JSON.stringify({
        payload: {
          reportName: "case_level_report",
          reportFormat: "grid",
          params: {
            // candidateGroup: userValue.payload.positionTypeName,
            // candidateUser: userValue.payload.positionName,
            // userName: userValue.payload.username,
            programCycleId:
              ctx.core.data.PayoutProcessingWrapper[0].programCycle,
          },
        },
      });

      const summaryData = JSON.stringify({
        payload: {
          reportName: "payout_level_report",
          reportFormat: "grid",
          params: {
            candidateGroup: userValue?.payload?.positionTypeName,
            candidateUser: userValue?.payload?.positionName,
            userName: userValue?.payload?.username,
            programCycleId:
              ctx.core.data.PayoutProcessingWrapper[0].programCycle,
          },
        },
      });

      const workflowData = JSON.stringify({
        payload: {
          reportName: "workflow_report",
          reportFormat: "grid",
          params: {
            candidateGroup: userValue?.payload?.positionTypeName,
            candidateUser: userValue?.payload?.positionName,
            userName: userValue?.payload?.username,

            programCycleId:
              ctx.core.data.PayoutProcessingWrapper[0].programCycle,
          },
        },
      });
      const tablesData: Array<any> = [];
      await service
        .post("/workflow/generateReport", data, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          tablesData.push(response.data.payload.reportData.values);
          return service.post("/workflow/generateReport", summaryData, {
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          });
        })
        .then(async (response) => {
          tablesData.push(response.data.payload.reportData.values);
          return service.post("/workflow/generateReport", workflowData, {
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          });
        })
        .then(async (response) => {
          tablesData.push(response.data.payload.reportData.values);
          setFormdata({
            ...ctx.core.data,
            "reportListWrapper.0.agencyRecords.0.caseReportList": tablesData[0],
            "reportListWrapper.0.agencyRecords.1.summaryReportList":
              tablesData[1],
            "pendingListWrapper.0.pendingActionList": tablesData[2],
          });
        })
        .catch((error) => {
          console.log(error);
          setFormdata({
            ...ctx.core.data,
            "reportListWrapper.0.agencyRecords.0.caseReportList": [],
            "reportListWrapper.0.agencyRecords.1.summaryReportList": [],
            "pendingListWrapper.0.pendingActionList": [],
          });
        });

      setUiSchema(PayoutReviewUiSchema);
      return tablesData;
    },
    actionFunction: async function () {
      const taskMapList = ctx.core.data[
        "pendingListWrapper.0.pendingActionListSelectedRowData"
      ].map((elem: any) => {
        return {
          taskId: elem.id,

          businessKey: elem.businessKey,

          businessKeyType: elem.businessKeyType,
        };
      });
      const data: any = {
        payload: {
          taskMapList: taskMapList,
          completionMap: {
            action: ctx.core.data.actions,
            remarks:ctx.core.data.remarks
          },
        },
      };
      service
        .post("/workflow/completeTaskOnTaskIdList", data, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response) => {
          return this.loadTable();
        })
        .then((response) => {
          const message =
            ctx.core.data.actions === "reject" ? "Rejected" : "Approved";
          setFormdata({
            ...ctx.core.data,
            "reportListWrapper.0.agencyRecords.0.caseReportList": response[0],
            "reportListWrapper.0.agencyRecords.1.summaryReportList":
              response[1],
            "pendingListWrapper.0.pendingActionList": response[2],
            notifySuccess: message,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
};
