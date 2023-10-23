import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { DataContext, actions } from "../Reducer";
import { useContext } from "react";
// import logo from "../assets/Image/hyperformLogo.jpg";
// import { userValue, setUserValue } from "../App";
import { navigator } from "../serviceHolder";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { MenuProps, useProSidebar } from "react-pro-sidebar";
import { Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/styles";
export default function Header({
  handleDrawer,
  setUserValue,
  changeTheme,
  userValue,
}: any) {
  const { dispatch, state } = useContext(DataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const LogChange = () => {
    setUserValue(null);
    navigator("/");
  };
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    handleDrawer();
  };
  const theme: any = useTheme();
  const appBackground = theme.palette.background.heading;
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    background: appBackground,
    color: theme.palette.text.primary,
    boxShadow: "none",
    padding: "80px auto",
    zIndex: 1,
  }));
  const StyledMenu = styled((props: MenuProps) => (
    //@ts-ignore
    <Menu open={false} elevation={0} {...props} />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      marginTop: theme.spacing(4),
      borderRadius: "20px",
      background: appBackground,
      minWidth: 280,
      padding: "80px auto",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "6px 0",
      },
    },
  }));
  const MenuStyle = {
    margin: "10px",
    borderRadius: "10px",
    "&:hover": {
      color: theme.palette.action.focus,
      backgroundColor: theme.palette.background.iconButton,
    },
  };
  return (
    <Box sx={{ display: "flex", height: "60px" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ marginRight: "1px", marginLeft: "-30px" }}>
            <img
              src={"hyperformLogo22.png"}
              alt="impakt_logo"
              width={230}
              height={40}
            />
          </Box>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              fontWeight: theme.palette.typography.fontWeightBold,
              color: theme.palette.text.iconButton,
              background: theme.palette.background.iconButton,
              borderRadius: "10px",
              "&:hover": {
                color: theme.palette.action.iconButtonHoverColor,
                background: theme.palette.action.focusBackground,
              },
              marginLeft: "5px",
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box component={"div"} sx={{ flexGrow: 1 }} />
          {/* <Box sx={{}}> */}
          <Box
            sx={{
              display: "flex",
              color: theme.palette.text.iconButton,
              background: theme.palette.background.iconButton,
              // color:theme.palette.text.primary,
              // background:theme.palette.secondary.main,
              borderRadius: "20px",
              "&:hover": {
                color: theme.palette.text.primary,
                background: theme.palette.secondary.main,
              },
            }}
          >
            <StyledMenu
              id="demo-customized-menu"
              //@ts-ignore
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              sx={{
                left: "calc(100vw - 300px)",
                top: "15px",
                borderRadius: "20px",
              }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                sx={{
                  marginBottom: "20px",
                  "&:hover": {
                    color: theme.palette.text.primary,
                    background: theme.palette.background.heading,
                  },
                }}
                disableRipple
              >
                <Typography sx={{ fontWeight: "bold", marginRight: "10px" }}>
                  Hello,
                </Typography>
                {userValue?.payload?.username}
              </MenuItem>
              <MenuItem
                sx={{
                  padding: "40px",
                  borderRadius: "20px",
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"center",
                  margin: "10px",
                  
                  background: theme.palette.background.iconButton,
                  ...MenuStyle,
                }}
              >
                <Box component={"div"} sx={{fontWeight:700,color: theme.palette.text.iconButton,}}>Hyperform<br/></Box>
                <Box component={"div"} sx={{fontWeight:300,fontSize:"10px",  color: theme.palette.text.primray,}}>powered by ImpaktApps</Box>
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                sx={{
                  color: theme.palette.text.input,
                  marginBottom: "20px",
                  "&:hover": {
                    color: theme.palette.text.input,
                    background: theme.palette.background.heading,
                  },
                }}
                disableRipple
              >
                <Typography sx={{ fontWeight:300,fontSize:"12px", marginRight: "10px" }}>
                 Choose Your Mode
                </Typography>
                
              </MenuItem>
              <MenuItem
                sx={MenuStyle}
                onClick={() => {
                  changeTheme("dark", true);
                  handleClose();
                }}
              >
                <svg
                  fill="currentColor"
                  width="20px"
                  height="20px"
                  style={{ marginRight: "15px" }}
                  stroke="currentColor"
                  viewBox="0 0 100 100"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="_x31_"></g> <g id="_x32_"></g> <g id="_x33_"></g>{" "}
                    <g id="_x34_"></g> <g id="_x35_"></g> <g id="_x36_"></g>{" "}
                    <g id="_x37_"></g> <g id="_x38_"></g> <g id="_x39_"></g>{" "}
                    <g id="_x31_0"></g> <g id="_x31_1"></g> <g id="_x31_2"></g>{" "}
                    <g id="_x31_3"></g> <g id="_x31_4"></g> <g id="_x31_5"></g>{" "}
                    <g id="_x31_6"></g> <g id="_x31_7"></g> <g id="_x31_8"></g>{" "}
                    <g id="_x31_9"></g> <g id="_x32_0"></g> <g id="_x32_1"></g>{" "}
                    <g id="_x32_2">
                      {" "}
                      <path d="M50,85.9c-19.8,0-35.9-16.1-35.9-35.9S30.2,14.1,50,14.1c2.7,0,5.5,0.3,8.1,0.9c0.7,0.2,1.3,0.7,1.5,1.5s-0.1,1.5-0.7,2 c-7.4,6.1-11.6,15.1-11.6,24.6c0,14.9,10.2,27.7,24.7,31.1c0.7,0.2,1.3,0.7,1.5,1.5c0.2,0.7-0.1,1.5-0.7,2 C66.4,83,58.3,85.9,50,85.9z M50,18.1c-17.6,0-31.9,14.3-31.9,31.9S32.4,81.9,50,81.9c6.1,0,12-1.7,17.1-5 c-14.2-5-23.8-18.4-23.8-33.8c0-9.4,3.6-18.2,10-24.9C52.2,18.2,51.1,18.1,50,18.1z M63.3,47.1c-0.7,0-1.4-0.4-1.8-1l-2.7-5l-5-2.7 c-0.6-0.4-1-1-1-1.8s0.4-1.4,1-1.8l5-2.7l2.7-5c0.4-0.6,1-1,1.8-1s1.4,0.4,1.8,1l2.7,5l5,2.7c0.6,0.4,1,1,1,1.8s-0.4,1.4-1,1.8 l-5,2.7L65,46C64.7,46.7,64,47.1,63.3,47.1z M58.9,36.5l2.3,1.3c0.3,0.2,0.6,0.5,0.8,0.8l1.3,2.3l1.3-2.3c0.2-0.3,0.5-0.6,0.8-0.8 l2.3-1.3l-2.3-1.3c-0.3-0.2-0.6-0.5-0.8-0.8l-1.3-2.3L62,34.5c-0.2,0.3-0.5,0.6-0.8,0.8L58.9,36.5z M75.8,66.7 c-0.7,0-1.4-0.4-1.8-1l-1.9-3.4l-3.4-1.9c-0.6-0.4-1-1-1-1.8s0.4-1.4,1-1.8l3.4-1.9l1.9-3.4c0.4-0.6,1-1,1.8-1l0,0 c0.7,0,1.4,0.4,1.8,1l1.9,3.4l3.4,1.9c0.6,0.4,1,1,1,1.8s-0.4,1.4-1,1.8l-3.4,1.9l-1.9,3.4C77.2,66.3,76.5,66.7,75.8,66.7z M73.9,58.5l0.7,0.4c0.3,0.2,0.6,0.5,0.8,0.8l0.4,0.7l0.4-0.7c0.2-0.3,0.5-0.6,0.8-0.8l0.7-0.4L77,58.1c-0.3-0.2-0.6-0.5-0.8-0.8 l-0.4-0.7l-0.4,0.7c-0.2,0.3-0.5,0.6-0.8,0.8L73.9,58.5z M27.2,47.6c0.4-0.4,0.6-0.9,0.6-1.4c0-0.5-0.2-1-0.6-1.4 c-0.7-0.8-2.1-0.8-2.8,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1.1,0.6,1.4c0.4,0.4,0.9,0.6,1.4,0.6C26.3,48.2,26.8,48,27.2,47.6z M39.2,28.6c0.4-0.4,0.6-0.9,0.6-1.4c0-0.5-0.2-1-0.6-1.4c-0.7-0.8-2.1-0.7-2.8,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1.1,0.6,1.4 c0.4,0.4,0.9,0.6,1.4,0.6C38.3,29.2,38.8,29,39.2,28.6z M39.2,68.6c0.4-0.4,0.6-0.9,0.6-1.4c0-0.5-0.2-1-0.6-1.4 c-0.7-0.8-2.1-0.7-2.8,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4c0.4,0.4,0.9,0.6,1.4,0.6C38.3,69.2,38.8,69,39.2,68.6z"></path>{" "}
                    </g>{" "}
                    <g id="_x32_3"></g>{" "}
                  </g>
                </svg>
                Dark
              </MenuItem>
              <MenuItem
                sx={MenuStyle}
                onClick={() => {
                  changeTheme("light");
                  handleClose();
                }}
              >
                <svg
                  width="20px"
                  height="20px"
                  style={{ marginRight: "15px" }}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g
                      clip-path="url(#a)"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    >
                      {" "}
                      <path
                        d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                        fill="currentColor"
                        fill-opacity=".16"
                      ></path>{" "}
                      <path d="M12 19v4M12 1v4" stroke-linecap="round"></path>{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="a">
                        {" "}
                        <path fill="#ffffff" d="M0 0h24v24H0z"></path>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </g>
                </svg>
                Light
              </MenuItem>
              <MenuItem
                sx={MenuStyle}
                onClick={() => {
                  changeTheme("dark");
                  handleClose();
                }}
              >
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  style={{ marginRight: "15px" }}
                  stroke="currentColor"
                  aria-hidden="true"
                  role="img"
                  preserveAspectRatio="xMidYMid meet"
                   fill="currentColor"
                  //  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M30.346 6.562l-4.801 4.919a14.254 14.254 0 0 1 4.717 1.962l.084-6.881"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8.482 28.544L3.56 33.345l6.883-.084a14.207 14.207 0 0 1-1.961-4.717"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M10.443 17.738l-6.883-.084l4.922 4.802a14.254 14.254 0 0 1 1.961-4.718"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M19.457 11.48l-4.801-4.92l.084 6.881a14.288 14.288 0 0 1 4.717-1.961"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M34.287 17.327l2.709-6.322l-6.32 2.709a14.4 14.4 0 0 1 3.611 3.613"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8.15 25.5c0-.873.092-1.725.24-2.557L2 25.499l6.391 2.557A14.446 14.446 0 0 1 8.15 25.5"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14.328 13.713l-6.322-2.709l2.709 6.322a14.392 14.392 0 0 1 3.613-3.613"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M25.057 11.391L22.5 5l-2.555 6.391c.83-.149 1.682-.24 2.555-.24c.875-.001 1.727.09 2.557.24"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M55.527 34.404a12.864 12.864 0 0 0-.584-.324v-.094C54.943 25.724 48.359 19 40.268 19c-.071 0-.142.006-.213.007l1.385-1.352l-6.881.084c.414.642.771 1.323 1.08 2.028c-.433.148-.855.32-1.271.507c-2.011-4.564-6.559-7.758-11.867-7.758c-7.17 0-12.982 5.813-12.982 12.983c0 3.186 1.166 6.085 3.071 8.342c-.225.447-.434.906-.612 1.381c-.452-.489-.881-1-1.262-1.549l-2.711 6.321l1.398-.6A11.532 11.532 0 0 0 6 47.572c0 4.939 3.088 9.298 7.686 10.848c1.129.385 2.313.58 3.51.58h31.896c.963 0 1.939-.115 2.906-.345C57.883 57.275 62 51.996 62 45.819c0-4.691-2.48-9.065-6.473-11.415m-4.375 20.54a8.907 8.907 0 0 1-2.059.247H17.195a7.26 7.26 0 0 1-2.34-.389c-2.973-1.003-5.121-3.86-5.121-7.23c0-2.293.994-4.343 2.561-5.738a7.367 7.367 0 0 1 2.443-1.453a7.332 7.332 0 0 1 2.457-.432c2.406 0 4.539 1.168 5.904 2.974l.066-.001c-1.584-2.978-4.545-5.077-8.01-5.414c1.289-4.591 5.426-7.96 10.338-7.96c.523 0 1.033.052 1.537.126c.998.146 1.949.426 2.838.83c3.311 1.509 5.729 4.669 6.266 8.454l.002-.064c0-4.313-2.166-8.106-5.445-10.319c1.867-3.435 5.453-5.765 9.576-5.765c6.043 0 10.941 5.005 10.941 11.177c0 .301-.02.593-.043.886A11.317 11.317 0 0 0 44.53 37.7a8.989 8.989 0 0 1 6.358-1.064a8.972 8.972 0 0 1 2.773 1.069a9.393 9.393 0 0 1 4.605 8.115c.002 4.447-3.039 8.169-7.114 9.124"
                      fill="currentColor"
                      // fill="#000000"
                    ></path>
                  </g>
                </svg>
                Blue
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem onClick={handleClose} sx={MenuStyle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  style={{ marginRight: "15px" }}
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
                {/* <Person /> */}
                Profile
              </MenuItem>

              <MenuItem onClick={LogChange} sx={MenuStyle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "15px" }}
                  stroke="currentColor"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                </svg>
                Logout
              </MenuItem>
            </StyledMenu>
            <Box
              sx={{
                display: "flex",
                fontWeight: theme.palette.typography.fontWeightBold,
                color: theme.palette.text.iconButton,
                background: theme.palette.background.iconButton,
                borderRadius: "20px",
                "&:hover": {
                  color: theme.palette.action.iconButtonHoverColor,
                  background: theme.palette.action.focusBackground,
                },
              }}
              onClick={(e) => handleMenu(e)}
            >
              <Tooltip title="Click to Logout">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  onClick={(e) => handleMenu(e)}
                  sx={{
                    color: "inherit",
                    background: "inherit",
                    // "&:hover": {
                    //   color:theme.palette.action.iconButtonHoverColor,
                    //   background: theme.palette.action.focusBackground
                    // },
                  }}
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Typography
                sx={{
                  fontWeight: "bold",
                  paddingTop: "10px",
                  paddingRight: "10px",
                }}
              >
                {userValue?.payload?.username}
              </Typography>
            </Box>
          </Box>
          {/* </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
