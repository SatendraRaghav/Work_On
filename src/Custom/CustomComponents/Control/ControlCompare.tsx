import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CompareYourself from '../Components/CompareYourself';

const ControlCompare = (props:any) => {
  const data:any = props.uischema.value;

  return(
  <CompareYourself
     Data={data}
  />

)};
export default ControlCompare;