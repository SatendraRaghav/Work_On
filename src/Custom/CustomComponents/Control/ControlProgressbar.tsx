import React, { useState } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomProgressBar from '../Components/CustomProgressBar';

const ControlProgressbar = (props:any) => {
  const data:any = props.uischema.value;
  return(
    <CustomProgressBar
      Data={data}
      // value={props.data}
   />)
  }

export default withJsonFormsControlProps(ControlProgressbar);