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
import logo from "../assets/hyperformLogo.jpg";
// import { userValue, setUserValue } from "../Apple";
import { navigator } from "../serviceHolder";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { MenuProps, useProSidebar } from "react-pro-sidebar";
import { Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
export default function Header({
  handleDrawer,
  setUserValue,
  userValue,
}: any) {
  const { dispatch, state } = useContext(DataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { collapseSidebar, collapsed } = useProSidebar();

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
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
    padding: "20px auto",
    zIndex: theme.zIndex.drawer + 1,
  }));
  const StyledMenu = styled((props: MenuProps) => (
    <Menu open={false} elevation={0} {...props} />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      marginTop: theme.spacing(4),
      borderRadius: "20px",
      minWidth: 280,
      padding: "80px auto",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "6px 0",
      },
    },
  }));
  return (
    <Box sx={{ display: "flex", height: "70px" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ marginRight: "1px", marginLeft: "-30px" }}>
            <img src={logo} alt="impakt_logo" width={220} height={40} />
          </Box>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginLeft: "5px",
              fontWeight: "bolder",
              color: "#3949ab",
              background: "#ede7f6",
              borderRadius: "10px",
              "&:hover": {
                color: "white",
                background: "#3949ab",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box component={"div"} sx={{ flexGrow: 1 }} />
          {/* <Box sx={{}}> */}
          <Box
            sx={{
              display: "flex",
              color: "#3949ab",
              background: "#ede7f6",
              borderRadius: "20px",
              "&:hover": {
                color: "white",
                background: "#3949ab",
              },
            }}
          >
            <StyledMenu
              id="demo-customized-menu"
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
              <MenuItem sx={{ marginBottom: "20px" }} disableRipple>
                <Typography sx={{ fontWeight: "bold", marginRight: "10px" }}>
                  Hello,
                </Typography>
                {userValue?.payload?.username}
              </MenuItem>
              <MenuItem
                sx={{
                  padding: "40px",
                  borderRadius: "20px",
                  bgcolor: "#e6e8f4",
                  fontWeight: 500,
                  margin: "10px",
                  "&:hover": {
                    color: "#3f51b5",
                    background: "#e8eaf6",
                  },
                }}
              >
                <Box>Hyperform Dashboard</Box>
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                onClick={handleClose}
                sx={{
                  margin: "10px",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "#3f51b5",
                    background: "#e8eaf6",
                  },
                }}
              >
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

              <MenuItem
                onClick={LogChange}
                sx={{
                  margin: "10px",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "#3f51b5",
                    background: "#e8eaf6",
                  },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "15px" }}
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
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
            <Tooltip title="Click to Logout">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                onClick={(e) => handleMenu(e)}
                sx={{
                  "&:hover": {
                    color: "white",
                    background: "#3949ab",
                  },
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
          {/* </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
