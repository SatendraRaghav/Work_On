import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


export const TesterRecommend: RankedTester = rankWith(200, optionIs("widget", "Recommend"));

export default TesterRecommend;