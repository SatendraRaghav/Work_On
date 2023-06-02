import React from 'react'
import AutoComplete from '../components/AutoComplete'
import { inputProps } from '../interface/inputfieldProps'

const ControlAutoComplete = (props:inputProps) => {
  return (
   <AutoComplete {...props} />
  )
}

export default ControlAutoComplete