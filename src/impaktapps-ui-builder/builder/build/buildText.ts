import _ from "lodash";
import TextInputField from "./uischema/textInputField";
import { createLayoutFormat } from "./buildConfig";

export const buildTextField = (config:any,componentScope:string) =>{
    const inputField: any = _.cloneDeep(TextInputField);
    inputField.config.main.label = config.label;
    if (config.style) {
      inputField.config.style = JSON.parse(config.style)
    }
    if(config.layout){
      inputField.config.layout = createLayoutFormat(config.layout)
    }
    inputField.config.main.errorMessage = `${config.name} is empty or invalid`;
    inputField.scope = componentScope;
    return inputField;
}