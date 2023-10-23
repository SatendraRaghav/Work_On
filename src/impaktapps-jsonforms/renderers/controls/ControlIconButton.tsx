import React from 'react'
import IconsButton from '../components/IconsButton'
import { inputProps } from '../interface/inputfieldProps'
import { withJsonFormsControlProps } from '@jsonforms/react'

const ControlIconButton = (props:inputProps) => {
  return (
    <IconsButton
    {...props} />
  )
}

export default withJsonFormsControlProps(ControlIconButton)