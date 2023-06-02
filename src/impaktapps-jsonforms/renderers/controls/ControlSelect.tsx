import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import ImpaktAppsSelect from '../components/Select';
import { inputProps } from '../interface/inputfieldProps';

const ControlSelect = (props: inputProps) => {
  return(
  <ImpaktAppsSelect
   {...props}
  />
)};

export default withJsonFormsControlProps(ControlSelect);