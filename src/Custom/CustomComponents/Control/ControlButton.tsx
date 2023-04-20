import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomButton } from '../Components/CustomButton';


const ControlButton = (props:any) => {
  const data:any = props.uischema.value;
  return(
  <CustomButton
    //  uischema={props.uischema}
     data={data}
     path={props.path}
  />

)};

export default withJsonFormsControlProps(ControlButton);