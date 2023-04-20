
import { RankedTester,optionIs, rankWith } from '@jsonforms/core';


 const myBoxTester: RankedTester = rankWith(200, optionIs("widget", "Box"));
// export const myBoxTester = rankWith(3, and(isStringControl, formatIs('Box')));
export default myBoxTester;