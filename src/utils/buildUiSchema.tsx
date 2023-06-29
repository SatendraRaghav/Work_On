import _ from "lodash";
import { Button, EmptyBox } from "../components/Button";
import { DateInputField } from "../components/DateInputField";
import { SelectInputField } from "../components/SelectInputField";
import { Table } from "../components/Table";
import { InputField } from "../components/TextInputField";
import { myService } from "../service/service";
const service = myService();
export const buildUiSchema =  (config: any) => {
    let elements: any = [];
    for (let i = 0; i < config.length; i++) {
      const myScope = `#/properties/${config[i]?.name
        .toLowerCase()
        .replace(/ /g, "")}`;
      switch (config[i]?.type) {
        case "InputField":
          const inputField:any = _.cloneDeep(InputField);
          inputField.config.main.label = config[i]?.name;
          inputField.config.main.errorMessage = `${config[i]?.name} is empty or invalid`;
          inputField.scope = myScope;
          elements.push(inputField);
          break;
        case "DateInputField":
          const dateInputField:any = _.cloneDeep(DateInputField);
          dateInputField.config.main.label = config[i]?.name;
          dateInputField.config.main.errorMessage = `${config[i]?.name} is empty or invalid`;
          dateInputField.scope = myScope;
          elements.push(dateInputField);
          break;
        case "SelectInputField":
            
          const selectInputField =  _.cloneDeep(SelectInputField);
          selectInputField.config.main.label = config[i]?.name;
          selectInputField.scope = myScope;
          if (config[i]?.hasOwnProperty("constant")) {
            selectInputField.config.main.options = config[i]?.constant;
          }
          elements.push(selectInputField);
          break;
        case "Button":
          const button = _.cloneDeep(Button);
          button.config.main.name = config[i]?.name;
          elements.push(button);
          break;
        case "Table":
          const table:any = _.cloneDeep(Table);
          table.config.main.columns = config[i]?.columns;
          elements.push(table);
          break;
      }
    }

    return elements;
  };

  export const buildSchema = (config: any,pageName:string) => {
   
      const required= [];
    const property:any =  {
    };
    for (let i = 0; i < config.length; i++) {
      const demoName =  pageName+config[i]?.name.toLowerCase().replace(/ /g, "");
      switch (config[i]?.type) {
      
        case "text":
          if(config[i]?.required){
            property[demoName] = {
              type:"string",
              minLength:1,
            }
            required.push(demoName)
          }
          break;
        
        case "date":
          if(config[i]?.required){
          
            property[demoName] = {
              errorMessage : `${config[i]?.name} is empty or invalid`
            }
            required.push(demoName)
          }
          break;
        case "select":
          if(config[i]?.required){
            property[demoName] = {
              type:"string",
            }
            required.push(demoName)
          }
          break;
    }

  }
  return  {property:property,required:required};
}