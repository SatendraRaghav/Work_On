import { PayoutReviewUiSchema } from "../UiSchema/PayoutReview/UiSchema";
import { userValue } from "../Apple";
import { myService } from "../service/service";
import { validateForm } from "../utils/validateForm";
import { PayoutReviewSchema } from "../UiSchema/PayoutReview/Schema";
import _ from "lodash";

export const PayoutReview = (
  store:any,
  dynamicData:any
) => {
  const service = myService(dynamicData?.setLoading,  store.navigate);
  return {
    setPage: async function () {
      const formdata = await this.getFormdata();
      const uiSchema = await this.getUiSchema();
      const schema = await this.getSchema();

      store.setFormdata(formdata);
      store.setUiSchema(uiSchema);
      store.setSchema(schema);
    },
    getFormdata: async () => {
      return {
        // ...store.ctx.core.data,
        // caseReportList: [],
        // summaryReportList: [],
        // pendingActionList: [],
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
    onChange: async function () {
      const uiSchema = PayoutReviewUiSchema;
      await service
        .get(`/programCycle/getByProgramId?id=${  store.newData?.programType} `)
        .then((response: any) => {
          const result1 = response.data.payload.map((elem: any) => {
            const cycle = { label: elem.name, value: elem.id };
            return cycle;
          });
          //@ts-ignore
          uiSchema.elements[1].elements[3].config.main.options = result1;
          store.setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        })
        .catch((error) => {
          // return [{}];
        });
    },
    loadTable: async () => {
      const UiSchema = PayoutReviewUiSchema;
      if (!validateForm(store.schema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
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
            programCycleId: store.ctx.core.data.programCycle,
            programId: store.ctx.core.data.program,
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
            programCycleId: store.ctx.core.data.programCycle,
            programId: store.ctx.core.data.program,
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
            programCycleId: store.ctx.core.data.programCycle,
            programId: store.ctx.core.data.program,
            pageName: PayoutReviewUiSchema.pageName,
          },
        },
      });
      const myObj = {
        payload: {
          candidateGroup: userValue.payload.positionTypeName,
          candidateUser: userValue.payload.positionName,
          userName: userValue.payload.username,
          programCycleId: store.ctx.core.data.programCycle,

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
          store.setUiSchema(UiSchema)
        })
        .catch((error) => {
          console.log(error);
        });

      // store.setUiSchema(PayoutReviewUiSchema);
      return tablesData;
    },
    actionFunction: async function () {
      if (store.ctx.core.data.remarks === undefined || store.ctx.core.data.remarks === "") {
        store.setNotify({
          FailMessage: "Please Enter Remarks To Proceed Further",
          Fail: true,
        });
        return;
      }
      if (
        store.ctx.core.data.actions === undefined ||
        store.ctx.core.data.actions === null
      ) {
        store.setNotify({
          FailMessage: "Please Select Action To Proceed Further",
          Fail: true,
        });
        return;
      }
      if (
        store.ctx.core.data["pendingActionListSelectedRowData"] === undefined ||
        store.ctx.core.data["pendingActionListSelectedRowData"].length === 0
      ) {
        store.setNotify({
          FailMessage: "Please Select Pending Tasks To Take Action",
          Fail: true,
        });
        return;
      }
      console.log(store.ctx.core.data);
      const taskMapList = store.ctx.core.data["pendingActionListSelectedRowData"].map(
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
            action: store.ctx.core.data.actions,
            remarks: store.ctx.core.data.remarks,
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
            store.ctx.core.data.actions === "Reject" ? "Rejected" : "Approved";
              //@ts-ignore
          PayoutReviewUiSchema.elements[2].elements[1].elements[0].config.main.allRowsData=response[0];
          //@ts-ignore
          PayoutReviewUiSchema.elements[2].elements[1].elements[1].config.main.allRowsData=response[1];
          //@ts-ignore
          PayoutReviewUiSchema.elements[3].elements[2].config.main.allRowsData = response[2];
         store.setUiSchema(PayoutReviewUiSchema)
          // store.setFormdata({
          //   ...store.ctx.core.data,
          //   caseReportList: response[0],
          //   summaryReportList: response[1],
          //   pendingActionList: response[2],
          // });
          store.setNotify({ SuccessMessage: message, Success: true });
        })
        .catch((error) => {
          store.setNotify({ FailMessage: "Error", Fail: true });
        });
    },
  };
};
