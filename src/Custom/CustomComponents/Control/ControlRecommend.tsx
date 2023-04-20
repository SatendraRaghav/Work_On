import React from 'react'
import { withJsonFormsControlProps } from '@jsonforms/react';
import Recommend from '../Components/Recommend';

const ControlRecommend = (props:any) => {
    const data:any = props.uischema.value;
    return(
    <Recommend
       Data={data}
    />
  )};
  
  export default withJsonFormsControlProps(ControlRecommend);