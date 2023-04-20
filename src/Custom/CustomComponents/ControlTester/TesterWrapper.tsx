import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';

const myWrapperTester: RankedTester = rankWith(200, optionIs("widget", "Wrapper"));
// export const myBoxTester = rankWith(3, and(isStringControl, formatIs('Box')));
export default myWrapperTester;