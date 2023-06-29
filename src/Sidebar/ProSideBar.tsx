import React, { useEffect, useState } from "react";
import { navigator } from "../serviceHolder";
import { userValue, setUserValue } from "../Apple";
import { myService } from "../service/service";
import { Permission } from "../impaktapps-jsonforms/lib";
import { IconProvider } from "./IconProvider";
import { actions, DataContext } from "../Reducer";
import { useContext } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import "./Style.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  // useProSidebar,
} from "react-pro-sidebar";
import { hasPermissions } from "./hasPermissions";
import { Box, Divider, Stack, Typography } from "@mui/material";
export default function ProSidebar(props: any) {
  const [activeValue, setActiveValue] = useState<string>("");
  const { dispatch, state } = useContext(DataContext);
  const [menu, setMenu] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
  const [searchOn, setSearchOn] = useState<boolean>(false);
  const [rtlBoolean, setRtlBoolean] = useState(false);
  const [filterMenu, setFilterMenu] = useState([]);
  const { collapsed } = useProSidebar();
  const callApi = async () => {
    const service = myService();
    if (props.permissions.length !== 0) {
      await service
        .get("/menu/getCompleteTree")
        .then((res: any) => {
          const filterResponse = [];
          const data = res.data.payload.children.map((e: any) => {
            const elem = [];
            if (e.children.length > 0) {
              const childData = e.children.map((elemChild: any) => {
                elem[elemChild.priority] = elemChild;
                return;
              });
            }

            filterResponse[e.priority] = { ...e, children: elem };

            return;
          });
          setFilterMenu(filterResponse);
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
    window.localStorage.setItem("pageName", name);
    setActiveValue(name);
    navigator(url);

    // dispatch({ type: actions.currentMenuChange, payload: name });
  };
  const searchBtn = (value: string) => {
    // const strRegExPattern = `${value}`;

    const regex = new RegExp(value, "gi");

    let searchResult: any[] = [];

    const data = filterMenu.map((e: any) => {
      let finalObj: any = { name: "", url: null, id: e.id, children: [] };
      if (regex.test(e.name)) {
        finalObj.children = e.children;
        finalObj.name = e.name;
        return finalObj;
      }
      if (e.children.length > 0) {
        const childData = e.children.filter((elemChild: any) => {
          const boolean = regex.test(elemChild.name);
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
      return finalObj;
      // }
    });

    data.length > 0 && setMenu(data);

    data.length > 0 && setSearchOn(true);
  };
  const enterCall = (e: any) => {
    if (e.key === "Enter") {
      searchBtn(search);
    }
  };
  return (
    <>
      <div
        className="myDiv"
        style={{
          position: "fixed",
          left: 0,
          scrollbarColor: "white",
          overflowY: "scroll",
          // overflowX: "auto",
          transition: "width 2s",
          paddingBottom:"150px",
          // width:"100%",
          height: "100vh",
        }}
      >
        <Sidebar
          collapsedWidth={"60px"}
          defaultCollapsed={false}
          style={{ transition: " width 0.5s" }}
          rtl={rtlBoolean}
          rootStyles={{
            border: "none",
            transition: "width 2s",
            overflow: "hidden",
          }}
        >
          {!collapsed && (
            <div
              style={{ width: "80%", marginRight: "auto", marginLeft: "auto" }}
            >
              <TextField
                fullWidth
                onChange={(e) => {
                  setSearch(e.target.value);
                  searchBtn(e.target.value);
                }}
                placeholder="Search.."
                value={search}
                sx={{
                  marginTop: "5px",
                  padding: "18px auto 10px auto",
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
                onKeyDown={(e) => enterCall(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={(e) => searchBtn(search)}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                size={"medium"}
              />
            </div>
          )}
          <Menu
            closeOnClick={true}
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                return {
                  color: active ? "#3f51b5" : "#364152",
                  backgroundColor: active ? "#e8eaf6" : undefined,
                  fontSize: "0.875rem",
                  transition: "width 5.5s",
                  fontWeight: active ? "500" : undefined,
                  fontFamily: "Roboto",
                  borderRadius: "20px",
                  overflowX: "auto",
                  margin: !collapsed && "2px 15px",
                  "&:hover": !collapsed && {
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
                      {!collapsed && (
                        <Typography
                          sx={{
                            fontFamily: "Roboto",
                            paddingLeft: "20px",
                            transition: " width 5.5s",
                            fontWeight: "500",
                            color: "rgb(18, 25, 38)",
                            marginBottom: "5px",
                            fontSize: "0.875rem",
                          }}
                        >
                          {elem.name}
                        </Typography>
                      )}
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
                                          {IconProvider(
                                            grandChildElem.name,
                                            activeValue === grandChildElem.name
                                              ? true
                                              : false
                                          )}
                                          {/* <CircleIcon /> */}
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
                                {collapsed &&
                                  IconProvider(
                                    childElem.name,
                                    activeValue === childElem.name
                                      ? true
                                      : false
                                  )}
                                {!collapsed && (
                                  <Stack spacing={2} direction={"row"}>
                                    {IconProvider(
                                      childElem.name,
                                      activeValue === childElem.name
                                        ? true
                                        : false
                                    )}

                                    {<div> {childElem.name}</div>}
                                  </Stack>
                                )}
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
                    </>
                  ) : childrenPermission ? (
                    <MenuItem
                      onClick={() => clickHandler(elem.url, elem.name)}
                      active={activeValue === elem.name ? true : false}
                    >
                      <Stack spacing={2} direction={"row"}>
                        {IconProvider(
                          elem.name,
                          activeValue === elem.name ? true : false
                        )}
                        <div>{elem.name}</div>
                      </Stack>
                    </MenuItem>
                  ) : null}
                </>
              );
            })}
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
