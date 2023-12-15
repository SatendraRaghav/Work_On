import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../../service/service";
import { SimulationFormSchema } from "../../UiSchema/SimulationForm/Schema";
import { SimulationFormUiSchema } from "../../UiSchema/SimulationForm/UISchema";
import { downloadFile } from "../../utils/downloadFile";

let newui: any;
let arr1: any = [];
let ruleIdentifier: unknown;
export const SimulationForm = (store: any, dynamicData: any) => {
  const service = myService(
    dynamicData?.setLoading,

    store.navigate
  );
  return {
    setPage: async function () {
      ruleIdentifier = false;
      const uiSchema = await this.getUiSchema();
      newui = uiSchema;
      store.setUiSchema(uiSchema);
      const schema = await this.getSchema();
      store.setSchema(schema);
      const formdata = await this.getFormData();
      store.setFormdata(formdata);
    },
    getFormData: async function () {
      const action = store.searchParams?.get("id");
      const data = { ...store.formData };
      if (action) {
        let formData2: any = {};

        const Api = "/simulation/getById?id=" + action;
        let formdata: any = {};

        await service
          .get(Api)
          .then((res: any) => {
            if (res?.data?.payload?.config?.ruleId == undefined) {
              return undefined;
            }
            return service.get(
              `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.rule.Rule&id=${res?.data?.payload?.config?.ruleId}`
            );
          })
          .then((response: any) => {
            if (response != undefined) {
              formData2["groupId"] = response.data.payload.groupId;
              formData2["project"] = response.data.payload.artifactId;
              formData2["version"] = response.data.payload.version;
            }
            return service.get(`/simulation/getById?id=${action}`);
          })
          .then((response: any) => {
            let programId = response.data.payload.program.id;
            arr1 = response.data.payload.config.idList;
            return this.loadTable().then((res: any) => {
              formData2 = {
                ...formData2,
                ...data,
                id: response.data.payload.id,
                name: response.data.payload.name,
                startDate: response.data.payload.startDate,
                endDate: response.data.payload.endDate,
                programType: programId,
                simulationType: response.data.payload?.type,
                LoadRecords: res,
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });

        return formData2;
      } else {
        arr1 = [];
      }
      return {};
    },
    getUiSchema: async function () {
      const action = store.searchParams?.get("id");
      let uiSchema: any = SimulationFormUiSchema;
      let formData2: any = {};
      let data: any = null;
      console.log(uiSchema);
      await service
        .get("/program/getAll")
        .then((response) => {
          data = response.data.payload.map((elem: any) => {
            return { label: elem.name, value: elem.id };
          });

          uiSchema.elements[1].elements[1].config.main.options = data;
          return service.get("/rule/getGroups");
        })
        .then((res: any) => {
          data = res.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });

          uiSchema.elements[3].elements[0].config.main.options = data;

          if (action) {
            uiSchema = this.setRule(uiSchema, action);
          }

          return uiSchema;
        })
        .catch((error) => {
          uiSchema.elements[1].elements[1].config.main.options = [];
        });
      return uiSchema;
    },

    getSchema: () => {
      return SimulationFormSchema;
    },

    setRule: async function (uiSchema: any, action: number) {
      const Api = "/simulation/getById?id=" + action;
      let formdata: any = {};

      uiSchema = await service
        .get(Api)
        .then((res: any) => {
          if (res?.data?.payload?.config?.ruleId == undefined) {
            return undefined;
          }
          return service.get(
            `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.rule.Rule&id=${res?.data?.payload?.config?.ruleId}`
          );
        })
        .then((res: any) => {
          if (res == undefined) {
            return undefined;
          }

          formdata["groupId"] = res.data.payload.groupId;
          formdata["project"] = res.data.payload.artifactId;
          formdata["version"] = res.data.payload.version;

          return service.post("/rule/getArtifacts", {
            payload: {
              groupId: formdata.groupId,
            },
          });
        })
        .then((res: any) => {
          if (res == undefined) {
            return undefined;
          }
          let data = res.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });

          uiSchema.elements[3].elements[1].config.main.options = data;
          return service.post("/rule/getVersions", {
            payload: {
              groupId: formdata.groupId,
              artifactId: formdata.project,
            },
          });
        })
        .then((res: any) => {
          if (res == undefined) {
            return uiSchema;
          }
          let data = res.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });

          uiSchema.elements[3].elements[2].config.main.options = data;
          return uiSchema;
        })
        .catch((err: any) => {
          console.log(err);
          return uiSchema;
        });

      store.setFormdata({ ...formdata });

      return uiSchema;
    },

    findName: () => {
      if (
        store.formData["groupId"] == undefined ||
        store.newData["groupId"] !== store.formData["groupId"]
      ) {
        return "artifactId";
      } else if (
        store.formData["project"] == undefined ||
        store.newData["project"] !== store.formData["project"]
      ) {
        return "version";
      } else {
        return "";
      }
    },

    setArtifact: async (uiSchema: any, groupId: string) => {
      let data: any = null;
      await service
        .post("/rule/getArtifacts", {
          payload: {
            groupId: groupId,
          },
        })
        .then((response) => {
          data = response.data.payload.map((ele: any) => {
            return { label: ele, value: ele };
          });
          uiSchema.elements[3].elements[1].config.main.options = data;
          uiSchema.elements[3].elements[2].config.main["options"] = [];
          store.setFormdata({
            ...store.newData,
            project: undefined,
            version: undefined,
          });
          store.setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        })
        .catch((err) => {
          console.log(err);
        });
    },

    setVersion: async (uiSchema: any, groupId: string, project: string) => {
      let data: any = null;
      await service
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
          uiSchema.elements[3].elements[2].config.main.options = data;
          store.setFormdata({ ...store.newData, version: undefined });
          store.setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        })
        .catch((err) => {
          console.log(err);
        });
    },

    onChange: async function (value: any) {
      const uiSchema = SimulationFormUiSchema;

      if (
        ruleIdentifier &&
        store.newData?.groupId &&
        store.newData?.groupId != store.formData?.groupId
      ) {
        this.setArtifact(uiSchema, store?.newData?.groupId);
      } else if (
        ruleIdentifier &&
        store.newData?.project &&
        store.newData?.project != store.formData?.project
      ) {
        this.setVersion(
          uiSchema,
          store?.newData?.groupId,
          store?.newData?.project
        );
      }

      ruleIdentifier = true;

      if (store?.newData?.programType) {
        await service
          .get(`/program/getById?id=${store?.newData?.programType} `)
          .then((response: any) => {
            const result =
              response.data.payload.config.features.externalData.supportedTypes;
            const result2 =
              response.data.payload.config.features.simulationConfig
                .simulationTypes;
            const data2 = result2.map((elem: any) => {
              return { label: elem, value: elem };
            });
            const data1 = result.map((elem: any) => {
              return { label: elem, value: elem };
            });

            uiSchema.elements[2].elements[0].config.main.options = data1;
            uiSchema.elements[1].elements[2].config.main.options = data2;
            store.setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
          })
          .catch((error) => {
            console.log(error);
            return [];
          });
      }
    },
    uploadFile: async function () {
      const programData = store.ctx.core.data;
      const event = dynamicData.changeEvent;
      const formData = new FormData();
      if (
        programData.programType === undefined ||
        programData.programType === null ||
        programData.fileType === undefined ||
        programData.fileType === null
      ) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Please select Program or Type to Upload the file",
          Fail: true,
        });
      } else {
        formData.append(
          "metadata",
          JSON.stringify({
            payload: {
              name: event.target.files[0].name,
              type: programData.fileType,
              program: programData.programType,
            },
          })
        );
        formData.append("file", event?.target.files[0]);
        let fileUploadResponse: any = null;
        const data = { ...store.ctx.core.data };
        await service
          .post("/externalData/save", formData)
          .then((response: any) => {
            fileUploadResponse = response.data.payload;
            arr1.push(fileUploadResponse);
            store.setFormdata({
              ...data,
              fileIds: arr1,
            });
            return this.loadTable();
          })
          .then((response) => {
            data[`${dynamicData.path}Id`] = fileUploadResponse;
            store.setFormdata({
              ...data,
              downloadAggrementCopy: event.target.files[0].name,
              LoadRecords: response,
            });

            SimulationFormUiSchema.elements[5].elements[0].config.main.allRowsData =
              response;
            store.setUiSchema(SimulationFormUiSchema);
            store.setNotify({
              SuccessMessage: "File uploaded successfully",
              Success: true,
            });
          })
          .catch((error) => {
            store.setNotify({
              FailMessage: "Server Error",
              Fail: true,
            });
            console.log(error);
          });
      }
    },
    loadTable: async function () {
      const body = JSON.stringify({
        payload: {
          idList: arr1,
        },
      });
      const finalResult = await service
        .post("/externalData/getByIds", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          const result = response.data.payload;
          const timestamp = result.createdOn;
          const date = new Date(timestamp);
          const dateString = date.toLocaleString();
          return result.map((elem: any) => {
            return { id: elem.id, name: elem.name, type: elem.type };
          });
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
      return finalResult;
    },
    loadData: async function () {
      let programId: any = store.ctx.core.data.programType;
      let externalDataId: any = store.ctx.core.data?.uploadAggrementCopyId;
      let id: any = store.ctx.core.data.id;
      if (
        programId === undefined ||
        programId === null ||
        externalDataId === undefined ||
        externalDataId === null ||
        id === undefined ||
        id === null
      ) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage:
            "Please select Program or Upload file to Load or save the data",
          Fail: true,
        });
      } else {
        let data2 = JSON.stringify({
          payload: {
            programId: programId,
            externalDataId: externalDataId,
            simulationFlag: "true",
            simulationId: id,
          },
        });

        await service
          .post("/externalData/load", data2, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            store.setNotify({
              SuccessMessage: "Data Loaded Successfully",
              Success: true,
            });
          })
          .catch((error) => {
            store.setNotify({ FailMessage: "Data Load Failed", Fail: true });
          });
      }
    },
    Download_File: () => {
      let body = JSON.stringify({
        withData: true,
        id: store.ctx.core.data.uploadAggrementCopyId,
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
          console.log(error);
        });
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
          downloadFile(response.data.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRecords: (value: any) => {
      try {
        const { id } = dynamicData?.rowData;
        let loadRecords = store.ctx.core.data.LoadRecords;
        console.log(store);
        let externalDataIds = loadRecords.filter((val: any) => {
          return val.id != id;
        });
        let arr = arr1.filter((item: any) => item != id);
        arr1 = arr;
        store.setFormdata({
          ...store.ctx.core.data,
          LoadRecords: externalDataIds,
        });
        store.setUiSchema(SimulationFormUiSchema);
        store.setNotify({
          SuccessMessage: "Deleted Successfully",
          Success: true,
        });
      } catch (error) {
        store.setNotify({ FailMessage: "Failed", Fail: true });
      }
    },
    saveData: async () => {
      let formData: any = null;
      let id: any = null;
      let programId: any = store.ctx.core.data.programType;
      let program: any = null;

      let ruleId: unknown;

      let { groupId, project, version } = store.formData;
      await service
        .post("/rule/getRule", {
          payload: {
            groupId: groupId,
            artifactId: project,
            version: version,
          },
        })
        .then((res: any) => {
          ruleId = res.data.payload?.id;

          return service.get(`/program/getById?id=${programId} `);
        })
        .then(async (response: any) => {
          program = response.data.payload;

          const body = JSON.stringify({
            payload: {
              simulationInfo: {
                id: store.ctx.core.data?.id,
                name: store.ctx.core.data.name,
                program: program,
                type: store.ctx.core.data.simulationType,
                startDate: store.ctx.core.data.startDate,
                endDate: store.ctx.core.data.endDate,
                config: { idList: arr1 ? arr1 : [], ruleId: ruleId },
              },
            },
          });
          const result = await service
            .post("/simulation/save", body, {
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
              },
            })
            .then((response: any) => {
              id = response.data.payload.id;
              const result = id;
              formData = { ...store.ctx.core.data, id: result };
              store.setFormdata(formData);
              store.setNotify({
                SuccessMessage: "Data saved successfully",
                Success: true,
              });
            });
        });
    },
    runSimulation: async () => {
      let programId: any = store.ctx.core.data.programType;
      let program: any = null;

      let { groupId, version, project } = store.ctx.core.data;
      let ruleId: unknown = null;

      await service
        .post("/rule/getRule", {
          payload: {
            groupId,
            artifactId: project,
            version,
          },
        })
        .then((rule: any) => {
          ruleId = rule.data.payload.id;
          return service.get(`/program/getById?id=${programId} `);
        })
        .then(async (response: any) => {
          program = response.data.payload;
          const body = JSON.stringify({
            payload: {
              simulationInfo: {
                id: store.ctx.core.data?.id,
                name: store.ctx.core.data.name,
                startDate: store.ctx.core.data.startDate,
                type: store.ctx.core.data.simulationType,
                program: program,
                endDate: store.ctx.core.data.endDate,
                config: { idList: arr1 ? arr1 : [], ruleId },
              },
            },
          });
          const result = await service
            .post("/simulation/run", body, {
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
              },
            })
            .then((response: any) => {
              store.setNotify({
                SuccessMessage: "Simulation run succesfully",
                Success: true,
              });
              store.navigate("/Simulation");
            });
        });
    },
    reportDownload: async () => {
      const body = JSON.stringify({
        payload: {
          simulationId: store.ctx.core.data.id,
          reportName: "simulationReportBudget",
          params: {
            programId: store.ctx.core.data.programType,
          },
        },
      });
      await service
        .post("/workflow/generateReport", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          response.data.payload;
          const data = JSON.stringify({
            payload: {
              fileName: `sample.csv`,
              grid: response.data.payload.reportData,
            },
          });
          return service.post("report/convertGridToCSVFile", data, {
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          });
        })
        .then((response: any) => {
          downloadFile(response.data.payload);
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
    backHandler: function () {
      store.navigate("/Simulation");
    },
  };
};
