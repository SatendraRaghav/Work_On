import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomRadio from '../Components/CustomRadio';

const ControlRadio = (props:any) => {
  // console.log(props.data)
  const data:any = props.uischema.value;
  return(
  <CustomRadio
     data={data}
     value={props.data}
     updateValue={(newValue:any) => props.handleChange(props.path, newValue)}
     path={props.path}
  />
)};

export default withJsonFormsControlProps(ControlRadio);