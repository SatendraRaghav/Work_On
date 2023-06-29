import React from 'react'
import { Box, Typography } from '@mui/material'
import logo from "../Image/Act21-logo-300x75_adobe_express.svg"


const Footer = ({padding,color="white"}:any) => {
  const textPadding= padding/3
  return (
    <Box sx={{textAlign:"right",
     margin: "0",width:"100%",
    color: "black",
    display:"flex",
    justifyContent:"flex-end",
    background:color
    }}>
      <Box sx={{width:"70"}}>
        <Typography sx={{fontSize:"12px",paddingRight:padding }}>Powered By:
          </Typography>
          <Box>
            <img  src={logo} alt="Impakt_logo" width={100} height={25} style={{paddingRight:padding}} />
          </Box>
          </Box>
    </Box>
  )
}

export default Footer
