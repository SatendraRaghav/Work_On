import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { checkHiddenCondition } from '../../utils/Permission';
import { useContext } from 'react';
import { DataContext } from '../../../Context';


const CustomLabel = ({data,path}:any) => {
  return (
   <Box>
    <Typography sx={{fontFamily:'inter',  paddingLeft:"20px",...data.content.style}}variant={data.content.variant}>{data.content.heading}</Typography>
  </Box>  
  )
}

export default CustomLabel;