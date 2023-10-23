import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import UploadFile from '../components/UploadFile';
import { ControlProps } from '@jsonforms/core';
import { WithInput } from '@jsonforms/material-renderers';
import { Upload } from '@mui/icons-material';

const ControlUploadFile = (props: ControlProps & WithInput) => {

  return(
  <UploadFile
    {...props}
  />
)};

export default withJsonFormsControlProps(ControlUploadFile);