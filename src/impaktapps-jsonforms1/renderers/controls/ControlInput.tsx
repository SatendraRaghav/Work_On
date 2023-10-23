import React, { useState } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import Input from '../components/Input';
import { ControlProps } from '@jsonforms/core';
import { WithInput } from '@jsonforms/material-renderers';

const ControlInput = (props: ControlProps & WithInput) => {
  return(
    <Input
    {...props}
   />)
  }

export default withJsonFormsControlProps(ControlInput);