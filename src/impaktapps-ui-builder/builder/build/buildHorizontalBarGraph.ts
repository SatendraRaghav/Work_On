import { createLayoutFormat } from "./buildConfig";
import { HorizontalBarGraph } from "./uischema/graph";
import _ from "lodash";


const buildHorizontalBarGraph = (config:any,componentScope:string) => {
    const horizontalBarGraph: any = _.cloneDeep(HorizontalBarGraph);
    horizontalBarGraph.scope = componentScope;
    if (config.layout) {
      horizontalBarGraph.config.layout = createLayoutFormat(config.layout);
    }
    horizontalBarGraph.scope = componentScope;
    horizontalBarGraph.config.main.header = config.heading;
    if (config.barColor) {
      horizontalBarGraph.config.barStyle.color = config.barColor;
    }
    if (config.containerBackground) {
      horizontalBarGraph.config.containerStyle.background =
        config.containerBackground;
    }
    if (config.height) {
      horizontalBarGraph.config.style.containerStyle.height =
        config.height;
    }
    if (config.bottomLabel) {
      horizontalBarGraph.config.main.bottomLabel =
        config.bottomLabel;
    }
    if (config.leftLabel) {
      horizontalBarGraph.config.main.leftLabel = config.leftLabel;
    }
    return horizontalBarGraph
}

export default buildHorizontalBarGraph