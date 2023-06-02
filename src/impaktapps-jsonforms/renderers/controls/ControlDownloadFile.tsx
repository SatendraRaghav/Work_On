import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import DownloadFile from '../components/DownloadFile';
import { ControlProps } from '@jsonforms/core';
import { WithInput } from '@jsonforms/material-renderers';
import { Upload } from '@mui/icons-material';

const ControlDownloadFile = (props: ControlProps & WithInput) => {

  return(
  <DownloadFile
    {...props}
  />
)};

export default withJsonFormsControlProps(ControlDownloadFile);