import React, { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { actions, DataContext } from "../Reducer";
import { useContext } from "react";
import { navigator } from "../Logic";
import { userValue } from "../App";
import { myService } from "../service/service";
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
import "../App.css";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function ProSidebar() {
  const [activeValue, setActiveValue] = useState<string>("");
  const { dispatch, state } = useContext(DataContext);
  const [menu, setMenu] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
  const [searchOn, setSearchOn] = useState<boolean>(false);
  const [rtlBoolean, setRtlBoolean] = useState(false);
  // const { collapseSidebar } = useProSidebar();
  const callApi = async () => {
    const service = myService();
    service
      .get("/menu/getCompleteTree")
      .then((res: any) => {
        setSearchOn(false);
        setSearch("");
        setMenu(res.data.payload.children);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  useEffect(() => {
    callApi();
  }, [userValue]);

  const clickHandler = (url: string, name) => {
    setActiveValue(url);
    navigator(url);
    dispatch({ type: actions.currentMenuChange, payload: name });
  };
  const searchBtn = (event: any) => {
    const strRegExPattern = `${search}`;
    const regex = new RegExp(strRegExPattern, "gi");
    let searchResult = [];
    const data = menu.filter((e) => {
      if (e.children.length > 0) {
        const childData = e.children.filter((elemChild) => {
          return regex.test(elemChild.name);
        });

        if (childData.length > 0) {
          // setSearchOn(true);
          //  setMenu(childData);
          searchResult = [...searchResult, ...childData];
          return true;
        }
      }
      return regex.test(e.name);
    });
    data.length > 0 && setMenu(searchResult);
    data.length > 0 && setSearchOn(true);
  };
  const enterCall = (e) => {
    if (e.key === "Enter") {
      searchBtn("bhb");
    }
  };
  return (
    <>
      <Sidebar
        collapsedWidth="0px"
        defaultCollapsed={true}
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
                    <IconButton onClick={(e) => callApi()}>
                      <SearchOffIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={(e) => searchBtn(e)}>
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
              console.log(level);
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
            let grandChild: boolean = false;
            const childPresent: boolean = elem.children.length > 0;

            return (
              <>
                {childPresent ? (
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
                      return (
                        <>
                          {grandChild ? (
                            <>
                              <SubMenu label={childElem.name}>
                                {childElem.children.map(
                                  (grandChildElem: any) => {
                                    return (
                                      <MenuItem
                                        onClick={() =>
                                          clickHandler(
                                            grandChildElem.url,
                                            grandChildElem.name
                                          )
                                        }
                                        active={
                                          activeValue === grandChildElem.url
                                            ? true
                                            : false
                                        }
                                      >
                                        <CircleIcon />
                                        {grandChildElem.name}
                                      </MenuItem>
                                    );
                                  }
                                )}
                              </SubMenu>
                            </>
                          ) : (
                            <>
                              <MenuItem
                                onClick={() =>
                                  clickHandler(childElem.url, childElem.name)
                                }
                                active={
                                  activeValue === childElem.url ? true : false
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
                            </>
                          )}
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
                ) : (
                  <>
                    <MenuItem
                      onClick={() => clickHandler(elem.url, elem.name)}
                      active={activeValue === elem.url ? true : false}
                    >
                      <Stack spacing={2} direction={"row"}>
                        <CircleIcon
                          color={"disabled"}
                          sx={{
                            fontSize: "0.875rem",
                            paddingTop: "6px",
                          }}
                        />
                        <div> {elem.name}</div>
                      </Stack>
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
