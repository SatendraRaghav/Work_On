import { rankWith, scopeEndsWith,RankedTester,optionIs } from '@jsonforms/core';



 const myDateTester: RankedTester = rankWith(200, optionIs("widget", "DateInputField"));
 export default myDateTester;