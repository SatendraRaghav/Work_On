import { PageMasterSchema } from "../../UiSchema/PageMaster/Schema";
import { PageMasterUiSchema } from "../../UiSchema/PageMaster/UiSchema";
import { myService } from "../../service/service";
import { buildConfigSection, buildDynamicTabs } from "../../utils/dynamicTab";
import _ from "lodash";

export const PageMaster = (store: any, dynamicData: any) => {
  const service = myService(dynamicData?.setLoading, store.navigate);
  return {
    setPage: async function () {
      var formdata = await this.getFormdata();
      var uiSchema = await this.getUiSchema();
      var schema = await this.getSchema();
      store.setUiSchema(uiSchema);
      store.setSchema(schema);
      if (formdata?.template) {
        this.checkTemplate(formdata?.template);
      }
      store.setFormdata(formdata);
    },
    getFormdata: async function () {
      const action = store.searchParams?.get("id");

      let formData: any = {};
      if (action) {
        await service
          .get(`/page/getById?id=${action}`)
          .then((res) => {
            const data = res.data.payload;
            formData.name = data.name;
            formData.template = data.templateMaster.id;
            formData.label = data.config[0].heading.components[0].label;
            let uiSchema = data.templateMaster.uiSchema;
            const tabs: any = buildDynamicTabs(uiSchema.elements);

            for (let tab of tabs) {
              let components = data.config[0][tab]?.components;
              formData[tab] = components;
            }
          })
          .catch((err) => {
            console.log(err);
            return [];
          });
      }

      return formData;
    },
    getUiSchema: async function () {
      let uiSchema = PageMasterUiSchema;
      let data: any = null;
      await service
        .get("/template/getAll")
        .then((res) => {
          data = res.data.payload.map((elem: any) => {
            return { label: elem.name, value: elem.id };
          });
          uiSchema.elements[1].elements[1].config.main.options = data;
        })
        .catch((err) => {
          console.log(err);
          return [];
        });

      return uiSchema;
    },
    getSchema: () => {
      return PageMasterSchema;
    },
    onChange: function () {
      if (
        store?.formData?.template !== store?.newData?.template &&
        store?.newData?.template !== undefined
      ) {
        this.checkTemplate(store?.newData?.template);
      }

      console.log(store);
    },
    backHandler: () => {
      store.navigate("/PageMasterRecords");
    },
    checkTemplate: async (templateId: Number) => {
      let uiSchema = _.cloneDeep(PageMasterUiSchema);
      let templateUiSchema = {};
      let configTabs = {};
      await service
        .get(`template/getById?id=${templateId}`)
        .then((res) => {
          templateUiSchema = res.data.payload.uiSchema;
          configTabs = buildConfigSection(templateUiSchema);
          console.log(configTabs);
          uiSchema.elements[2].elements[0] = configTabs;
          store.setUiSchema(uiSchema);
        })
        .catch((err) => {
          console.log(err);
          return {};
        });
    },
    onAddClickHandler: function () {
      this.savePage()
        .then((res: any) => {
          store.navigate(
            `/Component?path=${dynamicData.path}&id=${res.data.payload.id}`
          );
        })
        .catch((err: any) => {
          console.log(err);
        });
    },
    savePage: async () => {
      const id = store.searchParams?.get("id");
      let uiSchema: any = {};
      await service
        .get(`/template/getById?id=${store?.formData?.template}`)
        .then((res) => {
          uiSchema = res.data.payload.uiSchema;
        })
        .catch((err) => {
          console.log(err);
        });
      let configData = {};
      const tabs = buildDynamicTabs(uiSchema.elements);
      if (id) {
        for (let tab of tabs) {
          let components = {
            components: [],
          };
          components.components = store?.formData[tab]?store?.formData[tab]:[];
          configData[tab] = components;
        }
      } else {
        for (let tab of tabs) {
          let components = {
            components: [],
          };
          configData[tab] = components;
        }
      }

      const body: any = {
        payload: {
          config: [
            {
              ...configData,
              heading: {
                components: [
                  {
                    name: store?.formData?.name,
                    type: "Box",
                    label: store?.formData?.label,
                  },
                ],
              },
            },
          ],
          id: id !== null ? id : 0,
          name: store?.formData?.name,
          templateMaster: store?.formData?.template,
        },
      };

      return await service
        .post("/page/save", body)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    EditRecords: () => {
      const name = dynamicData.rowData.name;
      const pathArray = dynamicData.path.split(".");
      const path = pathArray[0];
      const id = store?.searchParams.get("id");
      store.navigate(`/Component?cName=${name}&path=${path}&id=${id}`);
    },
    DeleteRecord: async function () {
      let uiSchema = PageMasterUiSchema;
      const name = dynamicData.rowData.name;
      const pathArray = dynamicData.path.split(".");
      const path = pathArray[0];
      const id = store?.searchParams.get("id");
      let config = await service
        .get(`/page/getById?id=${id}`)
        .then((res) => {
          return res.data.payload.config[0];
        })
        .catch((err) => {
          console.log(err);
          return {};
        });
      let components =
        config[path] !== undefined ? config[path]?.components : [];
      let idx = -1;
      for (let i = 0; i < components.length; i++) {
        if (components[i].name === name) {
          idx = i;
          break;
        }
      }

      components.splice(idx, 1);
      config = [
        {
          ...config,
          [path]: {
            components: components,
          },
        },
      ];

      const body: any = {
        payload: {
          config: config,
          id: id,
          name: store?.formData?.name,
          templateMaster: store?.formData?.template,
        },
      };

      await service
        .post("/page/save", body)
        .then((res) => {
          store.setFormdata({ ...store.formData, [path]: components });
        })
        .catch((err) => {
          console.log(err);
          return {};
        });
    },
  };
};
