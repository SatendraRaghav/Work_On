import { optionIs, RankedTester, rankWith,  } from '@jsonforms/core';

const myButtonTester: RankedTester = rankWith(200, optionIs("widget", "Button"));
// export const myBoxTester = rankWith(3, and(isStringControl, formatIs('Box')));
export default myButtonTester;