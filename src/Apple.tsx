import React, { useEffect, useState } from 'react'
// import Hyperform from './impaktapps-jsonforms/core/Hyperform/Hyperform';
import { serviceHolder,loginServiceHolder } from './serviceHolder';
import Header from './Header/Header';
import './App.css'
import ProSidebar from './Sidebar/ProSideBar';
import LoginHeader from './Header/LoginHeader';
import App from "./impaktapps-jsonforms/core/App/App"
import { useLocalStorage } from "./Authentication/useLocalStorage";
import { useProSidebar } from "react-pro-sidebar";
export let userValue: any = false;
export let setUserValue: any;
export let setOpenDialog:React.Dispatch<React.SetStateAction<boolean>>;
import DailogBox from './DialogBox';
function Apple() {
  const { collapsed } = useProSidebar();
  const [user, setUser] = useLocalStorage("user", null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    userValue = user;
    setUserValue = setUser;
    setOpenDialog= setOpen;
  }, [user]);
  useEffect(() => {
    if (window.location.pathname === "/" || !window.location.pathname) {
      setUser("null");
    }
  }, []);
  return (
    <>
     {user?.payload?.token ? (
        <>
          <Header />
          <ProSidebar permissions={user.payload.permissions} />
          <div style={{ width: "100%" ,display:"flex"}}>
            <div style={{ width: collapsed ? 0 : "240px" }} >
          
            </div>
            <div style={{ width:collapsed?"97.8%": "calc(98% - 250px)"}}>
              <App serviceHolder={serviceHolder} permissions={user.payload.permissions} />
              <DailogBox open={open} setOpen={setOpen}></DailogBox>
            </div>
          </div>
        </>
      ) 
      : (<>
        <LoginHeader />
        <App serviceHolder={loginServiceHolder} />
   </> )} 
 </>
  );
}

export default Apple