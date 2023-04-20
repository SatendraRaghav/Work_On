import { RankedTester,optionIs, rankWith } from '@jsonforms/core';


 const myBargraphTester: RankedTester = rankWith(200, optionIs("widget", "myGraph"));
// export const myBoxTester = rankWith(3, and(isStringControl, formatIs('Box')));
export default myBargraphTester;