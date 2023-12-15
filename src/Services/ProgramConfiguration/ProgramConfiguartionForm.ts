import { downloadFile } from "../../utils/downloadFile";
import { myService } from "../../service/service";
import { isErrorsExist } from "../../utils/isErrorsExist";
import { validateFile } from "../../utils/validateFile";
import { dynamicDataType } from "../../utils/dynamicDataType";

import { userValue } from "@/App";
import { ProgramConfigMasterSchema } from "@/UiSchema/ProgramConfig/ProgramConfig/Schema";
import { ProgramConfigMasterUiSchema } from "@/UiSchema/ProgramConfig/ProgramConfig/UiSchema";
import _ from "lodash";
export const ProgramConfigForm = (store: any, dynamicData: dynamicDataType) => {
  const serviceApi = myService(dynamicData?.setLoading, store.navigate, store);
  return {
    setPage: async function () {
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const schema = await this.getSchema();
      store.setSchema(schema);
   
      const UiSchema =  this.getUiSchema();
      store.setUiSchema(UiSchema);
    },
    getFormData: async function () {
      const action = store.searchParams?.get("id");
      let formdata = {};
      if (action) {
        const Api =
          "/master/getDetailById?masterName=com.act21.hyperform3.entity.program.programConfiguration.ProgramConfigurationStaging";
        await serviceApi
          .get(`${Api}&id=${action}`)
          .then(async (res) => {
            const newData = await this.changeServerToFormData(res);
            formdata = newData;
          })
          .catch(() => {});
      }
      return formdata;
    },
    getUiSchema: function () {
      return ProgramConfigMasterUiSchema;
    },
    getSchema: async function () {
      const schema = await this.programLoadName(
          store.formData
        );
      return schema;
    },
    backHandler: function () {
      store.navigate("/ProgramConfigurationRecords");
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
            
              entityName:
                "com.act21.hyperform3.entity.program.programConfiguration.ProgramConfigurationStaging",
              entityValue: data,
              userId: userValue.payload.userId,
          
          })
          .then((res) => {
            if (res?.status == 200 || res?.data?.status == "SUCCESS") {
              store.setFormdata({ ...store.ctx.core.data });
              store.navigate("/ProgramConfigurationRecords");
              store.setNotify({
                SuccessMessage: "Submitted Successfully",
                Success: true,
              });
            }
          })
          .catch((error) => {});
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
              id: ruleId,
            },
          },
        },
      };
      return data;
    },
    changeServerToFormData: async (res: any) => {
      store.formData = res?.data?.config?.features?.rule?.id;
      const Api =
        "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.rule.Rule&id=" +
        res?.data?.config?.features?.rule?.id;

      const data = await serviceApi.get(Api).then((response: any) => {
        const reportData = res?.data?.config?.features?.Reports?.names.map(
          (elem: any) => {
            if (typeof elem === "string" || typeof elem === "number") {
              return { label: elem, value: elem };
            }
            return elem;
          }
        );
        const newData = {
          id: res.data.id,
          program: JSON.stringify(res.data.program),
          startDate: res.data.startDate,
          endDate: res.data.endDate,
          downloadWorkflowFile:
            res.data.config.features.workflow.externalFileName,
          uploadWorkflowFileId:
            res.data.config.features.workflow.externalDataId,
          processDefKey1: res.data.config.features.workflow.processDefKey,
          groupId: response?.data?.groupId,
          project: response?.data?.artifactId,
          version: response?.data?.version,
          reportNames: reportData,
          clawbackEnabled: res.data.config.features.Clawback.enabled,
          loadTimeout: res.data.config.features?.timeouts?.loadTimeOut,
          computeTimeout: res.data.config.features?.timeouts?.computeTimeOut,
          adjustments: res.data.config.features?.Adjustments,
        };
        return newData;
      });
      return data;
    },
    programLoadName: async function (ruleId: number) {
      let cloneSchema:any = _.cloneDeep(ProgramConfigMasterSchema);
      const action = store.searchParams?.get("id");
      const data = await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.program.Program&status=A"
        )
        .then((res) => {
         const  selectOption = res.data.map((elem: any) => {
            return {
              title: elem.name ? elem.name : String(elem.id),
              const: JSON.stringify(elem),
            };
          });
          if(!(_.isEmpty(selectOption))){
          cloneSchema.properties.program = {
           ... cloneSchema.properties.program,
           oneOf:selectOption 
          }}
          return serviceApi.get("/rule/getGroups");
        })
        .then((response) => {
          let data: any = null;
          data = response?.data?.payload.map((ele: any) => {
            return { title: ele, const: ele };
          });
          if(!(_.isEmpty(data))){
          cloneSchema.properties.groupId = {
            ... cloneSchema.properties.groupId,
            oneOf:data 
           }}
          if (action) {
            return this.setRule(cloneSchema, ruleId);
          }
          return undefined;
        })
        .then((res) => {
          if (action) {
            return { ...res.cloneSchema };
          }
          return { ...cloneSchema };
        }).catch(()=>{
          return cloneSchema
        })
      return data;
    },

    setRule: async function (cloneSchema: any, ruleId: number) {
      const Api =
        "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.rule.Rule&id=" +
        ruleId;
      let formdata: any = {};
      const data = await serviceApi
        .get(Api)
        .then(async (res: any) => {
          formdata["groupId"] = res.data.groupId;
          formdata["project"] = res.data.artifactId;
          formdata["version"] = res.data.version;
          return serviceApi.post("/rule/getArtifacts", {
            payload: {
              groupId: res.data.groupId,
            },
          });
        })
        .then((res: any) => {
          let data1 = res.data.payload.map((ele: any) => {
            return { title: ele, const: ele };
          });
          if(!(_.isEmpty(data1))){
          cloneSchema.properties.project = {
            ... cloneSchema.properties.project,
            type:'string',
            oneOf:data1 
           }}
          return serviceApi.post("/rule/getVersions", {
            payload: {
              groupId: formdata.groupId,
              artifactId: formdata.project,
            },
          });
        })
        .then((res: any) => {
          let data1 = res.data.payload.map((ele: any) => {
            return { title: ele, const: ele };
          });
          if(!(_.isEmpty(data1))){
          cloneSchema.properties.version = {
            ... cloneSchema.properties.version,
            type:'string',
            oneOf:data1 
           }}
          return { formdata, cloneSchema:cloneSchema };
        }).catch((e)=>{
          return {cloneSchema:cloneSchema}
        })
       
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

    setArtifact: async function (cloneSchema: any, groupId: string) {
      let data: any = null;
      await serviceApi
        .post("/rule/getArtifacts", {
          payload: {
            groupId: groupId,
          },
        })
        .then((response) => {
          data = response.data.payload.map((ele: any) => {
            return { title: ele, const: ele };
          });
          if(!(_.isEmpty(data))){
          cloneSchema.properties.project = {
            ... cloneSchema.properties.project,
            type:'string',
            oneOf:data 
           }}
          store.setFormdata({
            ...store.newData,
            project: undefined,
            version: undefined,
          });
         
          store.setSchema(cloneSchema)
        })
        .catch((error: any) => {
          console.log(error);
        });
      return cloneSchema;
    },

    setVersion: async function (cloneSchema: any, groupId: string, project: string) {
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
            return { title: ele, const: ele };
          });
          if(!(_.isEmpty(data))){
          cloneSchema.properties.version = {
            ... cloneSchema.properties.version,
            type:'string',
            oneOf:data 
           }}
          store.setSchema(cloneSchema)
        })
        .catch((error: any) => {
          console.log(error);
        });
      return cloneSchema;
    },

    onChange: function () {
      if (
        store.newData?.groupId &&
        store.newData?.groupId != store.formData?.groupId
      ) {
        this.setArtifact(store.schema, store?.newData?.groupId);
      } else if (
        store.newData?.project &&
        store.newData?.project != store.formData?.project
      ) {
        this.setVersion(
          store.schema,
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
