import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


export const myArrayTester: RankedTester = rankWith(200, optionIs("arrayType", true));

export default rankWith(
  3, //increase rank as needed
  scopeEndsWith("Array")
);