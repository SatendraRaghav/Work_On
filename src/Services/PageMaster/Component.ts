import _ from "lodash";
import { ComponentSchema } from "../../UiSchema/Component/Schema";
import { ComponentUiSchema } from "../../UiSchema/Component/UiSchema";
import { APISection, APISectionSchema } from "../../components/APISection";
import {
  CoreSection,
  LayoutArraySchema,
  OptionArraySchema,
} from "../../components/CoreSection";
import {
  TableSection,
  TableSectionSchema,
} from "../../components/TableSection";

import { myService } from "../../service/service";
import { buildConfig } from "../../utils/buildConfig";
import { buildGraphSection } from "@/components/GraphSection";
import { ValueTab } from "@/components/ValueTab";

export const Component = (store: any, dynamicData: any) => {
  const service = myService(dynamicData?.setLoading, store.navigate);
  return {
    setPage: async function () {
      const id = store.searchParams?.get("id");
      const formdata = await this.getFormdata();
      store.setFormdata(formdata);
      var uiSchema = await this.getUiSchema();
      var schema = await this.getSchema();
      if (id) {
        this.createSection(formdata?.type);
      } else {
        store.setUiSchema(uiSchema);
        store.setSchema(schema);
      }
    },
    getFormdata: async function () {
      const action = store.searchParams?.get("cName");
      const id = store.searchParams?.get("id");
      const path = store.searchParams?.get("path");
      let formData = {
        headers: [
          { headers_key: "Content-Type", headers_value: "application/json" },
          { headers_key: "X-Requested-With", headers_value: "XMLHttpRequest" },
        ],
      };
      if (action) {
        formData = await service
          .get(`page/getById?id=${id}`)
          .then((res) => {
            const data = this.createFormData(
              res.data.payload.config[0],
              action,
              path
            );
            return data;
          })
          .catch((err) => {
            console.log(err);
            return {};
          });
      }
      return formData;
    },
    getUiSchema: async function () {
      let uiSchema = _.cloneDeep(ComponentUiSchema);

      return uiSchema;
    },
    getSchema: function () {
      return ComponentSchema;
    },
    backHandler: () => {
      const id = store.searchParams?.get("id");
      if (id) {
        store.navigate(`/PageMaster?id=${id}`);
      } else {
        store.navigate("/PageMaster");
      }
    },
    onChange: function () {
      if (
        store?.formData?.type !== store?.newData?.type &&
        store?.newData?.type !== undefined
      ) {
        this.createSection(store?.newData?.type);
      }
    },
    submitHandler: async () => {
      const config = buildConfig(store.formData);
      const id = store.searchParams.get("id");
      const componentName = store.searchParams.get("cName");

      await service
        .get(`/page/getById?id=${id}`)
        .then((res) => {
          const page = res.data.payload;
          let pageConfig = page.config;
          let path = store.searchParams.get("path");
          if (componentName) {
            let componentIdx = -1;
            const components = pageConfig[0][path].components;
            for (let i = 0; i < components.length; i++) {
              if (components[i].name === componentName) {
                componentIdx = i;
                break;
              }
            }
            pageConfig[0][path].components[componentIdx] = config;
          } else {
            pageConfig[0][path].components?.push(config);
          }

          const body = {
            payload: {
              config: pageConfig,
              id: page.id,
              name: page.name,
              templateMaster: page.templateMaster.id,
            },
          };

          return service.post("page/save", body);
        })
        .then((response) => {
          console.log(response);
          store.navigate(`/PageMaster?id=${response.data.payload.id}`);
        })
        .catch((err) => {
          console.log(err);
          return {};
        });
    },
    createSection: async (type: string) => {
      let uiSchema = _.cloneDeep(ComponentUiSchema);
      let schema: any = _.cloneDeep(ComponentSchema);
      const apiDetails = await service
        .post("/globalConfig/getByKey", {
          payload: {
            key: "common_path",
          },
        })
        .then((res) => {
          return res.data.payload;
        })
        .catch((err) => {
          console.log(err);
          return [];
        });
      let pathList = apiDetails?.map((elem) => {
        return { label: elem.value1, value: elem.value1 };
      });
      APISection.elements[1].config.main.options = pathList;
      if (type === "Select" || type === "MultipleSelect") {
        uiSchema.elements[1].config.main.tabLabels = ["Core", "API", "Value"];
        uiSchema.elements[1].elements = [CoreSection, APISection, ValueTab];
        schema.properties = APISectionSchema;
        schema.properties["value"] = OptionArraySchema.value;
        schema.properties["layout"] = LayoutArraySchema.layout;
      } else if (type === "Table") {
        uiSchema.elements[1].config.main.tabLabels = ["Core", "API", "Table"];
        uiSchema.elements[1].elements = [CoreSection, APISection, TableSection];
        schema.properties = APISectionSchema;
        schema.properties["columns"] = TableSectionSchema.columns;
        schema.properties["tableButtons"] = TableSectionSchema.tableButtons;
        schema.properties["layout"] = LayoutArraySchema.layout;
      } else if (
        type === "SpeedoMeter" ||
        type === "ProgressBar" ||
        type === "card" ||
        type === "Box" ||
        type === "Graph" ||
        type === "ProgressBarCard" ||
        type === "RankCard" ||
        type === "CardSlider" ||
        type === "Timer"||
        type==="Rank"
      ) {
        const GraphSection = buildGraphSection(type);
        uiSchema.elements[1].config.main.tabLabels = ["Core", "API", "Graph"];
        uiSchema.elements[1].elements = [CoreSection, APISection, GraphSection];
        schema.properties = APISectionSchema;
        schema.properties["layout"] = LayoutArraySchema.layout;
      } else {
        uiSchema.elements[1].config.main.tabLabels = ["Core"];
        uiSchema.elements[1].elements = [CoreSection];
        schema.properties["layout"] = LayoutArraySchema.layout;
      }
      store.setUiSchema(uiSchema);
      store.setSchema(schema);
    },
    createFormData: function (config: any, name: string, path: string) {
      const componentsArray = config[path].components.filter((elem: any) => {
        return elem.name === name;
      });
      const component = componentsArray[0];
      let newData: any = {};
      if (component.type === "Date" && component.type === "Text") {
        return component;
      } else {
        newData.name = component.name;
        newData.type = component.type;
        newData.label = component.label;
        newData.path = component.api?.path;
        newData.method = component.api?.method;
        newData.layout = this.createArrayForFormData(
          component?.layout,
          "layout"
        );
        newData.headers = this.createArrayForFormData(
          component.api?.headers,
          "headers"
        );
        newData.body = this.createArrayForFormData(
          component.api?.payload,
          "body"
        );
        if (component.type === "Select") {
          newData.value = component.value !== undefined ? component.value : [];
        } else if (component.type === "Table") {
          newData.columns = component.columns.dataColumns;
          if (component.tableButtons) {
            newData.tableButtons = component.tableButtons.components;
          }
        } else if (
          component.type === "SpeedoMeter" ||
          component.type === "ProgressBar" ||
          component.type === "card" ||
          component.type === "Box" ||
          component.type === "Graph" ||
          component.type === "ProgressBarCard" ||
          component.type === "RankCard" ||
          component.type === "Timer" ||
          component.type === "CardSlider"
        ) {
          newData.heading = component?.heading;
          newData.caption = component?.caption;
          newData.iconName = component?.iconName;
          newData.bottomLabel_1 = component?.bottomLabel_1;
          newData.bottomLabel_2 = component?.bottomLabel_2;
          newData.bottomLabel_3 = component?.bottomLabel_3;
          newData.leftLabel = component?.leftLabel;
          newData.bottomLabel = component?.bottomLabel;
          newData.height = component?.height;
          newData.legendHide = component?.legendHide;
          newData.graphType = component?.graphType;
        } else if (
          component.type === "SpeedoMeter" ||
          component.type === "ProgressBar" ||
          component.type === "card" ||
          component.type === "Box" ||
          component.type === "Graph"
        ) {
          newData.heading = component?.heading;
          newData.caption = component?.caption;
          newData.iconName = component?.iconName;
          newData.bottomLabel_1 = component?.bottomLabel_1;
          newData.bottomLabel_2 = component?.bottomLabel_2;
          newData.bottomLabel_3 = component?.bottomLabel_3;
          newData.leftLabel = component?.leftLabel;
          newData.bottomLabel = component?.bottomLabel;
          newData.height = component?.height;
          newData.legendHide = component?.legendHide;
          newData.graphType = component?.graphType;
        }

        return newData;
      }
    },
    createArrayForFormData: (headers: [], prefix: String) => {
      let data = [];
      const label = `${prefix}_key`;
      const value = `${prefix}_value`;
      for (const key in headers) {
        data.push({ [label]: key, [value]: headers[key] });
      }
      return data;
    },
    // createBodyForFormData: (payload: []) => {
    //   let data = [];
    //   for (const key in payload) {
    //     data.push({ body_key: key, body_value: payload[key] });
    //   }
    //   return data;
    // },
  };
};
