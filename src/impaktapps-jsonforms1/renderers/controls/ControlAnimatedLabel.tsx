import React from 'react'
import AnimatedLabel from '../components/Animatedlabel'
import { inputProps } from '../interface/inputfieldProps'
import { withJsonFormsControlProps } from '@jsonforms/react'

const ControlAnimatedLabel = (props:inputProps) => {
  return (
   <AnimatedLabel {...props} />
  )
}

export default withJsonFormsControlProps(ControlAnimatedLabel)