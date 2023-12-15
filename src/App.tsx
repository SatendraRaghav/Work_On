import React, { useEffect, useState } from "react";
import { serviceHolder } from "./serviceHolder";
import Header from "./Header/Header";
import "./App.css";
import "impaktapps-jsonforms/src/impaktapps-jsonforms/renderers/layouts/slider.css"
import { App } from "./impaktapps-jsonforms/lib/index";
// import { App } from "impaktapps-jsonforms";
import Box from "@mui/material/Box";
import { useLocalStorage } from "./Authentication/useLocalStorage";
import { useProSidebar } from "react-pro-sidebar";
import Drawer from "@mui/material/Drawer";
import ProSidebar from "./Sidebar/ProSideBar";
import { CssBaseline } from "@mui/material";
import DailogBox from "./DialogBox";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import { BrowserView, MobileView } from "react-device-detect";
import Offline from "./Offline";
import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";
import { getTheme } from "./Style/StyleFactory";
import { downloadCSV } from "./utils/downloadFile";
export let setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
export let userValue: any;
function Hyperform() {
  const { collapsed, collapseSidebar } = useProSidebar();
  const [user, setUser] = useLocalStorage("user", null);
  const [open, setOpen] = useState(collapsed);
  const [online, setOnline] = useState(true);
  const [sidebarBoolean, setSidebarBoolean] = useState(false);
  const [appTheme,setAppTheme] = useState(createTheme(getTheme("light") as any))
   

  const handleOffline = ()=>{
    console.log("You are offline")
    setOnline(false)
  }
  const handleOnline = ()=>{
    console.log("You are online")
    setOnline(true)
  }
  useEffect(() => {
    window.addEventListener('offline',handleOffline);
    window.addEventListener('online',handleOnline);
    setOpenDialog = setOpen;
    userValue = user;
    return ()=>{
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, [user]);
  if(!online){
       return <Offline />
  }
  
  const changeTheme = (mode:string,custom?:boolean)=>{
   setAppTheme(createTheme(getTheme(mode,custom) as any))
  }
  return (
    <div>
      {user?.payload?.token ? (
        <>  
          <BrowserView>
          <ThemeProvider theme={appTheme}>
        <CssBaseline />
            <div 
            style={{ position: "relative" }}
            >
              <Header
                handleDrawer={() => collapseSidebar()}
                userValue={user}
                changeTheme={changeTheme}
                setUserValue={setUser}
              />
              <ProSidebar
                permissions={user.payload.permissions}
                handleDrawer={() => setSidebarBoolean((pre) => !pre)}
                drawer={false}
                userValue={user}
                setUserValue={setUser}
              />
              <div style={{ width: "100%", display: "flex" }}>
                <Box
                  sx={{
                    width: collapsed
                      ? { xs: "0", sm: "0", md: "50px" }
                      : "240px",
                    transition: " width 0.s",
                  }}
                ></Box>
                <Box
                //  component={"div"}
                  sx={{
                    width: collapsed
                      ? { xs: "100%", sm: "100%", md: "calc(100% - 65px)" }
                      : "calc(100% - 255px)",
                      //@ts-ignore
                      background:appTheme.palette.background.heading,
                    position: "absolute",
                    float: "right",
                    transition: "width .6s",
                    right: 0,
                    zIndex: -1,
                  }}
                >
                  <App
                    serviceHolder={serviceHolder}
                    styleTheme={{theme:appTheme}}
                    permissions={user.payload.permissions}
                  />
                
                  <Footer padding={"20px"} />
                </Box>
                <DailogBox
                    sx={{zIndex:1000}}
                    open={open}
                    setOpen={setOpen}
                    userValue={user}
                    setUserValue={setUser}
                  />
              </div>
              
            </div>
            </ThemeProvider>
          </BrowserView>
          <MobileView>
          <ThemeProvider theme={appTheme}>
            <Header
              handleDrawer={() => setSidebarBoolean((pre) => !pre)}
              userValue={user}
              changeTheme={changeTheme}
              setUserValue={setUser}
            />
            <div>
              <Box
                sx={{
                  width: "100%",

                  transition: "width .6s",
                  right: 0,
                }}
              >
              {sidebarBoolean ? <App
                  serviceHolder={serviceHolder}
                  styleTheme={{theme:appTheme}}
                  permissions={user.payload.permissions}
                />:
                <App
                  serviceHolder={serviceHolder}
                  styleTheme={{theme:appTheme}}
                  permissions={user.payload.permissions}
                />
              }
                <DailogBox
                  open={open}
                  setOpen={setOpen}
                  userValue={user}
                  setUserValue={setUser}
                />
                <Footer padding={"20px"} />
              </Box>
              <Drawer
                anchor="left"
                open={sidebarBoolean}
                onClose={() => setSidebarBoolean(false)}
              >
                <Box
                  sx={{ width: "275px", color: "black", marginTop: "48px" }}
                  role="presentation"
                  className="myDiv"
                >
                  <ProSidebar
                    permissions={user.payload.permissions}
                    userValue={user}
                    setUserValue={setUser}
                    handleDrawer={() => setSidebarBoolean((pre) => !pre)}
                    drawer={true}
                  />
                </Box>
              </Drawer>
            </div>
            </ThemeProvider>
          </MobileView>
        </>
      ) : (
        <Box
          className="myDiv"
          style={{
            background: "#eef2f6",
            height: "100vh",
            marginTop: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ margin: "-8px -16px" }}>
          {window.location.pathname.startsWith("/passwordReset") ?
          <div style={{marginTop:"10vh",textAlign:"center"}}> Your Reset Page </div>:
            <Login userValue={user} setUserValue={setUser} />
          }
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Footer padding="10px" color="inherit" />
        </Box>
      )}
    </div>
  );
}

export default Hyperform;
