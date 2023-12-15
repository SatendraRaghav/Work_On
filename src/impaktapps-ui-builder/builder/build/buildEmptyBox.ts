import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";
import emptyBox from "./uischema/emptyBox";

export const buildEmptyBox = (config,componentScope) =>{
    const EmptyBox: any = _.cloneDeep(emptyBox);
      if (config.layout) {
        EmptyBox.config.layout = createLayoutFormat(config.layout);
      }
      return EmptyBox;
}