
import { myService } from "../service/service";

import { RuleMasterSchema } from "../UiSchema/RuleMaster/Schema";
import { RuleMasterUISchema } from "../UiSchema/RuleMaster/UiSchema";
import { downloadFile } from "../utils/downloadFile";
import { actions } from "../Reducer";
import { isErrorsExist } from "@/utils/isErrorsExist";
import { userValue } from "@/App";
import _ from "lodash";


let uploadFlag: unknown;
let flag: unknown;
let runSchema :boolean = true;
export const RuleMasterForm = (
  store: any,
  dynamicData: any
) => {
  const service = myService(
    dynamicData?.setLoading,
    store.navigate
  );
  return {
    setPage: async function () {
      uploadFlag = false;
      flag = true;
      const formdata = await this.getFormData();
      store.setFormdata(formdata);
      const uiSchema = this.getUiSchema();
      store.setUiSchema(uiSchema);
      const schema = await this.getSchema();
      
        store.setSchema(schema);
      
      
    },
    getFormData: async function () {
      let formdata: any = {};
      const action = store.searchParams?.get("id");
      if (action != undefined) {
        formdata = await this.setEditPage(action);
      } else {
        formdata["LoadRecords"] = [];
      }
      return formdata;
    },

    setEditPage: async function (action: number) {
      let externalDataIds: number[] = [];
      let cloneSchema = JSON.parse(JSON.stringify(RuleMasterSchema));
      const Api =
        "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.rule.RuleStaging&id=" + action;
      let formdata: any = {};
      await service.get(Api)
        .then(async (res: any) => {
          formdata["artifactId"] = res.data.artifactId;
          formdata["groupId"] = res.data.groupId;
          formdata["version"] = res.data.version;
          formdata["ruleId"] = res.data.ruleId;
          externalDataIds = res.data.config.externalDataIds;

          await this.setArtifact(cloneSchema, res.data.groupId);
          await this.setVersion(cloneSchema, formdata.groupId, formdata.artifactId)
        
        })


      let formdata1 = await this.loadTable(externalDataIds);
      formdata["LoadRecords"] = formdata1;
      return formdata
    },

    getUiSchema: function () {
     
      return RuleMasterUISchema
  
    },
    getSchema: async () => {
      let schema: any = RuleMasterSchema; 
      // RuleMasterSchema;
      const disabled = localStorage.getItem("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      await service.get("/impaktApps/getGroups")
        .then((response) => {
          const data = response.data.payload.map((ele: any) => {
            return { const: ele, title: ele };
          })
          schema.properties.groupId.oneOf = data
        })
      return schema;
    },

    findName: () => {
      if ((store.formData["groupId"] == undefined) || (store.newData["groupId"] !== store.formData["groupId"])) {
        return "artifactId";
      }
      else if ((store.formData["artifactId"] == undefined) || (store.newData["artifactId"] !== store.formData["artifactId"])) {
        return "version";
      }
      else {
        return "";
      }
    },

    setArtifact: async (cloneSchema: any, groupId: string) => {
      let data: any = null;
      await service.post("/impaktApps/getArtifacts", {
        "payload": {
          "groupId": groupId
        },
      })
        .then((response) => {
          data = response.data.payload.map((ele: any) => {
            return { title: ele, const: ele };
          });
          if(!(_.isEmpty(data))){
          cloneSchema.properties.artifactId = {
            ...cloneSchema.properties.artifactId,
            oneOf: data
          }}
          store.setFormdata({ ...store.newData, artifactId: undefined, version: undefined })
          store.setSchema(cloneSchema)
        })
    },

    setVersion: async (cloneSchema: any, groupId: string, artifactId: string) => {
      let data: any = null;
      await service.post("/impaktApps/getVersions", {
        "payload": {
          "groupId": groupId,
          "artifactId": artifactId
        },
      })
        .then((response) => {
          data = response.data.payload.map((ele: any) => {
            return { title: ele, const: ele };
          });
          if(!(_.isEmpty(data))){
          cloneSchema.properties.version = {
            ...cloneSchema.properties.version,
            oneOf: data
          }}
          store.setFormdata({ ...store.newData, version: undefined })
          store.setSchema(cloneSchema)
        })
    },

    onChange: async function (value: any) {

      if (store.newData?.ruleId != store.formData?.ruleId) {
        return;
      }

      const action = store.searchParams?.get("id");
      if (uploadFlag) {
        uploadFlag = false;
        return;
      }
      if ((action == undefined && (store.newData['groupId'] == undefined && store.formData['groupId'] == undefined && store.newData['artifactId'] == undefined && store.formData['artifactId'] == undefined && store.newData['version'] == undefined && store.formData['version'] == undefined)) || ((store.formData['version'] == undefined && store.newData['version'] != undefined) || (store.newData['version'] != store.formData['version']))) {
        return;
      }
      if (action && flag) {
        flag = false;
        return;
      }
      let cloneSchema: any = _.cloneDeep(store.schema);
      let name: any = this.findName();
      if (name === "artifactId") {
        this.setArtifact(cloneSchema, store?.newData?.groupId);
      } else if (name === "version") {
        let data: any = null;
        await service.post("/impaktApps/getArtifacts", {
          "payload": {
            "groupId": store.newData?.groupId
          },
        })
          .then((response) => {
            data = response.data.payload.map((ele: any) => {
              return { title: ele, const: ele };
            });
            if(!(_.isEmpty(data))){
            cloneSchema.properties.artifactId = {
              ...cloneSchema.properties.artifactId,
              oneOf: data
            }}
            store.setSchema(cloneSchema)
          })
        this.setVersion(cloneSchema, store?.newData?.groupId, store?.newData?.artifactId);
      }
    },
    uploadFile: async function () {
      const event = dynamicData?.changeEvent;
      const formData = new FormData();

      formData.append(
        "metadata",
        JSON.stringify({
          payload: {
            name: event.target.files[0].name,
            type: "policy"
          },
        })
      );

      let externalDataIds = store?.ctx?.core?.data?.LoadRecords.map((val: any) => {
        return val.id;
      });

      if (externalDataIds === undefined || externalDataIds === null) {
        externalDataIds = [];
      }

      formData.append("file", event?.target.files[0]);
      let fileUploadResponse: any = null;
      await service
        .post("/externalData/save", formData)
        .then((response: any) => {
          fileUploadResponse = response.data.payload;
          externalDataIds.push(fileUploadResponse);
          uploadFlag = true
          return this.loadTable(externalDataIds);
        })
        .then((response) => {
          const data = { ...store.ctx.core.data }
          data[`${dynamicData.path}Name`] = event.target.files[0].name
          data[`${dynamicData.path}Id`] = fileUploadResponse
          store.setFormdata({
            ...data,
            "LoadRecords": response,
          });
          store.setNotify({ SuccessMessage: "File uploaded successfully", Success: true, })
        })
        .catch((error) => {
          store.setNotify({
            FailMessage: "Server Error",
            Fail: true,
          });
        });
    },

    backHandler: () => {
      store.navigate("/RuleMasterRecords")
    },

    loadTable: async (externalDataIds: number[]) => {
      if (externalDataIds.length === 0) {
        return [];
      }
      let id = 0;
      let files: any = [];
      for (id = 0; id < externalDataIds.length; id++) {

        let body = JSON.stringify({
          withData: true,
          id: externalDataIds[id],
        });
        let result = await service
          .post("/externalData/getById", body, {
            headers: {
              "Content-Type": "application/json",
            },
          }).then((response) => {
            return response;
          })
        files.push(result);
      }
      const result = files.map((elem: any) => {
        let { name, id } = elem.data;
        return { id: id, name: name };
      });
      return result;
    },

    Delete_File_Table: (value: any) => {
      try {
        const { id } = dynamicData?.rowData;
        console.log(store);
        let externalDataIds = store?.ctx?.core?.data?.LoadRecords.filter((val: any) => {
          return val.id != id
        });
        const formdata: any = {};
        formdata['LoadRecords'] = externalDataIds;
        store.setFormdata({ ...store.formData, ...formdata });
        store.setNotify({ SuccessMessage: "Deleted Successfully", Success: true })
      } catch (error) {
        store.setNotify({ FailMessage: "Failed", Fail: true });
      }
    },
    Download_File_Table: () => {
      let body = JSON.stringify({
        withData: true,
        id: dynamicData?.rowData.id,
      });
      service
        .post("/externalData/getById", body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          downloadFile(response.data);
        })
        .catch((error) => {
          store.setNotify({ FailMessage: "Failed", Fail: true })
        });
    },
    saveData: () => {
      if (
        !isErrorsExist(RuleMasterSchema, store.ctx.core.errors)
      ) {
        store.setValidation("ValidateAndShow")
        store.setNotify({ FailMessage: "Errors on page", Fail: true, })
      } else {
        const { groupId, artifactId, version, ruleId } = store.formData;
        const action = store.searchParams?.get("id");
        let externalDataIds = store?.ctx?.core?.data?.LoadRecords.map((val: any) => {
          return val.id;
        });
        service.post("/master/save", {

          "entityName": "com.act21.hyperform3.entity.master.rule.RuleStaging",
          "entityValue": {
            "id": action != undefined ? action : null,
            "groupId": groupId,
            "artifactId": artifactId,
            "version": version,
            "ruleId": ruleId,
            "config": {
              "externalDataIds": externalDataIds
            }
          },
          userId: userValue.payload.userId

        }).then((res: any) => {
          store.setNotify({ SuccessMessage: "Save Successfully", Success: true })
          store.navigate("/RuleMasterRecords")
        }).catch((error: any) => {
          store.setNotify({ FailMessage: "Failed", Fail: true })
        })
      }
    }
  };
};
