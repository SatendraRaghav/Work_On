import { FormHelperText } from '@mui/material'
import React from 'react'

const Helpertext = ({errors,uischemaData}:any) => {
  return (
    <>
    <FormHelperText error={true}>
    {errors !== ""
      ? uischemaData?.errorMessage
        ? uischemaData?.errorMessage
        : errors
      : ""}
  </FormHelperText>
  {uischemaData?.description && (
    <FormHelperText>{uischemaData?.description}</FormHelperText>
  )}
  </>
  )
}

export default Helpertext