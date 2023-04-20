import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomDate from '../Components/CustomDate';

const ControlDate = (props:any) => {
  const data:any = props.uischema.value;
  

  return(
    <CustomDate
      data={data}
      value={props.data}
      path={props.path}
      updateValue={(newValue:any) => props.handleChange(props.path, newValue)}
   />)
  }

export default withJsonFormsControlProps(ControlDate);