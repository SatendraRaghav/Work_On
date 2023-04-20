import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


 const myPathTester: RankedTester = rankWith(200, optionIs("widget", "myPath"));
export default myPathTester;