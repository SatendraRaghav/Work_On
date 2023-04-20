import React,{useState} from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomTimer from '../Components/CustomTimer';
const ControlTimer = (props:any) => {
  
const data = props.uischema.value
  return(
  <CustomTimer
     Data={data}
  />
)};
export default withJsonFormsControlProps(ControlTimer);