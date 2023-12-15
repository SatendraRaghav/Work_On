import SelectInputField from "./uischema/selectInputField";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildSelect = (config: any, componentScope: string) => {
  const selectInputField: any = _.cloneDeep(SelectInputField);
  selectInputField.config.main.label = config.label;
  if (config.value) {
    selectInputField.config.main.options = config.value;
  };
  if (config.freeSolo) {
    selectInputField.config.main.freeSolo = config.freeSolo === "YES" ? true : false;;
  }
  if (config.lazyLoading) {
    selectInputField.config.main.lazyLoading = config.lazyLoading === "YES" ? true : false;
  }
  if (config.layout) {
    selectInputField.config.layout = createLayoutFormat(config.layout)
  }
  selectInputField.scope = componentScope;
  return selectInputField;
}