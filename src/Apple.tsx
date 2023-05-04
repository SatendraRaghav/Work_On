import React, { useEffect } from 'react'
import App from './App'
import { HomeObjFunc, objFunc } from './Logic'
import Header from './Header/Header';
import ProSidebar from './Sidebar/ProSideBar';
import LoginHeader from './Header/LoginHeader';

import { actions, DataContext, DataProvider } from "./Reducer";
import { useContext } from "react";
import { useLocalStorage } from "./Authentication/useLocalStorage";
import { useProSidebar } from "react-pro-sidebar";
export let userValue: any = false;
export let setUserValue: any;
import './App.css'
function Apple() {
  const { collapsed } = useProSidebar();
  const { dispatch, state } = useContext(DataContext);
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
          <ProSidebar />
          <div style={{ display: "flex", flexDirection: "row", width: "auto" }}>
            <div style={{ width: collapsed ? 0 : 330 }} >
          
            </div>
            <div style={{ width: "100%" }}>
              <App objFunc={objFunc}  />
            </div>
          </div>
        </>
      ) 
      : (<>
        <LoginHeader />
        <App objFunc={HomeObjFunc} />
   </> )}  </>
  );
}

export default Apple