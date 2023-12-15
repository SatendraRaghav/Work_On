import { createLayoutFormat, flatObjectValueInArray } from "./buildConfig";
import { PieGraph } from "./uischema/graph";
import _ from "lodash";
// flatObjectValueInArray
export const buildPieGraph = (config,componentScope) =>{
    const pieGraph: any = _.cloneDeep(PieGraph);
    if (config.layout) {
      pieGraph.config.layout = createLayoutFormat(config.layout);
    }
    if (config.height) {
      pieGraph.config.style.containerStyle.height = config.height;
    }
    if (config.legendHide) {
      pieGraph.config.main.legendAvailabe = config.legendHide==="YES"?false:true;
    }
    pieGraph.scope = componentScope;
    pieGraph.config.main.header = config.heading;
  
      if(config.legendLabels){
        pieGraph.config.main.tooltipDataKey = flatObjectValueInArray(config.legendLabels);
        }
    
        if(config.pieArcColors){
          pieGraph.config.style.pieStyle.colorRange = flatObjectValueInArray(config.pieArcColors);
          }
    return pieGraph;
}