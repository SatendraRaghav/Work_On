import React,{useContext, useState} from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import Wrapper from '../components/Wrapper';
import { ArrayControlProps } from '@jsonforms/core';
import { DataContext } from '../context/Context';
const ControlWrapper =  ({
  schema,
  uischema,
  data,
  path,
  rootSchema,
  uischemas,      
  id,
  // label,
  errors
}: ArrayControlProps & any) => {
  const { theme } = useContext(DataContext);
  return(
    <div
    style={
      uischema?.config?.defaultStyle || uischema?.config?.wrapperStyle
        ? {
            ...theme.WrapperStyle,
            ...uischema?.config?.wrapperStyle,
            background: uischema?.config?.main?.header
              ? theme.myTheme.palette.background.heading
              : theme.myTheme.palette.secondary.main,
          }
        : {}
    }
  >
  <Wrapper
  data={data}
  // label={label}
  path={path}
  schema={schema}
  errors={errors}
  uischema={uischema}
  uischemas={uischemas}
  rootSchema={rootSchema}
  id={id}
  />
  </div>
)};

export default withJsonFormsControlProps(ControlWrapper);