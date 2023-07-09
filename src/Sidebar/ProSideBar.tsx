import React, { useEffect, useState } from "react";
import { navigator } from "../serviceHolder";
// import { userValue, setUserValue } from "../Apple";
import { myService } from "../service/service";
import { Permission } from "../impaktapps-jsonforms/lib";
import { IconProvider } from "../utils/IconProvider";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
  const [menu, setMenu] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
  const [rtlBoolean, setRtlBoolean] = useState(false);
  const [filterMenu, setFilterMenu] = useState([]);
  const { collapsed } = useProSidebar();
  const callApi = async () => {
    const service = myService();
    if (props.permissions.length !== 0) {
      await service
        .get("/menu/getCompleteTree")
        .then((res: any) => {
          const filterResponse: any[] = [];
          const data = res.data.payload.children.map((e: any) => {
            const elem: any[] = [];
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
          setSearch("");
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    callApi();
  }, [props.userValue]);

  const clickHandler = (url: string, name: any) => {
    window.localStorage.setItem("pageName", name);
    setActiveValue(name);
    navigator(url);
  };
  const searchBtn = (paramValue: string) => {
    const value = paramValue.toUpperCase();
    const data = filterMenu.map((e: any) => {
      const parentElem = e.name.toUpperCase();
      let finalObj: any = {
        name: "",
        url: null,
        id: e.id,
        children: [],
      };
      if (parentElem.indexOf(value) > -1) {
        finalObj.children = e.children;
        finalObj.name = e.name;
        return finalObj;
      }
      if (e.children.length > 0) {
        const childData = e.children.filter((elemChild: any) => {
          const elem = elemChild.name.toUpperCase();
          const result = elem.indexOf(value) > -1;
          return result;
        });

        if (childData.length > 0) {
          finalObj.children = childData;
          finalObj.name = e.name;
          return finalObj;
        }
      }
      return finalObj;
    });

    data.length > 0 && setMenu(data);
  };

  const enterCall = (e: any) => {
    if (e.key === "Enter") {
      searchBtn(search);
    }
  };
  return (
    <>
      <Box
        className="myDiv"
        sx={{
          position: { sx: "static", sm: "static", md: "fixed" },
          left: 0,
          scrollbarColor: "white",
          overflowY: "scroll",
          overflowX: "scroll",
          paddingBottom:"50px",
          transition: "width 2s",
          display: {
            xs: collapsed ? "none" : "block",
            sm: collapsed ? "none" : "block",
            md: "block",
          },
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
                  marginTop: "16px",
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
                                          onClick={() => {
                                            props.drawer &&
                                              props.handleDrawer();
                                            clickHandler(
                                              grandChildElem.url,
                                              grandChildElem.name
                                            );
                                          }}
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
                                          {grandChildElem.name}
                                        </MenuItem>
                                      ) : null;
                                    }
                                  )}
                                </SubMenu>
                              </>
                            ) : permission ? (
                              <MenuItem
                                onClick={() => {
                                  props.drawer && props.handleDrawer();
                                  clickHandler(childElem.url, childElem.name);
                                }}
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
                      onClick={() => {
                        props.drawer && props.handleDrawer();
                        clickHandler(elem.url, elem.name);
                      }}
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
      </Box>
    </>
  );
}
