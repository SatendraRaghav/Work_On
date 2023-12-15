import _ from "lodash";
import { createLayoutFormat } from "./buildConfig";

const RadioUiSchema = {
    type: "Control",
    scope: "#/properties/invoiceEnabled",

    options: {
      widget: "RadioInputField",
    },
    config: {
      layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
      main: {
        label: "Enabled",
        options: ["YES", "NO"],
        errorMessage: "Enabled is not marked as YES or NO",
      },
    },
  };

  export const buildRadio = (config,componentScope) => {
    const Radio: any = _.cloneDeep(RadioUiSchema);
    Radio.scope = componentScope;
    Radio.config.main.heading = config.label
    if(config.layout){
        Radio.config.layout = createLayoutFormat(config.layout)
    }
    if (config.sectionLabels) {
        Radio.config.main.options = config.sectionLabels.map(e => e.label||e.Options);
      }
    if (config.style) {
        Radio.config.style = JSON.parse(config.style)
    }
    return Radio;
}