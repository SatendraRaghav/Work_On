import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomBargraph from '../Components/CustomGraph';

const ControlBargraph = (props:any) => {
  const data:any = props.uischema.value;

  return(
  <CustomBargraph
     Data={data}
     path={props.path}
  />

)};
export default ControlBargraph;
