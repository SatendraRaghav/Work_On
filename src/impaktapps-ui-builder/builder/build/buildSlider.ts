import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";
import cardSlider from "./uischema/cardSlider";

export const buildSlider = (config,componentScope) =>{
    const slider: any = _.cloneDeep(cardSlider);
    if (config.name) {
      slider.scope = componentScope;
    }
    if(config.layout){
      slider.config.layout = createLayoutFormat(config.layout)
    }
    return slider;
}