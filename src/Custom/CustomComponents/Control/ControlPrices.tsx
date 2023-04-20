import React, { useState } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomPrices from '../Components/CustomPrices';

const ControlPrices = (props:any) => {
  const data:any = props.uischema.value;
  return(
    <CustomPrices
      Data={data}
      // value={props.data}
   />)
  }

export default withJsonFormsControlProps(ControlPrices);