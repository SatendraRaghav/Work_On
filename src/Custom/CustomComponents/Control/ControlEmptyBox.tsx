import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import EmptyBox from '../Components/EmptyBox';




const ControlEmptyBox = () => {
  return(
<EmptyBox 
/>
)};

export default withJsonFormsControlProps(ControlEmptyBox);