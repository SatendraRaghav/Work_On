import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { ProgramMasterCycleSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycle/Schema";
import { ProgramMasterCycleUiSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycle/UiSchema";
import { downloadFile } from "../../utils/downloadFile";
import { myService } from "../../service/service";
import { isErrorsExist } from "../../utils/isErrorsExist";
import { validateFile } from "../../utils/validateFile";
import { ErrorObject } from "ajv";
import { dynamicDataType } from "../../utils/dynamicDataType";
import { handleErrors } from "@/utils/handleErrors";
export const CycleForm = (store: any, dynamicData: dynamicDataType) => {
  const serviceApi = myService(dynamicData?.setLoading, store.navigate, store);
  return {
    setPage: async function () {
      store.setFormdata({});
      const schema = this.getSchema();
      store.setSchema(schema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
    },
    getFormData: async function () {
      const action = store.searchParams?.get("id");
      let formdata = {};
      if (action) {
        const Api =
          "/master/getDetailById?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging";
        await serviceApi
          .get(`${Api}&id=${action}`)
          .then((res) => {
            const newData = this.changeServerToFormData(res);
            formdata = newData;
          })
          .catch(() => {});
      }
      return formdata;
    },
    getUiSchema: async function () {
      const updatedProgramCycleUiSchema = await this.programLoadName(
        store.formData
      );
      return updatedProgramCycleUiSchema;
    },
    getSchema: () => {
      return ProgramMasterCycleSchema;
    },
    backHandler: function () {
      store.navigate("/CycleRecords");
    },
    Submit_PM_Cycle: async function () {
      if (!isErrorsExist(store.schema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Errors on page",
          Fail: true,
        });
      } else {
        let result: any;
        let data: any;
        if (
          store.formData.groupId &&
          store.formData.project &&
          store.formData.version
        ) {
          result = await this.getRule();
        }
        data = this.changeFormdataToServer(result?.data?.payload?.id);
        await serviceApi
          .post("/master/save", {
            id: 1,
            payload: {
              entityName:
                "com.act21.hyperform3.entity.program.ProgramCycleStaging",
              entityValue: data,
            },
          })
          .then((res) => {
            if (res?.data?.status == "SUCCESS") {
              store.setFormdata({ ...store.ctx.core.data });
              store.navigate("/CycleRecords");
              store.setNotify({
                SuccessMessage: "Submitted Successfully",
                Success: true,
              });
            }
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data); // => the response payload
              let errorData = error.response.data.payload;
              handleErrors(errorData, store);
            }
          });
      }
    },
    changeFormdataToServer: (ruleId: number) => {
      let reportsData = null;
      let program;
      if (store.ctx.core.data.reportNames) {
        reportsData = store.ctx.core?.data?.reportNames.map((e: any) => {
          return e.value;
        });
      }
      if (store.ctx.core.data.program) {
        program = JSON.parse(store.ctx.core?.data?.program);
      }

      const core = {
        name: store.ctx.core?.data?.name,
        startDate: store.ctx.core?.data?.startDate,
        endDate: store.ctx.core?.data?.endDate,
        id: store.ctx.core?.data?.id,
        program: program,
      };
      const data = {
        ...core,
        config: {
          features: {
            workflow: {
              processDefKey: store.ctx.core?.data?.processDefKey1,
              externalDataId: store.ctx.core?.data?.uploadWorkflowFileId,
              externalFileName: store.ctx.core?.data?.downloadWorkflowFile,
            },
            invoice: {
              enabled: store.ctx.core?.data?.invoiceEnabled,
              externalDataId: store.ctx.core?.data?.uploadInvoiceFileId,
              externalFileName: store.ctx.core?.data?.downloadInvoiceFile,
            },
            Reports: {
              names: reportsData,
            },
            Clawback: {
              enabled: store.ctx.core?.data?.clawbackEnabled,
            },
            Adjustments: store.ctx.core?.data?.adjustments,
            timeouts: {
              loadTimeOut: store.ctx.core?.data?.loadTimeout,
              computeTimeOut: store.ctx.core?.data?.computeTimeout,
            },
            rule: {
              id: ruleId
            },
          },
        },
      };
      return data;
    },
    changeServerToFormData: async(res: any) => {
      store.formData = res?.data?.payload?.config?.features?.rule?.id;
      const Api =
        "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.rule.Rule&id=" + res?.data?.payload?.config?.features?.rule?.id;

      const data = await serviceApi.get(Api).then((response: any) => {
        const reportData =
          res?.data?.payload?.config?.features?.Reports?.names.map(
            (elem: any) => {
              if (typeof elem === "string" || typeof elem === "number") {
                return { label: elem, value: elem };
              }
              return elem;
            }
          );
        const newData = {
          id: res.data.payload.id,
          name: res.data.payload.name,
          program: JSON.stringify(res.data.payload.program),
          startDate: res.data.payload.startDate,
          endDate: res.data.payload.endDate,
          downloadWorkflowFile:
            res.data.payload.config.features.workflow.externalFileName,
          uploadWorkflowFileId:
            res.data.payload.config.features.workflow.externalDataId,
          processDefKey1:
            res.data.payload.config.features.workflow.processDefKey,
          downloadInvoiceFile:
            res.data.payload.config.features.invoice.externalFileName,
          uploadInvoiceFileId:
            res.data.payload.config.features.invoice.externalDataId,
          invoiceEnabled: res.data.payload.config.features.invoice.enabled,
          groupId: response?.data?.payload?.groupId,
          project: response?.data?.payload?.artifactId,
          version: response?.data?.payload?.version,
          reportNames: reportData,
          clawbackEnabled: res.data.payload.config.features.Clawback.enabled,
          loadTimeout: res.data.payload.config.features?.timeouts?.loadTimeOut,
          computeTimeout:
            res.data.payload.config.features?.timeouts?.computeTimeOut,
          adjustments: res.data.payload.config.features?.Adjustments,
        };
        return newData;
      });
      return data;
    },
    programLoadName: async function (ruleId: number) {
      let Ui = JSON.parse(JSON.stringify(ProgramMasterCycleUiSchema));
      const action = store.searchParams?.get("id");

      let selectOption: any[] = [];
      const data = await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.program.Program&status=A"
        )
        .then((res) => {
          selectOption = res.data.payload.map((elem: any) => {
            return {
              label: elem.name ? elem.name : elem.id,
              value: JSON.stringify(elem),
            };
          });

          Ui.elements[1].elements[0].elements[1].config.main.options =
            selectOption;
          return serviceApi.get("/rule/getGroups");
        })
        .then((response) => {
          let data: any = null;
          data = response.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });
          Ui.elements[1].elements[4].elements[0].config.main.options = data;
          if (action) {
            return this.setRule(Ui, ruleId);
          }
          return undefined;
        })
        .then((res) => {
          if (action) {
            return { ...res.Ui };
          }
          return { ...Ui };
        })
        .catch((err) => {
          console.log(err);
        });
      return data;
    },

    setRule: async function (Ui: any, ruleId: number) {
      const Api =
        "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.rule.Rule&id=" +
        ruleId;
      let formdata: any = {};
      const data = await serviceApi
        .get(Api)
        .then(async (res: any) => {
          formdata["groupId"] = res.data.payload.groupId;
          formdata["project"] = res.data.payload.artifactId;
          formdata["version"] = res.data.payload.version;
          return serviceApi.post("/rule/getArtifacts", {
            payload: {
              groupId: res.data.payload.groupId,
            },
          });
        })
        .then((res: any) => {
          let data1 = res.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });
          Ui.elements[1].elements[4].elements[1].config.main.options = data1;
          return serviceApi.post("/rule/getVersions", {
            payload: {
              groupId: formdata.groupId,
              artifactId: formdata.project,
            },
          });
        })
        .then((res: any) => {
          let data1 = res.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });
          Ui.elements[1].elements[4].elements[2].config.main.options = data1;
          return { formdata, Ui };
        })
        .catch((error: any) => {
          formdata = { groupId: [{}], version: [{}], project: [{}] };
        });
      return data;
    },
    workspaceFileSaveFunction: () => {
      const programData1 = store.ctx.core.data.program;
      if (programData1 === undefined || programData1 === null) {
        store.setNotify({ FailMessage: "Please select Program", Fail: true });
        return;
      }
      const programData = JSON.parse(store.ctx.core.data?.program);
      const event = dynamicData.changeEvent;
      const tempArr = event.target.files[0].name.split(".");
      const formData = new FormData();
      formData.append(
        "metadata",
        JSON.stringify({
          payload: {
            name: event.target.files[0].name,
            type: tempArr[tempArr - 1],
            program: programData.id,
          },
        })
      );
      let fileValidationResult: any = validateFile(
        event?.target.files[0],
        ["bpmn"],
        { max: 2, min: 0 }
      );
      if (fileValidationResult) {
        store.setNotify({ FailMessage: fileValidationResult, Fail: true });
        return;
      }
      formData.append("file", event?.target.files[0]);

      serviceApi
        .post("/externalData/save", formData)
        .then((response: any) => {
          const data = { ...store.ctx.core.data };
          data[`${dynamicData.path}Id`] = response.data.payload;
          data[`${dynamicData.path}Name`] = event.target.files[0].name;
          store.setFormdata({
            ...data,
            downloadWorkflowFile: event.target.files[0].name,
          });
          store.setNotify({
            SuccessMessage: "File Uploaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          store.setNotify({ FailMessage: "File Uploading Failed", Fail: true });
        });
    },
    Download_Workspace_File: () => {
      serviceApi
        .get(
          `/externalData/getById?withData=true&id=${store.ctx.core.data.uploadWorkflowFileId}`
        )
        .then((response) => {
          downloadFile(response.data.payload);
          store.setNotify({
            SuccessMessage: "File Downloaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          store.setNotify({
            FailMessage: "File Downloading Failed",
            Fail: true,
          });
        });
    },
    Download_Invioce_File: () => {
      serviceApi
        .get(
          `/externalData/getById?withData=true&id=${store.ctx.core.data.uploadInvoiceFileId}`
        )
        .then((response) => {
          downloadFile(response.data.payload);
          store.setNotify({
            SuccessMessage: "File Downloaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          store.setNotify({
            FailMessage: "File Downloading Failed",
            Fail: true,
          });
        });
    },
    invioceFileSaveFunction: () => {
      const programData1 = store.ctx.core.data.program;
      if (programData1 === undefined || programData1 === null) {
        store.setNotify({ FailMessage: "Please select Program", Fail: true });
        return;
      }
      const programData = JSON.parse(store.ctx.core.data?.program);
      const event = dynamicData.changeEvent;
      const tempArr = event.target.files[0].name.split(".");
      const formData = new FormData();
      formData.append(
        "metadata",
        JSON.stringify({
          payload: {
            name: event.target.files[0].name,
            type: tempArr[tempArr - 1],
            program: programData.id,
          },
        })
      );
      let fileValidationResult: any = validateFile(
        event?.target.files[0],
        ["pdf"],
        { max: 2, min: 0 }
      );
      if (fileValidationResult) {
        store.setNotify({ FailMessage: fileValidationResult, Fail: true });
        return;
      }

      formData.append("file", event?.target.files[0]);

      serviceApi
        .post("/externalData/save", formData)
        .then((response: any) => {
          const data = { ...store.ctx.core.data };
          data[`${dynamicData.path}Id`] = response.data.payload;
          data[`${dynamicData.path}Name`] = event.target.files[0].name;
          store.setFormdata({
            ...data,
            [`${dynamicData.path}Id`]: response.data.payload,
            downloadInvoiceFile: event.target.files[0].name,
          });

          store.setNotify({
            SuccessMessage: "File Uploaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          store.setNotify({ FailMessage: "File Uploading Failed", Fail: true });
        });
    },
    verifyStartDate: () => {
      const endDate = new Date(store.formData.endDate);
      const startDate = new Date(store.newData.startDate);
      if (endDate.getTime()) {
        if (startDate.getTime() > endDate.getTime()) {
          store.setNotify({
            FailMessage: "Start Date can't be greater than End Date.",
            Fail: true,
          });
        }
      }
    },
    verifyEndDate: () => {
      const startDate = new Date(store.formData.startDate);
      const endDate = new Date(store.newData.endDate);
      if (store.formData.startDate === undefined) {
        store.setNotify({
          FailMessage: "Please fill start date first.",
          Fail: true,
        });
        store.formData.endDate = undefined;
      }

      if (startDate.getTime() > endDate.getTime()) {
        store.setNotify({
          FailMessage: "Start Date can't be greater than End Date.",
          Fail: true,
        });
      }
    },

    setArtifact: async function (Ui: any, groupId: string) {
      let data: any = null;

      await serviceApi
        .post("/rule/getArtifacts", {
          payload: {
            groupId: groupId,
          },
        })
        .then((response) => {
          data = response.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });

          Ui.elements[1].elements[4].elements[1].config.main.options = data;
          store.setFormdata({
            ...store.newData,
            project: undefined,
            version: undefined,
          });
          Ui.elements[1].elements[4].elements[2].config.main.options = [{}];
          store.setUiSchema({ ...Ui });
        })
        .catch((error: any) => {
          console.log(error);
        });

      return Ui;
    },

    setVersion: async function (Ui: any, groupId: string, project: string) {
      let data: any = null;

      await serviceApi
        .post("/rule/getVersions", {
          payload: {
            groupId: groupId,
            artifactId: project,
          },
        })
        .then((response) => {
          data = response.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });
          Ui.elements[1].elements[4].elements[2].config.main.options = data;
          store.setUiSchema({ ...Ui });
        })
        .catch((error: any) => {
          console.log(error);
        });

      return Ui;
    },

    onChange: function () {
      if (
        store.newData?.groupId &&
        store.newData?.groupId != store.formData?.groupId
      ) {
        this.setArtifact(store.uiSchema, store?.newData?.groupId);
      } else if (
        store.newData?.project &&
        store.newData?.project != store.formData?.project
      ) {
        this.setVersion(
          store.uiSchema,
          store?.newData?.groupId,
          store?.newData?.project
        );
      }
    },

    getRule: async () => {
      let { groupId, project, version } = store.formData;
      return await serviceApi.post("/rule/getRule", {
        payload: {
          groupId: groupId,
          artifactId: project,
          version: version,
        },
      });
    },
  };
};
