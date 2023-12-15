import { createLayoutFormat } from "./buildConfig";
import RunnerBoyProgressBar from "./uischema/runnerBoyProgressBar";
import _ from "lodash";

export const RunnerBoyProgressbar = (config:any,componentScope:string) => {
    const RunnerBoy: any = _.cloneDeep(RunnerBoyProgressBar);
    RunnerBoy.scope = componentScope;
    if(config.layout){
        RunnerBoy.config.layout = createLayoutFormat(config.layout)
      }
    return RunnerBoy;
}