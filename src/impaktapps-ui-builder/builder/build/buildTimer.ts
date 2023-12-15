import { createLayoutFormat } from "./buildConfig";
import Timer from "./uischema/timer";
import _ from "lodash";

export const buildTimer = (config,componentScope)=>{
    const timer: any = _.cloneDeep(Timer);
      timer.scope = componentScope;
      if (config.label) {
        timer.config.main.label = config.label;
      }
      if (config.layout) {
        timer.config.layout = createLayoutFormat(config.layout);
      }
      return timer;
}