import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


 const myNotifyTester: RankedTester = rankWith(200, optionIs("widget", "Notify"));
export default myNotifyTester;