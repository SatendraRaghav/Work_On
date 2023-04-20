import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


export const mySelectTester: RankedTester = rankWith(200, optionIs("widget", "SelectInputField"));

export default mySelectTester;