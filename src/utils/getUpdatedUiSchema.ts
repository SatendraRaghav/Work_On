import _ from "lodash";
import { buildUiSchema } from "./buildUiSchema";
export const getUpdatedUiSchema = async function (
  configValues: any,
  uiSchema: any,
  service: any
) {
  // const config = _.cloneDeep(reportConfig);
  const config = _.cloneDeep(configValues);
  const pageUiSchema = _.cloneDeep(uiSchema);
  const myWrappersName: string[] = Object.keys(config);
  const data: any = {};
  const demo = await Promise.all(
    myWrappersName.map(async (elem: string, i: number) => {
      const elements = await buildUiSchema(config[elem].components, service);
      data[elem] = elements;
      return { [elem]: elements };
    })
  );
  const build = pageUiSchema.elements.map((childElem: any, i: number) => {
    if (childElem.name) {
      let tabLabels = [];
      if (pageUiSchema.elements[i].type === "TabLayout") {
        tabLabels = data[childElem.name].map((elem) => {
          return elem?.config?.main?.label;
        });
        pageUiSchema.elements[i].config.main.tabLabels = tabLabels;
      }
      pageUiSchema.elements[i].elements = [
        ...data[childElem.name],
        ...pageUiSchema.elements[i].elements,
      ];
    }
  });
  return pageUiSchema;
};
