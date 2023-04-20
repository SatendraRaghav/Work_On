import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


export const myRecordCellTester: RankedTester = rankWith(200, optionIs("widget", "RecordCell"));

export default myRecordCellTester;