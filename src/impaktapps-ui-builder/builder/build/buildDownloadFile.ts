import _ from "lodash";
import { downloadFile } from "./uischema/file"; 
import { createLayoutFormat } from "./buildConfig";

export const buildDownloadFile = (config,componentScope) => {
    const DownloadFile: any = _.cloneDeep(downloadFile);
    DownloadFile.scope = componentScope;
    if (config.layout) {
      DownloadFile.config.layout = config.layout;
    }
    if (config.style) {
      DownloadFile.config.style = config.style;
    }
    if (config.required) {
      DownloadFile.config.main.required = true;
    }
    if(config.layout){
      DownloadFile.config.layout = createLayoutFormat(config.layout)
    }
    if (config.errorMessage) {
      DownloadFile.config.main.errorMessage = config.errorMessage;
    }
    return DownloadFile;
}