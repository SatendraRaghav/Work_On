import React from 'react'
import AutoComplete from '../components/AutoComplete'
import { inputProps } from '../interface/inputfieldProps'
import { withJsonFormsContext, withJsonFormsControlProps, withJsonFormsMultiEnumProps, withJsonFormsOneOfEnumProps } from '@jsonforms/react'

const ControlAutoComplete = (props:inputProps) => {
  return (
   <AutoComplete {...props} />
  )
}

export const MultiSelectControl = withJsonFormsMultiEnumProps(withJsonFormsContext(ControlAutoComplete));
export const SelectControl = withJsonFormsOneOfEnumProps(withJsonFormsContext(ControlAutoComplete));
