import WrapperSection from "./uischema/wrapperSection";
import _ from "lodash";

export const buildWrapperSection = (config,componentScope) =>{
    const wrapper: any = _.cloneDeep(WrapperSection);
    wrapper.config.main.label = config.label;
    wrapper.config.main.divider = config.divider ? true : false;
    wrapper.config.main.header = config.heading ? true : false;
    return wrapper;
}