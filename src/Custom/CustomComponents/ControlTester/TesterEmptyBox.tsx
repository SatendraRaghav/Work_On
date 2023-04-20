import { rankWith,RankedTester,optionIs } from '@jsonforms/core';



 const myEmptyBoxTester: RankedTester = rankWith(200, optionIs("widget", "EmptyBox"));
 export default myEmptyBoxTester;