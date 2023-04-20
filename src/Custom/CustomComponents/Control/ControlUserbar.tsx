import React,{useState} from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomUserbar
 } from '../Components/CustomUserbar';
const ControlUserbar = (props:any) => {
  
const data = props.uischema.value
  return(
  <CustomUserbar
     Data={data}
  />
)};

export default withJsonFormsControlProps(ControlUserbar);
