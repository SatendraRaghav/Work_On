import { createLayoutFormat } from "./buildConfig";
import { BarGraph } from "./uischema/graph";
import _ from "lodash";

export const buildStackbarGraph = (config:any,componentScope:string) => {
    const barGraph: any = _.cloneDeep(BarGraph);
    if (config.layout) {
      barGraph.config.layout = createLayoutFormat(config.layout);
    }
    if (config.legendHide) {
      barGraph.config.main.legendAvailable = false;
    }
    barGraph.config.main.type = config.graphType;
    barGraph.config.main.header = config.heading;
    if (config.barColor) {
      barGraph.config.barStyle.color = config.barColor;
    }
    if (config.containerBackground) {
      barGraph.config.containerStyle.background =
        config.containerBackground;
    }
    if (config.height) {
      barGraph.config.style.containerStyle.height = config.height;
    }
    if (config.bottomLabel) {
      barGraph.config.main.bottomLabel = config.bottomLabel;
    }
    if (config.leftLabel) {
      barGraph.config.main.leftLabel = config.leftLabel;
    }
    barGraph.scope = componentScope;
    return barGraph;
} 