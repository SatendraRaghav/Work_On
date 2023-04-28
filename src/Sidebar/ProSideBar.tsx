import React, { useEffect, useState } from "react";
import CircleIcon from '@mui/icons-material/Circle';
import { actions, DataContext } from '../Reducer';
import { useContext } from 'react';
import { navigator } from "../Logic";
import { userValue } from "../App";
import {  myService } from "../service/service";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  // useProSidebar,
} from "react-pro-sidebar";
import "../App.css"
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function ProSidebar() {
  const [activeValue, setActiveValue] = useState<string>("");
  const { dispatch, state } = useContext(DataContext);
  const [menu, setMenu] = useState<any>([]);
  const [rtlBoolean, setRtlBoolean] = useState(false);
  // const { collapseSidebar } = useProSidebar();
  const callApi = async () => {
    const service = myService()
      service
      .get("/menu/getCompleteTree")
      .then((res: any) => {
        console.log(res.data);
        setMenu(res.data.payload.children);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  useEffect(() => {
    callApi();
  }, [userValue]);

  const clickHandler = (url: string,name) => {
    setActiveValue(url);
    navigator(url);
    dispatch({type:actions.currentMenuChange,payload:name})
  };
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          // color: "black",
          // background:"white"
          backgroundColor:"#030c1d",
          color:"white",
        }}
      > */}
        <Sidebar collapsedWidth="0px" defaultCollapsed={true} rtl={rtlBoolean} rootStyles={{
          // background:"white",
          // backgroundColor:"#030c1d",
          // color:"white",
          border:"none",overflowY:"auto",height:"100vh",position:"fixed",left:0,
          paddingBottom:"100px",
          }}>
          <Menu
            closeOnClick={true}
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                console.log(level)
                return {
                  // color: active ? "#673ab7" : "white",
                  // backgroundColor: active ? "#ede7f6" : "#030c1d",
                  color: active ? "#3f51b5" : "black",
                  backgroundColor: active ? "#e8eaf6" : undefined,
                  fontSize:"0.875rem",
                  fontWeight:active?"500":undefined,
                  fontFamily:"Roboto",
                  borderRadius:"20px",
                  overflowX:"auto",
                  margin:"2px 15px",
                  "&:hover": {
                    color: "#3f51b5",
                    background: "#e8eaf6",
                  },
                };
              },
            }}
          >
            {menu.map((elem: any, i: number) => {
              let grandChild: boolean = false;
              const childPresent: boolean = elem.children.length > 0;
             
              return (
                <>
                  {childPresent ? (
                    <>
                      <Typography  sx={{  fontFamily:"Roboto",paddingLeft:"20px",fontWeight:"500",color:"rgb(18, 25, 38)",marginBottom:"5px",fontSize:"0.875rem"}} >{elem.name}</Typography>
                        {elem.children.map((childElem: any) => {
                           if (childPresent) {
                            grandChild = childElem.children.length > 0;
                          }
                          return (
                            <>
                              {grandChild ? (
                                <>
                                  <SubMenu label={childElem.name}>
                                    {childElem.children.map(
                                      (grandChildElem: any) => {
                                        return(
                                        <MenuItem
                                          onClick={() =>
                                            clickHandler(grandChildElem.url,grandChildElem.name)
                                          }
                                          active={
                                            activeValue === grandChildElem.url
                                              ? true
                                              : false
                                          }
                                        >
                                          <CircleIcon />
                                            {grandChildElem.name}
                                        </MenuItem>)
                                }
                                    )}
                                  </SubMenu>
                                </>
                              ) : (
                                <>
                                  <MenuItem
                                    onClick={() => clickHandler(childElem.url,childElem.name)}
                                    active={
                                      activeValue === childElem.url
                                        ? true
                                        : false
                                    }
                                  >
                                    <Stack spacing={2} direction={"row"}>
                                     <CircleIcon color={"disabled"} sx={{fontSize:"0.875rem",paddingTop:"6px"}} />
                                     <div> {childElem.name}</div>  
                                      </Stack>
                                    	
                                  </MenuItem>
                                </>
                              )}
                            </>
                          );
                        })}
                        <Divider sx={{width:"80%",color:"black",margin:"10px auto 16px auto"}} />
                      {/* </SubMenu> */}
                    </>
                  ) : (
                    <>
                      <MenuItem
                        onClick={() => clickHandler(elem.url,elem.name)}
                        active={activeValue === elem.url ? true : false}
                      >
                        
                         <CircleIcon sx={{fontSize:"15px"}} />
                      <div>{elem.name}</div>  
                      </MenuItem>
                    </>
                  )}
                </>
              );
            })}
           
          </Menu>
        </Sidebar>
      {/* </div> */}
    </>
  );
}
