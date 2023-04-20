import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


 const TesterPrices: RankedTester = rankWith(200, optionIs("widget", "Prices"));
export default TesterPrices;