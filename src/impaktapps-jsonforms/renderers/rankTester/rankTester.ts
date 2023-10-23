import { rankWith,RankedTester,optionIs } from '@jsonforms/core';
export const rankTester = (widgetName:string):RankedTester=>{
  return rankWith(200, optionIs("widget",widgetName));
}
export default rankTester;

