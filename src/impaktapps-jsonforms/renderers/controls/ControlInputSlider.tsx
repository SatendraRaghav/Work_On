import React, { useState } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import InputSlider from '../components/InputSlider';
import { ControlProps } from '@jsonforms/core';
import { WithInput } from '@jsonforms/material-renderers';

const ControlInputSlider = (props: ControlProps & WithInput) => {
  return(
    <InputSlider
    {...props}
   />)
  }

export default withJsonFormsControlProps(ControlInputSlider);