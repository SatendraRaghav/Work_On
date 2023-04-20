import React,{useState} from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import PreviousWinner from '../Components/PreviousWinner';
const ControlPrevious = (props:any) => {
  
const data = props.uischema.value
  return(
  <PreviousWinner
     Data={data}
  />
)};
export default withJsonFormsControlProps( ControlPrevious);