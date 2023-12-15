import RollAndDice from "./uischema/rollAndDice";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildRollAndDice = (config,componentScope) =>{
    const rank: any = _.cloneDeep(RollAndDice);
    if (config.name) {
      rank.scope = componentScope;
    }
    if(config.layout){
      rank.config.layout = createLayoutFormat(config.layout)
    }
    return rank;
}