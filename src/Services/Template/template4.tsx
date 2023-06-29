import { JsonFormsStateContext } from "@jsonforms/react";
import { ReportTemplate1UiSchema } from "../../UiSchema/Template/ReportTemplate1/UiSchema";
import { myService } from "../../service/service";
import { downloadFile } from "../../utils/downloadFile";
import { buildSchema, buildUiSchema } from "../../utils/buildUiSchema";
import { ReportTemplateSchema } from "../../UiSchema/Template/ReportTemplate1/Schema";
import { EmptyBoxField } from "../../components/EmptyBox";
import { validateForm } from "../../utils/validateForm";
import { userValue } from "../../Apple";
export const template4 = (store: any, dynamicData: any, uiSchema: any, schema:any) => {
  const service = myService();
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
      return {};
    },
    getUiSchema: async function () {
      console.log(uiSchema);
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
          uiSchema.elements[1].elements[0].config.main.options =[]
          console.log(error);
          return [];
        });
      return uiSchema;
    },
    getSchema: () => {
      return schema;
    },
    onChange: async function () {
      if( store.newData?.programType){
      await service
        .get(`/programCycle/getByProgramId?id=${store.newData?.programType} `)
        .then((response: any) => {
          const result1 = response.data.payload.map((elem: any) => {
            const cycle = { label: elem.name, value: elem.id };
            return cycle;
          });
          
          uiSchema.elements[1].elements[1].config.main.options =
            result1;
            store.setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        })
        .catch((error) => {});
      }
    },
    loadTable: async () => {
      const UiSchema = uiSchema;
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
            pageName: uiSchema.pageName,
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
            pageName: uiSchema.pageName,
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
            pageName: uiSchema.pageName,
          },
        },
      });
      const myObj = {
        payload: {
          candidateGroup: userValue.payload.positionTypeName,
          candidateUser: userValue.payload.positionName,
          userName: userValue.payload.username,
          programCycleId: store.ctx.core.data.programCycle,

          pageName: uiSchema.pageName,
        },
      };
      await service
        .post("/workflow/getActionListOnCandidateUserAndGroup", myObj)
        .then((res) => {
          console.log(res);
          const options = res.data.payload.map((e: string | number) => {
            return { label: e, value: e };
          });
          
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
          
          UiSchema.elements[2].elements[1].elements[0].config.main.allRowsData =
            tablesData[0];
          
          UiSchema.elements[2].elements[1].elements[1].config.main.allRowsData =
            tablesData[1];
          
          UiSchema.elements[3].elements[2].config.main.allRowsData =
            tablesData[2];
            store.setUiSchema(UiSchema)
        })
        .catch((error) => {
          console.log(error);
        });
      return tablesData;
    },
    actionFunction: async function () {
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
      const taskMapList = store.ctx.core.data[
        "pendingActionListSelectedRowData"
      ].map((elem: any) => {
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
          
          uiSchema.elements[2].elements[1].elements[0].config.main.allRowsData =
            response[0];
          
          uiSchema.elements[2].elements[1].elements[1].config.main.allRowsData =
            response[1];
          
          uiSchema.elements[3].elements[2].config.main.allRowsData =
            response[2];
          store.setUiSchema(uiSchema);
          store.setNotify({ SuccessMessage: message, Success: true });
        })
        .catch((error) => {
          store.setNotify({ FailMessage: "Error", Fail: true });
        });
    },
  };
};
