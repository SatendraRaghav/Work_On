import React,{useState} from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import Wrapper from '../Components/CustomWrapper';
import { ArrayControlProps } from '@jsonforms/core';
const ControlWrapper =  ({
  schema,
  uischema,
  data,
  path,
  rootSchema,
  uischemas,      
  id,
  label,
  errors
}: ArrayControlProps & any) => {
  
  return(
  <Wrapper
  data={data}
  label={label}
  path={path}
  schema={schema}
  errors={errors}
  uischema={uischema}
  uischemas={uischemas}
  rootSchema={rootSchema}
  id={id}
  />
)};

export default withJsonFormsControlProps(ControlWrapper);