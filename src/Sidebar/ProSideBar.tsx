import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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

export default function ProSidebar() {
  const [activeValue, setActiveValue] = useState<string>("");
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

  const clickHandler = (text: string) => {
    setActiveValue(text);
    navigator(text);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          color: "black",
          background:"white"
        }}
      >
        <Sidebar collapsedWidth="0px" defaultCollapsed={true} rtl={rtlBoolean} rootStyles={{
          background:"white",border:"none",overflowY:"auto",height:"100vh",position:"fixed",left:0,
          paddingBottom:"100px"
          }}>
          <Menu
            closeOnClick={true}
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                return {
                  color: active ? "#673ab7" : "black",
                  backgroundColor: active ? "#ede7f6" : undefined,
                  borderRadius:"10px",
                  margin:"2px 15px"
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
                      <SubMenu label={` ${elem.name}`} >
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
                                            clickHandler(grandChildElem.url)
                                          }
                                          active={
                                            activeValue === grandChildElem.url
                                              ? true
                                              : false
                                          }
                                        >
                                            {grandChildElem.name}
                                        </MenuItem>)
                                }
                                    )}
                                  </SubMenu>
                                </>
                              ) : (
                                <>
                                  <MenuItem
                                    onClick={() => clickHandler(childElem.url)}
                                    active={
                                      activeValue === childElem.url
                                        ? true
                                        : false
                                    }
                                  >
                                       {childElem.name}
                                    	
                                  </MenuItem>
                                </>
                              )}
                            </>
                          );
                        })}
                      </SubMenu>
                    </>
                  ) : (
                    <>
                      <MenuItem
                        onClick={() => clickHandler(elem.url)}
                        active={activeValue === elem.url ? true : false}
                      >
                        {` ${elem.name}`}
                      </MenuItem>
                    </>
                  )}
                </>
              );
            })}
           
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
