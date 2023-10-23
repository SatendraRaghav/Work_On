import { getUiSchema } from "@jsonforms/core";
import { JsonForms, JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";

import { RuleMasterSchema } from "../UiSchema/RuleMaster/Schema";
import { RuleMasterUISchema } from "../UiSchema/RuleMaster/UiSchema";
import { downloadFile } from "../utils/downloadFile";
import { actions } from "../Reducer";

let uploadFlag:unknown;
let flag: unknown;
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
      const uiSchema = await this.getUiSchema();
      store.setUiSchema(uiSchema);
      const schema = await this.getSchema();
      store.setSchema(schema);
      const formdata = await this.getFormData();
      store.setFormdata(formdata);

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
      let uiSchema = JSON.parse(JSON.stringify(RuleMasterUISchema));
      const Api =
        "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.rule.RuleStaging&id=" + action;
      let formdata: any = {};
      await service.get(Api)
        .then(async(res: any) => {
          formdata["project"] = res.data.payload.artifactId;
          formdata["groupId"] = res.data.payload.groupId;
          formdata["version"] = res.data.payload.version;
          externalDataIds = res.data.payload.config.externalDataIds;
           await this.setArtifact(uiSchema,res.data.payload.groupId);
           await this.setVersion(uiSchema,formdata.groupId,formdata.project)
        })
        .catch((error: any) => {
          formdata = {version : [{}], project : [{}], groupId : [{}]}
        })

      let formdata1 = await this.loadTable(externalDataIds);
      formdata["LoadRecords"] = formdata1;
      return formdata
    },

    getUiSchema: async function () {
      let uiSchema: any = RuleMasterUISchema;
      let data: any = null;

      await service.get("/impaktApps/getGroups")
        .then((response) => {
          data = response.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          })
          uiSchema.elements[1].elements[2].config.main.options = data;
          return uiSchema;
        }).catch((error) => {
          console.log("error : " + error);
          return [{}];
        })
      return uiSchema;
    },
    getSchema: () => {
      return RuleMasterSchema;
    },

    findName: () => {
      if ((store.formData["groupId"] == undefined) || (store.newData["groupId"] !== store.formData["groupId"])) {
        return "artifactId";
      }
      else if ((store.formData["project"] == undefined) || (store.newData["project"] !== store.formData["project"])) {
        return "version";
      }
      else {
        return "";
      }
    },

    setArtifact : async(uiSchema : any,groupId : string) => {
      let data :any = null;
      await service.post("/impaktApps/getArtifacts", {
        "payload": {
          "groupId":groupId
        },
      })
        .then((response) => {
          data = response.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });
          uiSchema.elements[1].elements[3].config.main.options = data;
          uiSchema.elements[1].elements[4].config.main['options'] = [{}];
          store.setFormdata({...store.newData,project:undefined,version : undefined})
          store.setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        }).catch((err) => {
          console.log(err);
        })
    },

    setVersion : async(uiSchema : any, groupId : string, project : string) => {
      let data :any = null;
      await service.post("/impaktApps/getVersions", {
        "payload": {
          "groupId":groupId,
          "artifactId": project
        },
      })
        .then((response) => {
          data = response.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });
          uiSchema.elements[1].elements[4].config.main.options = data;
          store.setFormdata({...store.newData,version : undefined})
              store.setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        }).catch((err) => {
          console.log(err);
        })
    },

    onChange: async function (value: any) {
      const action = store.searchParams?.get("id");
      if(uploadFlag){
        uploadFlag = false;
        return;
      }
      if ((action == undefined && (store.newData['groupId'] == undefined && store.formData['groupId'] == undefined && store.newData['project'] == undefined && store.formData['project'] == undefined && store.newData['version'] == undefined && store.formData['version'] == undefined)) || ((store.formData['version'] == undefined && store.newData['version'] != undefined) || (store.newData['version'] != store.formData['version']))) {
        return;
      }
      if(action && flag){
        flag = false;
        return;
      }
      let uiSchema: any = RuleMasterUISchema;
      let name: any = this.findName();
        if(name === "artifactId"){
          this.setArtifact(uiSchema, store?.newData?.groupId);
        }else if(name === "version"){
          this.setVersion(uiSchema,store?.newData?.groupId,store?.newData?.project);
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
        for(id = 0; id < externalDataIds.length; id++){
          let result =  await service
          .get(`/externalData/getById?id=${externalDataIds[id]}&withData=true`);
          files.push(result);
        }
          const result = files.map((elem: any) => {
            let {name ,id } = elem.data.payload;
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
        store.setFormdata({...store.formData,...formdata});
        store.setNotify({ SuccessMessage: "Deleted Successfully", Success: true })
      } catch (error) {
        store.setNotify({ FailMessage: "Failed", Fail: true });
      }
    },
    Download_File_Table: () => {
      service
        .get(`/externalData/getById?withData=true&id=${dynamicData?.rowData?.id}`)
        .then((response) => {
          downloadFile(response.data.payload);
        })
        .catch((error) => {
          store.setNotify({ FailMessage: "Failed", Fail: true })
        });
    },
    saveData: () => {
        const { groupId, project, version } = store.formData;
        const action = store.searchParams?.get("id");
        let externalDataIds = store?.ctx?.core?.data?.LoadRecords.map((val: any) => {
          return val.id;
        });
        service.post("/master/save", {
          "id": null,
          "corelationId": null,
          "payload": {
            "entityName": "com.act21.hyperform3.entity.master.rule.RuleStaging",
            "entityValue": {
              "id": action != undefined ? action : null,
              "groupId": groupId,
              "artifactId": project,
              "version": version,
              "config": {
                "externalDataIds": externalDataIds
              }
            }
          }
        }).then((res: any) => {
          store.setNotify({ SuccessMessage: "Save Successfully", Success: true })
          store.navigate("/RuleMasterRecords")
        }).catch((error: any) => {
          store.setNotify({ FailMessage: "Failed", Fail: true })
        })
    }
  };
};