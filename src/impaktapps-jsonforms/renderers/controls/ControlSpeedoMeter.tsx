import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';
import { WithInput } from '@jsonforms/material-renderers';
import ImpaktApps_SpeedoMeter from '../components/SpeedoMeter';

const ControlSpeedoMeter = (props: ControlProps & WithInput & any) => {

  return(
  <ImpaktApps_SpeedoMeter
    {...props}
  />
)};

export default withJsonFormsControlProps(ControlSpeedoMeter);