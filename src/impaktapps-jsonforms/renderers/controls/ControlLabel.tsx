import React,{useState} from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import Label from '../components/Label';

const ControlBox = (props:any) => {
  return(
  <Label
      {...props}
      />
)};

export default withJsonFormsControlProps(ControlBox);