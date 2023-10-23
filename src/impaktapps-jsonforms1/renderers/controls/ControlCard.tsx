import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import ImpaktAppsCard from "../components/Card"
import { inputProps } from '../interface/inputfieldProps';


const ControlCard = (props:inputProps) => {
  return(
  <ImpaktAppsCard
   {...props}
  />

)};

export default withJsonFormsControlProps(ControlCard);