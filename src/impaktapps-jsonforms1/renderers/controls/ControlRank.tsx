import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps, OwnPropsOfEnum } from '@jsonforms/core';
import Rank from '../components/Rank';

const ControlRank = (props: ControlProps & OwnPropsOfEnum) => {
  return(
  <Rank
    {...props}
  />
)};

export default withJsonFormsControlProps(ControlRank);