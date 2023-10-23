import React from 'react'
import { Box, Typography } from '@mui/material'
// import logo from "../assets/Image/Act21-logo-300x75_adobe_express.svg"
import { useTheme } from "@mui/styles";

const Footer = ({padding,color="white"}:any) => {
  const theme:any = useTheme();
  const textPadding= padding/3
  return (
    <Box sx={{textAlign:"right",
     margin: "0",width:"100%",
    color: theme?.palette?.text.primary||"black",
    display:"flex",
    justifyContent:"flex-end",
    background:theme?.palette?.background?.heading||"white"
    }}>
      <Box sx={{width:"70"}}>
        <Typography sx={{fontSize:"12px",paddingRight:padding }}>Powered By:
          </Typography>
          <Box>
            <img  src={"act21.svg"} alt="Impakt_logo" width={100} height={25} style={{paddingRight:padding}} />
          </Box>
          </Box>
    </Box>
  )
}

export default Footer
