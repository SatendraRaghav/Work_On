import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { ProgramMasterCycleSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycle/Schema";
import { ProgramMasterCycleUiSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycle/UiSchema";
import { downloadFile } from "../../utils/downloadFile";
import { myService } from "../../service/service";
import { validateForm } from "../../utils/validateForm";
import { validateFile } from "../../utils/validateFile";
import { ErrorObject } from "ajv";
import { dynamicDataType } from "../../utils/dynamicDataType";
export const CycleForm = (
  store:any, dynamicData:dynamicDataType
) => {
  const serviceApi = myService(
    dynamicData?.setLoading,
    store.navigate
  );
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
      const action =   store.searchParams?.get("id")
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
      store.navigate("/CycleRecords");
    },
    Submit_PM_Cycle: async function () {
      if (!validateForm( store.schema,  store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
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
            store.setFormdata({ ... store.ctx.core.data });
            store.navigate("/CycleRecords");
            store.setNotify({
              SuccessMessage: "Submitted Successfully",
              Success: true,
            });
          })
          .catch(() => {});
      }
    },
    changeFormdataToServer: () => {
      const reportsData =  store.ctx.core.data.reportNames.map((e:any)=>{
             return e.value
      })
      const core = {
        name:  store.ctx.core.data.name,
        startDate:  store.ctx.core.data.startDate,
        endDate:  store.ctx.core.data.endDate,
        id:  store.ctx.core.data.id,
        program: JSON.parse( store.ctx.core.data.program),
      };
      const data = {
        ...core,
        config: {
          features: {
            workflow: {
              processDefKey:  store.ctx.core.data.processDefKey1,
              externalDataId:  store.ctx.core.data.workflowFileId,
              externalFileName:  store.ctx.core.data.workflowFileName,
            },
            invoice: {
              enabled:  store.ctx.core.data.invoiceEnabled,
              externalDataId:  store.ctx.core.data.invoiceFileId,
              externalFileName:  store.ctx.core.data.invoiceFileName,
            },
            Reports: {
              names: reportsData,
            },
            Clawback: {
              enabled:  store.ctx.core.data.clawbackEnabled,
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
        workflowFileId:
          res.data.payload.config.features.workflow.externalDataId,
        processDefKey1: res.data.payload.config.features.workflow.processDefKey,
        downloadInvoiceFile:
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
      console.log(Ui)
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
          
          Ui.elements[1].elements[0].elements[1].config.main.options =
            selectOption;
        })
        .catch((err) => {
          console.log(err);
        });
      return Ui;
    },
    workspaceFileSaveFunction: () => {
      const programData1 =  store.ctx.core.data.program;
      if (programData1 === undefined || programData1 === null) {
        store.setNotify({ FailMessage: "Please select Program", Fail: true });
        return;
      }
      const programData = JSON.parse( store.ctx.core.data?.program);
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
          const data = { ... store.ctx.core.data };
          data[`${dynamicData.path}Id`] = response.data.payload;
          store.setFormdata({
            ...data,
            downloadWorkflowFile: event.target.files[0].name
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
          `/externalData/getById?withData=true&id=${ store.ctx.core.data.uploadWorkflowFileId}`
        )
        .then((response) => {
          downloadFile(response.data.payload);
          store.setNotify({
            SuccessMessage: "File Downloaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          store.setNotify({ FailMessage: "File Downloading Failed", Fail: true });
        });
    },
    Download_Invioce_File: () => {
      serviceApi
        .get(
          `/externalData/getById?withData=true&id=${ store.ctx.core.data.uploadInvoiceFileId}`
        )
        .then((response) => {
          downloadFile(response.data.payload);
          store.setNotify({
            SuccessMessage: "File Downloaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          store.setNotify({ FailMessage: "File Downloading Failed", Fail: true });
        });
    },
    invioceFileSaveFunction: () => {
      const programData1 =  store.ctx.core.data.program;
      if (programData1 === undefined || programData1 === null) {
        store.setNotify({ FailMessage: "Please select Program", Fail: true });
        return;
      }
      const programData = JSON.parse( store.ctx.core.data?.program);
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
          const data = { ... store.ctx.core.data };
          data[`${dynamicData[5]}Id`] = response.data.payload;
          store.setFormdata({
            ...data,
            downloadInvoiceFile: event.target.files[0].name
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
      const endDate = new Date( store.formData.endDate);
      const startDate =  new Date(store.newData.startDate);
      if(endDate.getTime()){
      if (startDate.getTime() > endDate.getTime()) {
        store.setNotify({
          FailMessage: "Start Date can't be greater than End Date.",
          Fail: true,
        });
      }}
    },
    verifyEndDate: () => {
      const startDate = new Date( store.formData.startDate);
      const endDate = new Date(store.newData.endDate);
      if ( store.formData.startDate === undefined) {
        store.setNotify({ FailMessage: "Please fill start date first.", Fail: true });
        store.formData.endDate  = undefined;
      }

      if (startDate.getTime() > endDate.getTime()) {
        store.setNotify({
          FailMessage: "Start Date can't be greater than End Date.",
          Fail: true,
        });
      }
    },
    onchange:function (){
    this.verifyEndDate()
    this.verifyStartDate()
    }
  };
};
