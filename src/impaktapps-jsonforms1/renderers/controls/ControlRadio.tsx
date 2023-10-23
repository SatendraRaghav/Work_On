import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import ImpaktAppsRadio from '../components/Radio';
import { ControlProps, OwnPropsOfEnum } from '@jsonforms/core';

const ControlRadio = (props: ControlProps & OwnPropsOfEnum) => {
  return(
  <ImpaktAppsRadio
    {...props}
  />
)};

export default withJsonFormsControlProps(ControlRadio);