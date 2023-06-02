import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { ProgramMasterCycleSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycle/Schema";
import { ProgramMasterCycleUiSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycle/UiSchema";
import { downloadFile } from "../../utils/downloadFile";
import { myService } from "../../service/service";
import { validateForm } from "../../utils/validateForm";
import { validateFile } from "../../utils/validateFile";
import { ErrorObject } from "ajv";
export const CycleForm = (
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
  const serviceApi = myService(otherData[3], otherData[4], navigate);
  return {
    setPage: async function () {
      setFormdata({});
      const schema = this.getSchema();
      setSchema(schema);
      const formData = await this.getFormData();
      setFormdata(formData);
      const UiSchema = await this.getUiSchema();

      setUiSchema(UiSchema);
    },
    getFormData: async function () {
      const action =  otherData.searchParams?.get("id")
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
      console.log(formdata);
      return formdata;
    },
    getUiSchema: async function () {
      const updatedProgramCycleUiSchema = await this.programLoadName();
      return updatedProgramCycleUiSchema;
    },
    getSchema: () => {
      return ProgramMasterCycleSchema;
    },
    backHandler: function () {
      navigate("/CycleRecords");
    },
    Submit_PM_Cycle: async function () {
      if (!validateForm(schema, ctx.core.errors)) {
        setConfig("ValidateAndShow");
        setNotify({
          FailMessage: "Please fill all required fields",
          Fail: true,
        });
      } else {
        const data = this.changeFormdataToServer();
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
            setFormdata({ ...ctx.core.data });
            navigate("/CycleRecords");
            setNotify({
              SuccessMessage: "Submitted Successfully",
              Success: true,
            });
          })
          .catch(() => {});
      }
    },
    changeFormdataToServer: () => {
      const reportsData = ctx.core.data.reportNames.map((e:any)=>{
             return e.value
      })
      const core = {
        name: ctx.core.data.name,
        startDate: ctx.core.data.startDate,
        endDate: ctx.core.data.endDate,
        id: ctx.core.data.id,
        program: JSON.parse(ctx.core.data.program),
      };
      const data = {
        ...core,
        config: {
          features: {
            workflow: {
              processDefKey: ctx.core.data.processDefKey1,
              externalDataId: ctx.core.data.workflowFileId,
              externalFileName: ctx.core.data.workflowFileName,
            },
            invoice: {
              enabled: ctx.core.data.invoiceEnabled,
              externalDataId: ctx.core.data.invoiceFileId,
              externalFileName: ctx.core.data.invoiceFileName,
            },
            Reports: {
              names: reportsData,
            },
            Clawback: {
              enabled: ctx.core.data.clawbackEnabled,
            },
          },
        },
      };
      return data;
    },
    changeServerToFormData: (res: any) => {
      const reportData =
        res?.data?.payload?.config?.features?.Reports?.names.map(
          (elem: any) => {
            if (typeof elem === "string" || typeof elem === "number") {
              return { label: elem, value: elem };
            }
            return elem.value;
          }
        );
      const newData = {
        id: res.data.payload.id,
        name: res.data.payload.name,
        program: JSON.stringify(res.data.payload.program),
        startDate: res.data.payload.startDate,
        endDate: res.data.payload.endDate,

        workflowFile:
          res.data.payload.config.features.workflow.externalFileName,
        workflowFileName:
          res.data.payload.config.features.workflow.externalFileName,
        workflowFileId:
          res.data.payload.config.features.workflow.externalDataId,
        processDefKey1: res.data.payload.config.features.workflow.processDefKey,

        invoiceFile: res.data.payload.config.features.invoice.externalFileName,
        invoiceFileName:
          res.data.payload.config.features.invoice.externalFileName,
        invoiceFileId: res.data.payload.config.features.invoice.externalDataId,
        invoiceEnabled: res.data.payload.config.features.invoice.enabled,

        reportNames: reportData,

        clawbackEnabled: res.data.payload.config.features.Clawback.enabled,
      };
      return newData;
    },
    programLoadName: async () => {
      const Ui = ProgramMasterCycleUiSchema;
      let selectOption: any[] = [];
      await serviceApi
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
          //@ts-ignore
          Ui.elements[1].elements[0].elements[1].value.content.options =
            selectOption;
        })
        .catch((err) => {
          console.log(err);
        });
      return Ui;
    },
    workspaceFileSaveFunction: () => {
      const programData1 = ctx.core.data.program;
      if (programData1 === undefined || programData1 === null) {
        setNotify({ FailMessage: "Please select Program", Fail: true });
        return;
      }
      const programData = JSON.parse(ctx.core.data?.program);
      const event = otherData[1];
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
        setNotify({ FailMessage: fileValidationResult, Fail: true });
        return;
      }
      formData.append("file", event?.target.files[0]);

      serviceApi
        .post("/externalData/save", formData)
        .then((response: any) => {
          const data = { ...ctx.core.data };
          data[`${otherData[5]}Name`] = event.target.files[0].name;
          data[`${otherData[5]}Id`] = response.data.payload;
          setFormdata({
            ...data,
          });
          setNotify({
            SuccessMessage: "File Uploaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          setNotify({ FailMessage: "File Uploading Failed", Fail: true });
        });
    },
    Download_Workspace_File: () => {
      serviceApi
        .get(
          `/externalData/getById?withData=true&id=${ctx.core.data.workflowFileId}`
        )
        .then((response) => {
          downloadFile(response.data.payload);
          setNotify({
            SuccessMessage: "File Downloaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          setNotify({ FailMessage: "File Downloading Failed", Fail: true });
        });
    },
    Download_Invioce_File: () => {
      serviceApi
        .get(
          `/externalData/getById?withData=true&id=${ctx.core.data.invoiceFileId}`
        )
        .then((response) => {
          downloadFile(response.data.payload);
          setNotify({
            SuccessMessage: "File Downloaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          setNotify({ FailMessage: "File Downloading Failed", Fail: true });
        });
    },
    invioceFileSaveFunction: () => {
      const programData1 = ctx.core.data.program;
      if (programData1 === undefined || programData1 === null) {
        setNotify({ FailMessage: "Please select Program", Fail: true });
        return;
      }
      const programData = JSON.parse(ctx.core.data?.program);
      const event = otherData[1];
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
        setNotify({ FailMessage: fileValidationResult, Fail: true });
        return;
      }

      formData.append("file", event?.target.files[0]);

      serviceApi
        .post("/externalData/save", formData)
        .then((response: any) => {
          const data = { ...ctx.core.data };
          data[`${otherData[5]}Name`] = event.target.files[0].name;
          data[`${otherData[5]}Id`] = response.data.payload;
          setFormdata({
            ...data,
          });

          setNotify({
            SuccessMessage: "File Uploaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          setNotify({ FailMessage: "File Uploading Failed", Fail: true });
        });
    },
    verifyStartDate: (value: any) => {
      const endDate = new Date(ctx.core.data.endDate);
      const startDate = new Date(value);
      if(endDate.getTime()){
      if (startDate.getTime() > endDate.getTime()) {
        setNotify({
          FailMessage: "Start Date can't be greater than End Date.",
          Fail: true,
        });
      }}
    },
    verifyEndDate: (value: any) => {
      const startDate = new Date(ctx.core.data.startDate);
      const endDate = new Date(value);
      if (ctx.core.data.startDate === undefined) {
        setNotify({ FailMessage: "Please fill start date first.", Fail: true });
        ctx.core.data.endDate  = undefined;
      }

      if (startDate.getTime() > endDate.getTime()) {
        setNotify({
          FailMessage: "Start Date can't be greater than End Date.",
          Fail: true,
        });
      }
    },
  };
};
