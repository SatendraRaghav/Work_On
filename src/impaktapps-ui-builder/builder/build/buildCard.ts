import Card from "./uischema/card";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildCard = (config,componentScope) =>{
    const card: any = _.cloneDeep(Card);
    if (config.style) {
      card.config.style = JSON.parse(config.style)
    }
    card.elements[0].scope = `#/properties/${config.name}/properties/value`
    card.elements[1].scope = `#/properties/${config.name}/properties/url`
    card.elements[2].scope = `#/properties/${config.name}/properties/description`
    if(config.layout){
      card.config.layout = createLayoutFormat(config.layout)
    }
    if(config.label){
      card.elements[0].config.main.heading = config.label;
    }
    if(config.url){
      card.elements[1].config.main.url = config.url;
    }
    if(config.description){
      card.elements[2].config.main.heading = config.description;
    }
   
  
    
    return card;
}