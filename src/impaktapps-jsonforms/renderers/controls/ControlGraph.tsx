import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import CustomBargraph from '../components/Graph';
import { ControlProps } from '@jsonforms/core';
import { WithInput } from '@jsonforms/material-renderers';

const ControlGraph = (props: ControlProps & WithInput & any) => {

  return(
  <CustomBargraph
    {...props}
  />
)};

export default withJsonFormsControlProps(ControlGraph);