import React, { useEffect, useState } from "react";

import { navigator } from "../serviceHolder";
import { userValue,setUserValue } from '../Apple'; 
import { myService } from "../service/service";
// import { Permission } from "json2ui";
import { Permission } from "../impaktapps-jsonforms/lib";

import CircleIcon from "@mui/icons-material/Circle";
import { actions, DataContext } from "../Reducer";
import { useContext } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  // useProSidebar,
} from "react-pro-sidebar";
import { hasPermissions } from "./hasPermissions";

import "../App.css";
import { Box, Divider, Stack, Typography } from "@mui/material";
export default function ProSidebar(props: any) {
  const [activeValue, setActiveValue] = useState<string>("");
  const { dispatch, state } = useContext(DataContext);
  const [menu, setMenu] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
  const [searchOn, setSearchOn] = useState<boolean>(false);
  const [rtlBoolean, setRtlBoolean] = useState(false);
  const[filterMenu,setFilterMenu] = useState([])

  const callApi = async () => {
    const service = myService();
    if (props.permissions.length !== 0) {
      await service
        .get("/menu/getCompleteTree")
        .then((res: any) => {
           const filterResponse = []
            const data = res.data.payload.children.map((e: any) => {
              const elem = [];
              if (e.children.length > 0) {
                const childData = e.children.map((elemChild: any) => {
                    elem[elemChild.priority] = elemChild;
                    return;
                });  
              }
            
             filterResponse[e.priority] = {...e,children:elem};
              
              return
            }
        
             
          );
           setFilterMenu(filterResponse)
           setMenu(filterResponse);
          setSearchOn(false);
          setSearch("");
          
       
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    callApi();
  }, [userValue]);

  const clickHandler = (url: string, name: any) => {
    window.localStorage.setItem("pageName",name)
    setActiveValue(name);
    navigator(url);

    // dispatch({ type: actions.currentMenuChange, payload: name });
  };
  const searchBtn = (value:string) => {
    // const strRegExPattern = `${value}`;

    const regex = new RegExp(value, "gi");

    let searchResult: any[] = [];

    const data = filterMenu.map((e: any) => {
      let finalObj:any = {name:"",
      url:null,
      id:e.id,
    children:[]}
    if(regex.test(e.name)){
      finalObj.children = e.children;
      finalObj.name = e.name;
      return finalObj;
    }
      if (e.children.length > 0) {
        const childData = e.children.filter((elemChild: any) => {
         const  boolean =  regex.test(elemChild.name);
          return boolean;
          
        });

        if (childData.length > 0) {
            finalObj.children = childData;
            finalObj.name = e.name;
            return finalObj;
        }
      }
      // else{
        // finalObj.children = []
        return finalObj
      // }
      
    }

     
  );
   
    data.length > 0 && setMenu(data)

    data.length > 0 && setSearchOn(true);
  };
  const enterCall = (e: any) => {
    if (e.key === "Enter") {
      searchBtn(search);
    }
  };
  return (
    <>
      <Sidebar
        collapsedWidth="0px"
        defaultCollapsed={false}
        rtl={rtlBoolean}
        rootStyles={{
          border: "none",
          overflowY: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          paddingBottom: "100px",
        }}
      >
        <div style={{ width: "80%", marginRight: "auto", marginLeft: "auto" }}>
          <TextField
            fullWidth
            onChange={(e) => {
              setSearch(e.target.value);
              searchBtn(e.target.value)
              // e.target.value ? "" : setMenu(filterMenu);
            }}
            placeholder="Search.."
            value={search}
            sx={{
              "& .MuiInputBase-root": {
                background: "#f8fafc",
                fontFamily: "inherit",
                borderRadius: "20px",
                marginBottom: "14px",
              },
              "& .MuiInputBase-input": {
                fontSize: "14px",
                fontFamily: "inherit",
                padding: "8px",
                paddingRight: "2px",
              },
              "& .MuiInputLabel-root": {
                color: "#828f9f",
                fontFamily: "roboto",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  border: "1.5px solid #364152",
                },
              },
            }}
            onKeyPress={(e) => enterCall(e)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {searchOn ? (
                    <IconButton onClick={(e) => setMenu(filterMenu)}>
                      <SearchOffIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={(e) => searchBtn(search)}>
                      <SearchIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
            size={"medium"}
          />
        </div>
        <Menu
          closeOnClick={true}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              return {
                color: active ? "#3f51b5" : "black",
                backgroundColor: active ? "#e8eaf6" : undefined,
                fontSize: "0.875rem",
                fontWeight: active ? "500" : undefined,
                fontFamily: "Roboto",
                borderRadius: "20px",
                overflowX: "auto",
                margin: "2px 15px",
                "&:hover": {
                  color: "#3f51b5",
                  background: "#e8eaf6",
                },
              };
            },
          }}
        >
          {menu.map((elem: any, i: number) => {
            const permissions = props.permissions.map((elem: string) => {
              return new Permission(elem);
            });
            const childPresent: boolean = elem.children.length > 0;
            let permission: boolean = false;
            let childrenPermission = hasPermissions(elem, permissions);
            let grandChild: boolean = false;
            return (
              <>
                {childPresent && childrenPermission ? (
                  <>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        paddingLeft: "20px",
                        fontWeight: "500",
                        color: "rgb(18, 25, 38)",
                        marginBottom: "5px",
                        fontSize: "0.875rem",
                      }}
                    >
                      {elem.name}
                    </Typography>
                    {elem.children.map((childElem: any) => {
                      if (childPresent) {
                        grandChild = childElem.children.length > 0;
                      }
                      if (!grandChild) {
                        permission = hasPermissions(childElem, permissions);
                      }
                      return (
                        <>
                          {grandChild ? (
                            <>
                              <SubMenu label={childElem.name}>
                                {childElem.children.map(
                                  (grandChildElem: any) => {
                                    const page = grandChildElem.url.slice(1);
                                    const permission = hasPermissions(
                                      grandChildElem,
                                      permissions
                                    );
                                    return permission ? (
                                      <MenuItem
                                        onClick={() =>
                                          clickHandler(
                                            grandChildElem.url,
                                            grandChildElem.name
                                          )
                                        }
                                        active={
                                          activeValue === grandChildElem.name
                                            ? true
                                            : false
                                        }
                                      >
                                        <CircleIcon />
                                        {grandChildElem.name}
                                      </MenuItem>
                                    ) : null;
                                  }
                                )}
                              </SubMenu>
                            </>
                          ) : permission ? (
                            <MenuItem
                              onClick={() =>
                                clickHandler(childElem.url, childElem.name)
                              }
                              active={
                                activeValue === childElem.name ? true : false
                              }
                            >
                              <Stack spacing={2} direction={"row"}>
                                <CircleIcon
                                  color={"disabled"}
                                  sx={{
                                    fontSize: "0.875rem",
                                    paddingTop: "6px",
                                  }}
                                />
                                <div> {childElem.name}</div>
                              </Stack>
                            </MenuItem>
                          ) : null}
                        </>
                      );
                    })}
                    <Divider
                      sx={{
                        width: "80%",
                        color: "black",
                        margin: "10px auto 16px auto",
                      }}
                    />
                    {/* </SubMenu> */}
                  </>
                ) : childrenPermission ? (
                  <MenuItem
                    onClick={() => clickHandler(elem.url, elem.name)}
                    active={activeValue === elem.name ? true : false}
                  >
                    <Stack spacing={2} direction={"row"}>
                      <CircleIcon
                        color="disabled"
                        sx={{ fontSize: "0.875rem", paddingTop: "6px" }}
                      />
                      <div>{elem.name}</div>
                    </Stack>
                  </MenuItem>
                ) : null}
              </>
            );
          })}
        </Menu>
      </Sidebar>
      {/* </div> */}
    </>
  );
}
