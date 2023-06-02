import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import Date from '../components/Date';
import { inputProps } from '../interface/inputfieldProps';

const ControlDate = (props: inputProps) => {
  return(
    <Date
     {...props}
   />)
  }

export default withJsonFormsControlProps(ControlDate);