import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ImpaktAppsButton } from '../components/Button';
import { inputProps } from '../interface/inputfieldProps';


const ControlButton = (props:inputProps) => {
  return(
  <ImpaktAppsButton
   {...props}
  />

)};

export default withJsonFormsControlProps(ControlButton);