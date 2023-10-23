import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomTimer from '../components/Timer';
import { ControlProps, OwnPropsOfEnum } from '@jsonforms/core';

const ControlTime = (props: ControlProps & OwnPropsOfEnum) => {
  return(
  <CustomTimer
    {...props}
  />
)};

export default withJsonFormsControlProps(ControlTime);