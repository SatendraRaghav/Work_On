import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


 const myProgressBarTester: RankedTester = rankWith(200, optionIs("widget", "myProgressBar"));
export default myProgressBarTester;