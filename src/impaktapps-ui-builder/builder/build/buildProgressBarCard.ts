import progressBar from "./uischema/progressBar";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildProgressBarCard = (config,myScope) => {
    const progressBarCard: any = _.cloneDeep(progressBar);
    progressBarCard.scope = myScope;
    if (config.heading) {
      progressBarCard.config.main.heading = config.heading;
    }
    if (config.bottomLabel_3) {
      progressBarCard.config.main.bottomLabel_3 =
        config.bottomLabel_3;
    }
    if (config.bottomLabel_2) {
      progressBarCard.config.main.bottomLabel_2 =
        config.bottomLabel_2;
    }
    if (config.bottomLabel_1) {
      progressBarCard.elements[0].config.main.bottomLabel_1 =
        config.bottomLabel_1;
    }
    if(config.layout){
      progressBarCard.config.layout = createLayoutFormat(config.layout)
    }
    return progressBarCard;
}