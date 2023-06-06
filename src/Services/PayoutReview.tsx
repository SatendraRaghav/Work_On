import { JsonFormsStateContext } from "@jsonforms/react";
import { PayoutReviewUiSchema } from "../UiSchema/PayoutReview/UiSchema";
import { PayoutProcessingSchema } from "../UiSchema/PayoutProcessing/Schema";
import { userValue } from "../Apple";
import { myService } from "../service/service";
import { validateForm } from "../utils/validateForm";
import { PayoutReviewSchema } from "../UiSchema/PayoutReview/Schema";
import _ from "lodash";

export const PayoutReview = (
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
        caseReportList: [],
        summaryReportList: [],
        pendingActionList: [],
      };
    },
    getUiSchema: async function () {
      const uiSchema = PayoutReviewUiSchema;
      console.log(uiSchema);
      let data: any = null;
      await service
        .get("/program/getAll")
        .then((response) => {
          data = response.data.payload.map((elem: any) => {
            return { label: elem.name, value: elem.id };
          });
          //@ts-ignore
          uiSchema.elements[1].elements[2].config.main.options = data;
        })
        .catch((error) => {
          console.log(error);
          return [{}];
        });
      return uiSchema;
    },
    getSchema: () => {
      return PayoutReviewSchema;
    },
    loadCycle: async function (value: any) {
      const uiSchema = PayoutReviewUiSchema;
      await service
        .get(`/programCycle/getByProgramId?id=${value} `)
        .then((response: any) => {
          const result1 = response.data.payload.map((elem: any) => {
            const cycle = { label: elem.name, value: elem.id };
            return cycle;
          });
          //@ts-ignore
          uiSchema.elements[1].elements[3].config.main.options = result1;
          setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        })
        .catch((error) => {
          // return [{}];
        });
    },
    loadTable: async () => {
      const UiSchema = _.cloneDeep(PayoutReviewUiSchema);
      if (!validateForm(schema, ctx.core.errors)) {
        setConfig("ValidateAndShow");
        setNotify({
          FailMessage: "Please fill all required fields",
          Fail: true,
        });
        return;
      }
      const data = JSON.stringify({
        payload: {
          reportName: "case_level_report",
          reportFormat: "grid",
          params: {
            candidateGroup: userValue.payload.positionTypeName,
            candidateUser: userValue.payload.positionName,
            userName: userValue.payload.username,
            programCycleId: ctx.core.data.programCycle,
            programId: ctx.core.data.program,
            pageName: PayoutReviewUiSchema.pageName,
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
            programCycleId: ctx.core.data.programCycle,
            programId: ctx.core.data.program,
            pageName: PayoutReviewUiSchema.pageName,
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
            programCycleId: ctx.core.data.programCycle,
            programId: ctx.core.data.program,
            pageName: PayoutReviewUiSchema.pageName,
          },
        },
      });
      const myObj = {
        payload: {
          candidateGroup: userValue.payload.positionTypeName,
          candidateUser: userValue.payload.positionName,
          userName: userValue.payload.username,
          programCycleId: ctx.core.data.programCycle,

          pageName: PayoutReviewUiSchema.pageName,
        },
      };
      await service
        .post("/workflow/getActionListOnCandidateUserAndGroup", myObj)
        .then((res) => {
          console.log(res);
          const options = res.data.payload.map((e: string | number) => {
            return { label: e, value: e };
          });
          //@ts-ignore
          UiSchema.elements[3].elements[5].config.main.options = options;
        });
      const tablesData: Array<any> = [];
      await service
        .post("/workflow/generateReport", data, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then(async (response: any) => {
          tablesData.push(response.data.payload.reportData.values);
          return await service.post("/workflow/generateReport", summaryData, {
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          });
        })
        .then(async (response) => {
          tablesData.push(response.data.payload.reportData.values);
          return await service.post("/workflow/generateReport", workflowData, {
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          });
        })
        .then(async (response) => {
          tablesData.push(response.data.payload.reportData.values);
          //@ts-ignore
          UiSchema.elements[2].elements[1].elements[0].config.main.allRowsData=tablesData[0];
           //@ts-ignore
          UiSchema.elements[2].elements[1].elements[1].config.main.allRowsData=tablesData[1];
           //@ts-ignore
          UiSchema.elements[3].elements[2].config.main.allRowsData = tablesData[2];
          setUiSchema(UiSchema)
        })
        .catch((error) => {
          console.log(error);
        });

      setUiSchema(PayoutReviewUiSchema);
      return tablesData;
    },
    actionFunction: async function () {
      if (ctx.core.data.remarks === undefined || ctx.core.data.remarks === "") {
        setNotify({
          FailMessage: "Please Enter Remarks To Proceed Further",
          Fail: true,
        });
        return;
      }
      if (
        ctx.core.data.actions === undefined ||
        ctx.core.data.actions === null
      ) {
        setNotify({
          FailMessage: "Please Select Action To Proceed Further",
          Fail: true,
        });
        return;
      }
      if (
        ctx.core.data["pendingActionListSelectedRowData"] === undefined ||
        ctx.core.data["pendingActionListSelectedRowData"].length === 0
      ) {
        setNotify({
          FailMessage: "Please Select Pending Tasks To Take Action",
          Fail: true,
        });
        return;
      }
      console.log(ctx.core.data);
      const taskMapList = ctx.core.data["pendingActionListSelectedRowData"].map(
        (elem: any) => {
          return {
            taskId: `${elem.id}`,
            businessKey: elem.businessKey,
            businessKeyType: elem.businessKeyType,
          };
        }
      );
      const data: any = {
        payload: {
          taskMapList: taskMapList,
          completionMap: {
            action: ctx.core.data.actions,
            remarks: ctx.core.data.remarks,
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
            ctx.core.data.actions === "Reject" ? "Rejected" : "Approved";
          setFormdata({
            ...ctx.core.data,
            caseReportList: response[0],
            summaryReportList: response[1],
            pendingActionList: response[2],
          });
          setNotify({ SuccessMessage: message, Success: true });
        })
        .catch((error) => {
          setNotify({ FailMessage: "Error", Fail: true });
        });
    },
  };
};
