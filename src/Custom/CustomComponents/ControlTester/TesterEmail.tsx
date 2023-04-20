import { rankWith, scopeEndsWith,RankedTester,optionIs } from '@jsonforms/core';



 const myEmailTester: RankedTester = rankWith(200, optionIs("widget", "EmailInputField"));
 export default myEmailTester;