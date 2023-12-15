import DateInputField from "./uischema/dateInputField";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildDate = (config:any,componentScope:string)=>{
    const dateInputField: any = _.cloneDeep(DateInputField);
    dateInputField.config.main.label = config.label;
    dateInputField.config.main.errorMessage = `${config.name} is empty or invalid`;
    dateInputField.scope = componentScope;
    if(config.layout){
        dateInputField.config.layout = createLayoutFormat(config.layout)
      }
    return dateInputField;
}