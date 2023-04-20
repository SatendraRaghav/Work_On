import React from 'react'
import { Box } from '@mui/system'

const EmptyBox = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
     <div style={{width:"100%"}}></div>
    </Box>
  )
}

export default EmptyBox;