import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomDailogBox from '../components/DialogBox';
import { ControlProps } from '@jsonforms/core';
import { WithInput } from '@jsonforms/material-renderers';

const ControlDailog = (props: ControlProps & WithInput) => {
  return(
    <CustomDailogBox
    {...props}
   />)
  }

export default withJsonFormsControlProps(ControlDailog);