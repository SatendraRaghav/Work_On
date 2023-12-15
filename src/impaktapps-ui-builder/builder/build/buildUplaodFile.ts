import { uploadFile } from "./uischema/file";
import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

export const buildUploadFile = (config,componentScope)=>{
    const UploadFile: any = _.cloneDeep(uploadFile);
    
    UploadFile.scope = componentScope;
      UploadFile.config.main.label = config.label;
      if (config.layout) {
        UploadFile.config.layout = config.layout;
      }
      if(config.layout){
        uploadFile.config.layout = createLayoutFormat(config.layout)
      }
      if (config.style) {
        UploadFile.config.style = config.style;
      }
      if (config.required) {
        UploadFile.config.main.required = true;
      }
      UploadFile.config.main.errorMessage = config.errorMessage;
      return UploadFile;
}