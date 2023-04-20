import React,{useState} from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import Thought from '../Components/Thought';

const ControlThought = (props:any) => {
  
// const data = props.uischema.value
  return(
  <Thought
    //  data={data}
    //  path={props.path}
  />
)};

export default withJsonFormsControlProps(ControlThought);