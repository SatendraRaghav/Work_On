import Box from "./uischema/box";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";
const Checkbox =  {
    "type": "Control",
    "scope": "#/properties/username1",
    "layout": 12,
    "options": {
      "widget": "CheckBox"
    },
    "config": {
      "main": {
        "label": "Welcome to Hyperform",
      }
    }
  }
export const buildCheckbox = (config,componentScope) => {
    const check: any = _.cloneDeep(Checkbox);
    check.scope = componentScope;
    check.config.main.label = config.label
    if(config.layout){
        check.config.layout = createLayoutFormat(config.layout)
    }
    if (config.style) {
        check.config.style = JSON.parse(config.style)
    }
    return check;
}