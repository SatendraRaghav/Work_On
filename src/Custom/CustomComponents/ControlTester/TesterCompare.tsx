import { optionIs, RankedTester, rankWith,  } from '@jsonforms/core';

const TesterCompare: RankedTester = rankWith(200, optionIs("widget", "Compare"));
export default TesterCompare;