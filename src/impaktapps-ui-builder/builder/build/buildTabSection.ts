import Tabsection from "./uischema/tabsection";
import _ from "lodash";
import  buildUiSchema from "./buildUiSchema";

export const buildTabSection = (config:any,componentScope:string) => {
    const tab: any = _.cloneDeep(Tabsection);
    if (config.sectionLabels) {
      tab.config.main.tabLabels = config.sectionLabels.map(e => e.label);
    }
    tab.config.main.id = config.name;
    return tab
}