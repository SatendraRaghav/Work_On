import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';

const myAppTester: RankedTester = rankWith(200, optionIs("widget", "Appbar"));
// export const myBoxTester = rankWith(3, and(isStringControl, formatIs('Box')));
export default myAppTester;