import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import RecordCell from '../Components/RecordCell';

const ControlRecordCell = (props:any) => {
  const data:any = props.uischema.value;
  return(
  <RecordCell
  />
)};

export default withJsonFormsControlProps(ControlRecordCell);