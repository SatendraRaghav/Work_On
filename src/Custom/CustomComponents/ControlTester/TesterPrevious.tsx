import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


 const TesterPrevious: RankedTester = rankWith(200, optionIs("widget", "PreviousWinner"));
export default TesterPrevious;