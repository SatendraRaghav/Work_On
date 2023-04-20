import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomSelect from '../Components/CustomSelect';

const ControlSelect = (props:any) => {
  const data:any = props.uischema.value;
  return(
  <CustomSelect
     data={data}
     path={props.path}
     value={props.data}
     updateValue={(newValue:any) => props.handleChange(props.path, newValue)}
  />
)};

export default withJsonFormsControlProps(ControlSelect);