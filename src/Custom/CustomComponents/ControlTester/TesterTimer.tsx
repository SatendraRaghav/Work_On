import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';

const TesterTimer: RankedTester = rankWith(200, optionIs("widget", "Timer"));
export default TesterTimer;