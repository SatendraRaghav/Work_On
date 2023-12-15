import { userValue } from "@/App";
import { ApplicationConfigSchema } from "@/UiSchema/ApplicationConfig/Schema";
import { ApplicationConfigUiSchema } from "@/UiSchema/ApplicationConfig/UiSchema";
import { myService } from "@/service/service";
import { downloadFile } from "@/utils/downloadFile";
import { handleErrors } from "@/utils/handleErrors";
import { isErrorsExist } from "@/utils/isErrorsExist";
import _ from "lodash";

export const ApplicationConfigForm: any = (store: any, dynamicData: any) => {
  const service = myService(dynamicData?.setLoading, store.navigate);

  return {
    setPage: async function () {
      const formData = await this.getFormData();
      const uiSchema = await this.getUiSchema();
      const schema = await this.getSchema();

      store.setUiSchema(uiSchema);
      store.setFormdata(formData);
      store.setSchema(schema);
    },
    getFormData: async function () {
      const action = store.searchParams?.get("id");
      let formdata = {};
      if (action) {
        const Api =
          "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.application.ApplicationConfigStaging";
        await service
          .get(`${Api}&id=${action}`)
          .then(async (res) => {
            const newData = await this.changeServerToFormData(res);
            formdata = newData;
          })
          .catch(() => {});
      }
      return formdata;
    },
    getUiSchema:  function () {
      return ApplicationConfigUiSchema;
    },

    notificationsLoad: async function () {
      let cloneSchema:any = _.cloneDeep(ApplicationConfigSchema);
      const data = await service
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.master.notification.NotificationStaging&status=A"
        )
        .then((res) => {
          const selectOption = res.data.map((elem: any) => {
            return {
              title: elem.name ? elem.name : elem.name,
              const: elem.name,
            };
          });
          if(!(_.isEmpty(selectOption))){
           cloneSchema.properties.emailNotificationName = {
            ...cloneSchema.properties.emailNotificationName,
            oneOf:selectOption
           }}
        })
      return cloneSchema;
    },

    getSchema: function() {
      let schema = this.notificationsLoad();
      const disabled = store.searchParams?.get("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      return schema;
    },
    changeServerToFormData: async (res: any) => {
      const newData = {
        id: res.data.id,
        name: res.data.name,
        downloadWorkflowFile: res.data.config.master.workflow.externalFileName,
        uploadWorkflowFileId: res.data.config.master.workflow.externalDataId,
        processDefKey1: res.data.config.master.workflow.processDefKey,
        emailNotificationName:
          res.data.config.master?.commonConfig?.emailNotificationName,
        maxRetry: res.data.config.master?.commonConfig?.maxRetry,
        retryTimeout: res.data.config.master?.commonConfig?.retryTimeout,
        userDormantPeriod:
          res.data.config.master?.commonConfig?.userDormantPeriod,
        frontEndUrl: res.data.config.master?.commonConfig?.frontEndUrl,
      };
      return newData;
    },
    workspaceFileSaveFunction: () => {
      const programData1 = store.ctx.core.data.program;
      const event = dynamicData.changeEvent;
      const tempArr = event.target.files[0].name.split(".");
      const formData = new FormData();
      formData.append(
        "metadata",
        JSON.stringify({
          payload: {
            name: event.target.files[0].name,
            type: tempArr[tempArr - 1],
          },
        })
      );

      formData.append("file", event?.target.files[0]);

      service
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
      let body = JSON.stringify({
        withData: true,
        id: store.ctx.core.data.uploadWorkflowFileId,
      });
      service
        .post("/externalData/getById", body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          downloadFile(response.data);
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
    Submit: async function () {
      let data: any;
      data = this.changeFormdataToServer();
      await service
        .post("/master/save", {
          id: 1,
          payload: {
            entityName:
              "com.act21.hyperform3.entity.master.application.ApplicationConfigStaging",
            entityValue: data,
            userId: userValue.payload.userId,
          },
        })
        .then((res) => {
          if (res?.status == 200) {
            store.setFormdata({ ...store.ctx.core.data });
            store.navigate("/ApplicationMasterRecords");
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
    },
    changeFormdataToServer: () => {
      const action = store.searchParams?.get("id");

      const data = {
        id: action !== null ? action : null,
        name: store.formData.name,
        config: {
          master: {
            workflow: {
              processDefKey: store.ctx.core?.data?.processDefKey1,
              externalDataId: store.ctx.core?.data?.uploadWorkflowFileId,
              externalFileName: store.ctx.core?.data?.downloadWorkflowFile,
            },
            commonConfig: {
              emailNotificationName: store.formData.emailNotificationName,
              maxRetry: store.formData.maxRetry,
              retryTimeout: store.formData.retryTimeout,
              userDormantPeriod: store.formData.userDormantPeriod,
              frontEndUrl: store.formData.frontEndUrl,
            },
          },
        },
      };
      return data;
    },
    backHandler: function () {
      store.navigate("/ApplicationMasterRecords");
    },
  };
};
