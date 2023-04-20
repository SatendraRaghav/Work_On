import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import Rank from '../Components/Rank';

const ControlRank = (props:any) => {
  // console.log(props.data)
  const data:any = props.uischema.value;
  return(
  <Rank
     data={data}
     value={props.data}
     updateValue={(newValue:any) => props.handleChange(props.path, newValue)}
     path={props.path}
  />
)};

export default withJsonFormsControlProps(ControlRank);