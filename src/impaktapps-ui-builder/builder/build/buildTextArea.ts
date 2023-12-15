
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";
import { getTextArea } from "./uischema/buildPropertiesSection";
const TextArea =  {
    type: "Control",
    scope: `#/properties/textarea`,

    options: {
      widget: "TextArea",
    },
    config: {
      layout:{xs:12,sm:12,md:5.5,lg:5.5},
      style:{
        containerStyle:{
          borderRadius:"20px",
        },
        headerContainerStyle:{
          
        },
        textAreaStyle:{
          borderRadius:"20px",
          padding:"20px",
          background:"white",
          color:"black"
        }
      },
      main: {
        heading:"TextArea",
        minRows:4,
        hideButton:true
      },
    },
  }
export const buildTextArea = (config:any,componentScope:string) =>{
    const textArea:any = _.cloneDeep(TextArea);
    textArea.config.main.heading = config.label;
  
    if(config.layout){
        textArea.config.layout = createLayoutFormat(config.layout)
      }
      if (config.style) {
        textArea.config.style = JSON.parse(config.style)
      }
      textArea.scope = componentScope;
    return textArea;
}