import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CompareYourself from '../components/compare';
import { inputProps } from '../interface/inputfieldProps';


const ControlCompare = (props:inputProps) => {
  return(
  <CompareYourself
   {...props}
  />

)};

export default withJsonFormsControlProps(ControlCompare);