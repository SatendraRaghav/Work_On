import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {DataContext, actions } from '../Reducer';
import { useContext } from 'react';
import logo from "../Image/Act21-logo-300x75_adobe_express.svg"
import {userValue, setUserValue } from '../Apple';
import { navigator } from '../Logic';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useProSidebar } from 'react-pro-sidebar';
import "./style.css"
import { Badge, Tooltip, TooltipProps, tooltipClasses } from '@mui/material';


export default function Header() {
  const { dispatch, state } = useContext(DataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { collapseSidebar} = useProSidebar();

  const LogChange = () => {
    setUserValue(null)
    navigator("/")
  };

  const handleMenu = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  backgroundColor:"white",
  color:"black",
  boxShadow:"none",
  padding:"20px auto",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(state.drawerBoolean && {
    marginLeft: state.drawerWidth,
    width: `calc(100% - ${state.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
// React.useEffect(()=>{
//    dispatch({type:actions.currentMenuChange,payload:"new"})
// },[])
  const handleDrawerOpen = () => {
     collapseSidebar()
  };
  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color:"#ede7f6",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ede7f6",
      color:"#673ab7"
    },
  }));

  return (
    <Box sx={{ display: 'flex',height:"70px" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{marginRight:"40px"}}>
        <img src = {logo} alt="impakt_logo" width={120} height={40}/></Box>
        {/* <Badge badgeContent={state.currentMenu}  color="primary"> */}
        <BootstrapTooltip open={true} title={`${state.currentMenu}`} placement="right">
            {/* <Button>Hover or touch</Button> */}
        
          <IconButton
            // color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              fontWeight:"bolder",
              color:"#673abd",
              background:"#ede7f6",
              borderRadius:"10px",
              '&:hover':{
                color:"white",
              background:"#673abd",
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <MailIcon color="action" /> */}
{/* </Badge> */}
  </BootstrapTooltip>
          <Box component={"div"} sx={{flexGrow:1}} />
          <Box id="userPrifile"
          sx={{display:"flex",alignItems:"center",background:"#e3f2fd",padding:"0 10px",borderRadius:"15px"}}>
          <Typography>{userValue?.payload?.username}</Typography>
          <div>
        
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                sx={{left:"calc(100vw - 100px)",top:"35px"}}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} >
                <IconButton
                  edge="start"
                  color="primary"
                onClick={LogChange}>
                  <LogoutIcon />
                </IconButton>
                </MenuItem>
              </Menu>  
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                onClick={(e)=>handleMenu(e)}
                sx={{
                  // marginRight: 5,
                  fontWeight:"bolder",
                  color:"#673abd",
                  // background:"#ede7f6",
                  borderRadius:"10px",
                  '&:hover':{
                    color:"white",
                  background:"#2196f3",
                  }
                }}
              > 
               <AccountCircle />
              </IconButton>
              </div>
              </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}