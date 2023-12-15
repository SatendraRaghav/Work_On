import progressBar from "./uischema/progressBar";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildProgressBar = (config:any,componentScope:any) =>{
    const ProgressBar: any = _.cloneDeep(progressBar);
        ProgressBar.scope = componentScope;
        if (config.layout) {
          ProgressBar.config.layout = config.layout;
        }
        ProgressBar.config.main.heading = config.heading;
        if (config.bottomLabel_3) {
          ProgressBar.config.main.bottomLabel_3 = config.bottomLabel_3;
        }
        if(config.layout){
          ProgressBar.config.layout = createLayoutFormat(config.layout)
        }
        if (config.bottomLabel_2) {
          ProgressBar.config.main.bottomLabel_2 = config.bottomLabel_2;
        }
        if (config.bottomLabel_1) {
          ProgressBar.config.main.bottomLabel_1 = config.bottomLabel_1;
        }
        return ProgressBar;

}