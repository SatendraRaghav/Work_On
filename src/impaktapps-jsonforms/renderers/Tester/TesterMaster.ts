import { rankWith,RankedTester,optionIs } from '@jsonforms/core';
export const TesterMaster = (widgetName:string):RankedTester=>{
  return rankWith(200, optionIs("widget",widgetName));
}

