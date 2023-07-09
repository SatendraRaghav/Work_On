import { myService } from "../../service/service";
import { getUpdatedUiSchema } from "../../utils/getUpdatedUiSchema";
import _ from "lodash";
import { userValue } from "../../Apple";
import { validateForm } from "../../utils/validateForm";
export const reviewTemplate = (
  store: any,
  dynamicData: any,
  config:any,
  uiSchema: any,
  schema: any
) => {
  const service =myService(dynamicData?.setLoading,  store.navigate);
  return {
    setPage: async function () {
      store.setUiSchema(uiSchema);
      const updatedUiSchema = await this.getUiSchema();
      const schema = this.getSchema();
      store.setSchema(schema);
      updatedUiSchema && store.setUiSchema(updatedUiSchema);
      const formData: any = await this.getFormdata();
      store.setFormdata(formData);
    },
    getFormdata: () => {
      return {};
    },
    getUiSchema: async function () {
      const responseUiSchema = await getUpdatedUiSchema(config, uiSchema,service);
      return responseUiSchema;
    },
    getSchema: () => {
      return schema;
    },
    search: async function () {
      await this.eventHandle();
    },
    eventHandle: async function () {
      const formData = _.cloneDeep(store.formData);
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
            pageName: store.uiSchema.pageName,
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
            pageName: store.uiSchema.pageName,
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
            pageName: store.uiSchema.pageName,
          },
        },
      });
      const myObj = {
        payload: {
          candidateGroup: userValue.payload.positionTypeName,
          candidateUser: userValue.payload.positionName,
          userName: userValue.payload.username,
          programCycleId: store.ctx.core.data.programCycle,

          pageName: store.uiSchema.pageName,
        },
      };
      await service
        .post("/workflow/getActionListOnCandidateUserAndGroup", myObj)
        .then((res) => {
          console.log(res);
          const options = res?.data?.payload?.map((e: string | number) => {
            return { label: e, value: e };
          });

          store.uiSchema.elements[3].elements[2].config.main.options = options;
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

          formData["caseReportList"] = tablesData[0];
          formData["summaryReportList"] = tablesData[1];
          formData["pendingActionList"] = tablesData[2];
          // store.setUiSchema(UiSchema)
          store.setFormdata(formData);
        })
        .catch((error) => {
          console.log(error);
        });
      return tablesData;
    },
    onChange: async function () {
      const uiSchema = _.cloneDeep(store.uiSchema);
      if (store.newData?.program) {
        await service
          .get(`/programCycle/getByProgramId?id=${store.newData?.program} `)
          .then((response: any) => {
            const result1 = response.data.payload.map((elem: any) => {
              const cycle = { label: elem.name, value: elem.id };
              return cycle;
            });

            uiSchema.elements[1].elements[1].config.main.options = result1;
            store.setUiSchema(uiSchema);
          })
          .catch((error) => {});
      }
    },
    submit: async function () {
      const formData = _.cloneDeep(store.formData);
      if (
        store.ctx.core.data.remarks === undefined ||
        store.ctx.core.data.remarks === ""
      ) {
        store.setNotify({
          FailMessage: "Please Enter Remarks To Proceed Further",
          Fail: true,
        });
        return;
      }
      if (formData.actions === undefined || formData.actions === null) {
        store.setNotify({
          FailMessage: "Please Select Action To Proceed Further",
          Fail: true,
        });
        return;
      }
      if (
        formData["pendingActionListSelectedRowData"]?.data === undefined ||
        formData["pendingActionListSelectedRowData"]?.data?.length === 0
      ) {
        store.setNotify({
          FailMessage: "Please Select Pending Tasks To Take Action",
          Fail: true,
        });
        return;
      }
      console.log(store.ctx.core.data);
      const taskMapList = store.ctx.core.data[
        "pendingActionListSelectedRowData"
      ]?.data?.map((elem: any) => {
        return {
          taskId: `${elem.id}`,
          businessKey: elem.businessKey,
          businessKeyType: elem.businessKeyType,
        };
      });
      const data: any = {
        payload: {
          taskMapList: taskMapList,
          completionMap: {
            action: formData.actions,
            remarks: formData.remarks,
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
          return this.eventHandle();
        })
        .then((response) => {
          const message =
            store.ctx.core.data.actions === "Reject" ? "Rejected" : "Approved";

          formData["caseReportList"] = response[0];
          formData["summaryReportList"] = response[1];
          formData["pendingActionList"] = response[2];
          formData["caseReportListSelectedRowData"] = undefined;
          formData["summaryReportListSelectedRowData"] = undefined;
          formData["pendingActionListSelectedRowData"] = undefined;
          
          store.setNotify({ SuccessMessage: message, Success: true });
          store.setFormdata(formData)
        })
        .catch((error) => {
          store.setNotify({ FailMessage: "Error", Fail: true });
        });
    },
  };
};