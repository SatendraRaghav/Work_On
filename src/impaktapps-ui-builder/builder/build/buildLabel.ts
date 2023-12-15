import Box from "./uischema/box";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildLabel = (config,componentScope) => {
    const box: any = _.cloneDeep(Box);
    box.scope = componentScope;
    box.config.main.heading = config.label
    if(config.layout){
      box.config.layout = createLayoutFormat(config.layout)
    }
    if (config.style) {
      box.config.style = JSON.parse(config.style)
    }
    return box;
}