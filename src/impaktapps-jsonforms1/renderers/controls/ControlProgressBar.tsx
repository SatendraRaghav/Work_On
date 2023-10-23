import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';
import { WithInput } from '@jsonforms/material-renderers';
import ImpaktApps_ProgressBar from '../components/ProgressBar';

const ControlProgressBar = (props: ControlProps & WithInput & any) => {

  return(
  <ImpaktApps_ProgressBar
    {...props}
  />
)};

export default withJsonFormsControlProps(ControlProgressBar);