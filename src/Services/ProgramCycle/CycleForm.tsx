import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { ProgramMasterCycleSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycle/Schema";
import { ProgramMasterCycleUiSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycle/UiSchema";
import { downloadFile } from "../../utils/downloadFile";
import { myService } from "../../service/service";
export const CycleForm = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?:any,
  otherData?: any
) => {
   const serviceApi = myService()
  return {
   
    setPage: async function () {
      setFormdata({})
      const schema = this.getSchema();
      setSchema(schema);
      const formData = await this.getFormData();
      setFormdata(formData);
      const UiSchema = await this.getUiSchema();
      setUiSchema(UiSchema);
    
    },
    getFormData: async function(){
       const action =  otherData[0].get("id")
       let formdata = {}
        if (action) {
            const Api =
              "/master/getDetailById?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging";
            await serviceApi
              .post(Api, { id: parseInt(action)})
              .then((res) => {
                const newData = this.changeServerToFormData(res);
                    formdata = newData;
            
              })
              .catch(() => {});
          }
      
    return formdata;
    },
    getUiSchema: async function(){
        const updatedProgramCycleUiSchema = await this.programLoadName();
         return  updatedProgramCycleUiSchema
    },
    getSchema: () => {
      return ProgramMasterCycleSchema;
    },
    backHandler: function(){
      navigate("/CycleRecords")
    },
    Submit_PM_Cycle: async function () {
      const data = this.changeFormdataToServer();
      await serviceApi
        .post(
          "/master/save",
          {id:1,payload:
            {entityName:"com.act21.hyperform3.entity.program.ProgramCycleStaging",
            entityValue:data,
           }},

        )
        .then((res) => {
          setFormdata({ ...ctx.core.data, notifySuccess: "Success" });
          navigate("/CycleRecords")
        })
        .catch(() => {});
    },
    changeFormdataToServer: () => {
      const core = {
        ...ctx.core.data.features[0].Core,
        program: JSON.parse(ctx.core.data.features[0].Core.program),
      };
      const data = {
        ...core,
        config: {
          features: {
            workflow: {
              ...ctx.core.data.features[1].workflow,
              ...ctx.core.data.workflowData,
            },
            invoice: {
              ...ctx.core.data.features[2].invoice,
              ...ctx.core.data.invoiceData,
            },
            Reports: ctx.core.data.features[3].Reports,
            Clawback: ctx.core.data.features[4].Clawback
          },
        },
      };
      return data;
    },
    changeServerToFormData: (res: any) => {
      const reportData = res?.data?.config?.features?.Reports?.names.map(
        (elem: any) => {
          return { label: elem, value: elem };
        }
      );
      const newData = {
        features: [
          {
            Core: {
              program: JSON.stringify(res.data.program),
              startDate: res.data.startDate,
              endDate: res.data.endDate,
            },
          },
          { workflow: res.data.config.features.workflow },
          { invoice: res.data.config.features.invoice },
          { Reports: { names: reportData } },

          { Clawback: res.data.config.features.Clawback },
        ],
      };
      return newData;
    },
    programLoadName: async () => {
      const Ui = ProgramMasterCycleUiSchema;
      let selectOption: any[] = [];
      await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.program.Program&status=A",
        )
        .then((res) => {
          selectOption = res.data.payload.map((elem: any) => {
            return { label: elem.name?elem.name:elem.id, value: JSON.stringify(elem) };
          });
//@ts-ignore
          Ui.elements[2].options.detail.elements[0].options.detail.elements[1].value.content.options = selectOption;
        }).catch((err)=>{
          console.log(err)
        });
      return Ui;
    },
    workspaceFileSaveFunction: () => {
      const programData=  JSON.parse((ctx.core.data.features[0].Core.program))
      const event = otherData[1];
      const tempArr = event.target.files[0].name.split(".");
      const formData = new FormData();
      formData.append(
        "metadata",
        JSON.stringify({
          payload: {
            name: event.target.files[0].name,
            type: tempArr[tempArr - 1],
            program:programData.id
          },
        })
      );
      formData.append("file", event?.target.files[0]);

      serviceApi
        .post("/externalData/save", formData)
        .then((response: any) => {
          setFormdata({
            ...ctx.core.data,
            notifySuccess: "File Upload Successfully",
            workflowData: {
              externalDataId: response.data.payload,
              externalFileName: event.target.files[0].name,
            },
          });
        })
        .catch((error) => {
          setFormdata({
            ...ctx.core.data,
            notifyFail: "File Uploading failed",
          });
        });
    },
    Download_Workspace_File: () => {
      serviceApi
        .get(
          `/externalData/getById?withData=true&id=${
            ctx.core.data.workflowData
              ? ctx.core.data.workflowData.externalDataId
              : ctx.core.data.features[1].workflow.externalDataId
          }`
        )
        .then((response) => {
          downloadFile(response.data.payload);
          setFormdata({
            ...ctx.core.data,
            notifysuccess: "File Downloaded successfully",
          });
        })
        .catch((error) => {
          setFormdata({
            ...ctx.core.data,
            notifyFail: "File Downloading Failed",
          });
        });
    },
    Download_Invioce_File: () => {
      serviceApi
        .get(
          `/externalData/getById?withData=true&id=${
            ctx.core.data.invoiceData
              ? ctx.core.data.invoiceData.externalDataId
              : ctx.core.data.features[2].Invoicing.externalDataId
          }`
        )
        .then((response) => {
          downloadFile(response.data.payload);
          setFormdata({
            ...ctx.core.data,
            notifysuccess: "File Downloaded successfully",
          });
        })
        .catch((error) => {
          setFormdata({
            ...ctx.core.data,
            notifyFail: "File Downloading Faailed",
          });
        });
    },
    invioceFileSaveFunction: () => {
      const programData=  JSON.parse((ctx.core.data.features[0].Core.program))
      const event = otherData[1];
      const tempArr = event.target.files[0].name.split(".");
      const formData = new FormData();
      formData.append(
        "metadata",
        JSON.stringify({
          payload: {
            name: event.target.files[0].name,
            type: tempArr[tempArr - 1],
            program:programData.id
          },
        })
      );
      formData.append("file", event?.target.files[0]);

      serviceApi
        .post("/externalData/save", formData)
        .then((response: any) => {
          setFormdata({
            ...ctx.core.data,
            notifySuccess: "File Upload Successfully",
            invoiceData: {
              externalDataId: response.data.payload,
              externalFileName: event.target.files[0].name,
            },
          });
        })
        .catch((error) => {
          setFormdata({
            ...ctx.core.data,
            notifyFail: "File Uploading failed",
          });
        });
    },
  };
};
