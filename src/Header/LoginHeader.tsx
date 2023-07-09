import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { actions, DataContext } from '../Reducer';
import { useContext } from 'react';
// import logo from "../Image/Act21-logo-300x75_adobe_express.svg"
import logo from "../assets/hyperformLogo.jpg";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useProSidebar } from 'react-pro-sidebar';
import "./style.css"


export default function LoginHeader() {
  const { dispatch, state } = useContext(DataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { collapseSidebar} = useProSidebar();

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

  return (
    <Box sx={{ display: 'flex',height:"70px" }}>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar>
          <Box sx={{marginLeft:"-30px"}}>
        <img src = {logo} alt="impakt_logo" width={320} height={70} /></Box>
          <Box component={"div"} sx={{flexGrow:1}} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}