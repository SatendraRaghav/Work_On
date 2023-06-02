import React from 'react'
import IconsButton from '../components/IconsButton'
import { inputProps } from '../interface/inputfieldProps'

const ControlIconButton = (props:inputProps) => {
  return (
    <IconsButton
    {...props} />
  )
}

export default ControlIconButton