import { createLayoutFormat, flatObjectValueInArray } from "./buildConfig";
import { LineGraph } from "./uischema/graph";
import _ from "lodash";

export const buildLineGraph = (config, componentScope) => {
  const lineGraph: any = _.cloneDeep(LineGraph);
  if (config.layout) {
    lineGraph.config.layout = createLayoutFormat(config.layout);
  }
  lineGraph.config.main.header = config.heading;
  if (config.height) {
    lineGraph.config.style.containerStyle.height = config.height;
  }
  if (config.bottomLabel) {
    lineGraph.config.main.bottomLabel = config.bottomLabel;
  }
  if (config.leftLabel) {
    lineGraph.config.main.leftLabel = config.leftLabel;
  }
  if (config.legendHide) {
    lineGraph.config.main.legendAvailabe = config.legendHide==="YES"?false:true;
  }
  if (config.legendLabels) {
    lineGraph.config.main.tooltipDataKey = flatObjectValueInArray(config.legendLabels);
  }

  if (config.pieArcColors) {
    lineGraph.config.style.lineStyle.colorRange = flatObjectValueInArray(config.pieArcColors);
  }
  lineGraph.scope = componentScope;
  return lineGraph;
}