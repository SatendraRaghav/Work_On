import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


export const TesterRank2: RankedTester = rankWith(200, optionIs("widget", "Rank2"));

export default TesterRank2;