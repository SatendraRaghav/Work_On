import { rankWith,RankedTester,optionIs } from '@jsonforms/core';


const myFileTester: RankedTester = rankWith(200, optionIs("widget", "FileInputField"));
export default myFileTester;
