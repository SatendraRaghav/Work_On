import { optionIs, RankedTester, rankWith,  } from '@jsonforms/core';

const myCardTester: RankedTester = rankWith(200, optionIs("widget", "Card"));
export default myCardTester;