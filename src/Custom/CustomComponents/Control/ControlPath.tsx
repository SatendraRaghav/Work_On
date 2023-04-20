import React, { useState } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
// import CustomProgressBar from '../Components/CustomProgressBar';
import Path from '../Components/Path';


const ControlPath = (props:any) => {
  const data:any = props.uischema.value;
  return(
    <Path
    //   Data={data}
      // value={props.data}
   />)
  }

export default withJsonFormsControlProps(ControlPath);