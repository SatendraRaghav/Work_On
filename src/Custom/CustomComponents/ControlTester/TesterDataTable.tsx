import { rankWith, scopeEndsWith,RankedTester,optionIs } from '@jsonforms/core';



 const myTableTester: RankedTester = rankWith(200, optionIs("widget", "Table"));
 export default myTableTester;