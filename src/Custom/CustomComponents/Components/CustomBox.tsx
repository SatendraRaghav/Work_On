import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { checkHiddenCondition } from '../../utils/Permission';
import { useContext } from 'react';
import { DataContext } from '../../../Context';


const CustomBox = ({data,path}:any) => {
  const { state } = useContext(DataContext);
  const pagePath = window.location.pathname.replaceAll("/", "_");
  const hidden = checkHiddenCondition(pagePath,path,state.accessPermissions);
  return (
   <Box sx={{...data.style}}>
    {
      hidden?<></>:
      <Typography variant={data.content.variant}>{data.content.heading}</Typography>
     } 
   </Box>
  )
}

export default CustomBox;