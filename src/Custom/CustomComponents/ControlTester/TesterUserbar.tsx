import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';

const myUserbarTester: RankedTester = rankWith(200, optionIs("widget", "Userbar"));
// export const myBoxTester = rankWith(3, and(isStringControl, formatIs('Box')));
export default myUserbarTester;