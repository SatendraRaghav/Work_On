import { RankedTester,optionIs, rankWith } from '@jsonforms/core';


export const myRadioTester: RankedTester = rankWith(200, optionIs("widget", "RadioInputField"));

export default myRadioTester;