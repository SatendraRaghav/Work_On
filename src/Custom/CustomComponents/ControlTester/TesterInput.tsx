import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


 const myInputTester: RankedTester = rankWith(200, optionIs("widget", "InputField"));
export default myInputTester;