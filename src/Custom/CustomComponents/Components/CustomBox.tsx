import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { checkHiddenCondition } from '../../utils/Permission';
import { useContext } from 'react';
import { DataContext } from '../../../Context';


const CustomBox = ({data,path}:any) => {
  const { state } = useContext(DataContext);
  const pagePath = window.location.pathname.replaceAll("/", "_");
  return (
  
      <Typography sx={{fontFamily:'inter',  paddingLeft:"20px",...data.content.style}}variant={data.content.variant}>{data.content.heading}</Typography>
  )
}

export default CustomBox;