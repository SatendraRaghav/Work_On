import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';

const myTesterThought: RankedTester = rankWith(200, optionIs("widget", "Thought"));
// export const myBoxTester = rankWith(3, and(isStringControl, formatIs('Box')));
export default myTesterThought;