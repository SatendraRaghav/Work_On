import React from 'react'
import AutoComplete from '../components/AutoComplete'
import { inputProps } from '../interface/inputfieldProps'
import { withJsonFormsControlProps } from '@jsonforms/react'

const ControlAutoComplete = (props:inputProps) => {
  return (
   <AutoComplete {...props} />
  )
}

export default withJsonFormsControlProps(ControlAutoComplete)