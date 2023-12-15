import MultipleSelect from "./uischema/multiSelect";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildMultiSelect = (config, componentScope) => {
  const multipleSelect: any = _.cloneDeep(MultipleSelect);
  multipleSelect.scope = componentScope;
  if (config.label) {

    multipleSelect.config.main.label = config.label;
  }
  if (config.layout) {
    multipleSelect.config.layout = createLayoutFormat(config.layout)
  }
  if (config.value) {
    multipleSelect.config.main.options = config.value;
  }
  if (config.lazyLoading) {
      multipleSelect.config.main.lazyLoading = config.lazyLoading === "YES" ? true : false;
    }
   
  
  return multipleSelect;
}