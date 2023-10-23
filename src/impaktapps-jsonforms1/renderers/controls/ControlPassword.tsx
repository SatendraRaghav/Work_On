import React, { useState } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import Password from '../components/Password';
import { ControlProps } from '@jsonforms/core';
import { WithInput } from '@jsonforms/material-renderers';

const ControlPassword = (props: ControlProps & WithInput) => {
  return(
    <Password
  {...props}
   />)
  }

export default withJsonFormsControlProps(ControlPassword);