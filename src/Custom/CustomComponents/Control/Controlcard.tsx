import React,{useState} from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomCard from '../Components/CustomCard';

const ControlCard = (props:any) => {
  
const data = props.uischema.value
  return(
  <CustomCard
     Data={data}
     path={props.path}
  />
)};

export default withJsonFormsControlProps(ControlCard);