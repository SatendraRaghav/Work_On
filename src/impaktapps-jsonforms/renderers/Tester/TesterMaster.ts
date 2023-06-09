import { rankWith,RankedTester,optionIs } from '@jsonforms/core';
export const testerMaster = (widgetName:string):RankedTester=>{
  return rankWith(200, optionIs("widget",widgetName));
}
export default testerMaster;

