import React, { useEffect } from 'react'
// import Hyperform from './impaktapps-jsonforms/core/Hyperform/Hyperform';
import { HomeObjFunc, objFunc } from './Logic'
import Header from './Header/Header';
import ProSidebar from './Sidebar/ProSideBar';
import LoginHeader from './Header/LoginHeader';
import App from "./impaktapps-jsonforms/core/App/App"
import { actions, DataContext, DataProvider } from "./Reducer";
import { useContext } from "react";
import { useLocalStorage } from "./Authentication/useLocalStorage";
import { useProSidebar } from "react-pro-sidebar";
export let userValue: any = false;
export let setUserValue: any;
import './App.css'
function Apple() {
  const { collapsed } = useProSidebar();
  const [user, setUser] = useLocalStorage("user", null);
  useEffect(() => {
    userValue = user;
    setUserValue = setUser;
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
              <App objFunc={objFunc} permissions={user.payload.permissions} />
            </div>
          </div>
        </>
      ) 
      : (<>
        <LoginHeader />
        <App objFunc={HomeObjFunc} />
   </> )} 
 </>
  );
}

export default Apple