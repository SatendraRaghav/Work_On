import Button from "./uischema/button";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildButton = (config:any,componentScope:string) =>{
    const button = _.cloneDeep(Button);
    if (config.buttonType) {
      button.options.widget = config.buttonType === "IconButton" ? "IconButton" : "Button";
      config.buttonType === "ButtonWithIconAndText" ?
        button.config.main.startIcon = config.iconName
        : button.config.main.icon = config.iconName

    }
    if(config.layout){
      button.config.layout = createLayoutFormat(config.layout)
    }
    if(config.defaultStyle){
      button.config.main.styleDefault = config.defaultStyle==="true"?true:false;
    }
    button.scope = componentScope;
    if (config.style) {
      button.config.style = JSON.parse(config.style)
    }
    if (config.size) {
      button.config.main.size = config.size
    }
    if (config.color) {
      button.config.main.color = config.color
    }
    if(config.label){
    button.config.main.name = config.label;
    }
    return button;
}