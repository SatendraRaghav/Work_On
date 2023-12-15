import { createLayoutFormat } from "./buildConfig";
import SpeedoMeter from "./uischema/speedoMeter";
import _ from "lodash";

export const buildSpeedoMeter = (config:any,componentScope:string) => {
    const speedoMeter: any = _.cloneDeep(SpeedoMeter);
    speedoMeter.scope = componentScope;
    if (config.layout) {
      speedoMeter.config.layout = createLayoutFormat(config.layout);
    }
    if (config.heading) {
      speedoMeter.config.main.header = config.heading;
    }
    if (config.segments) {
      speedoMeter.config.main.segments = config.segments;
    }
    if (config.style) {
     const styleObj =  JSON.parse(config.style)
     if(styleObj?.style){
      speedoMeter.config.style = {...speedoMeter.config.style,...styleObj.style}
      }
      if(styleObj?.containerStyle){
      speedoMeter.config.style.containerStyle = {...speedoMeter.config.style.containerStyle,...styleObj.containerStyle}
      }
      
    }
    if(config.width){
      speedoMeter.config.main.width =
      config.width;
    }
    if (config.speedoCaption) {
      speedoMeter.config.main.currentValueText =
        config.speedoCaption;
    }
    if (config.data) {
      speedoMeter.config.main.data = config.data;
    }
    if (config.needleColor) {
      speedoMeter.config.style.needleColor = config.needleColor;
    }
    if (config.segments) {
      speedoMeter.config.style.segments = config.segments;
    }
    if (config.endColor) {
      speedoMeter.config.style.endColor = config.endColor;
    }
    if (config.startColor) {
      speedoMeter.config.style.startColor = config.startColor;
    }
    if (config.segmentColors) {
      speedoMeter.config.style.segmentColors = config.segmentColors;
    }
    return speedoMeter;
}