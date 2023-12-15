import RankCard from "./uischema/rankCard";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildRankCard = (config,componentScope) =>{
    const rankCard: any = _.cloneDeep(RankCard);
    rankCard.scope = componentScope;

    if(config.image){
      rankCard.config.main.url = config.image;
    }
    if(config.title){
      rankCard.config.main.title = config.title
    }
    if(config.description){
      rankCard.config.main.description = config.description
    }
    if(config.rank){
      rankCard.config.main.rank = `#${config.rank}`
    }
    if(config.layout){
      rankCard.config.layout = createLayoutFormat(config.layout)
    }
    return rankCard;
}